import argon2 from "argon2";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { PrismaService } from "../prisma/prisma.service";
import { MailService } from "../mail/mail.service";
import * as helper from "../../utils/helper";
import { UserRole, UserType } from "src/generated/prisma";

describe("AuthService", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("login returns raw refresh token and tokenId", async () => {
    const prisma = {
      user: {
        findUnique: jest.fn().mockResolvedValue({
          id: 1,
          role: UserRole.CLIENT,
          type: UserType.INDIVIDUAL,
        }),
      },
      userCredentials: {
        findUnique: jest.fn().mockResolvedValue({
          userId: 1,
          passwordHash: "hash",
        }),
      },
      refreshTokens: {
        updateMany: jest.fn().mockResolvedValue({ count: 1 }),
        create: jest.fn().mockResolvedValue({
          id: 123,
          userId: 1,
          tokenHash: "hashed-token",
          expiresAt: new Date(Date.now() + 1000),
        }),
      },
    } as unknown as PrismaService;

    const jwtService = {
      sign: jest.fn().mockReturnValue("access-token"),
    } as unknown as JwtService;

    const mailService = {} as unknown as MailService;

    jest.spyOn(argon2, "verify").mockResolvedValue(true);
    jest.spyOn(helper, "createToken").mockReturnValue("raw-refresh-token");
    jest.spyOn(helper, "hashThis").mockResolvedValue("hashed-token");

    const service = new AuthService(prisma, jwtService, mailService);

    const result = await service.login({
      email: "test@example.com",
      password: "Password1",
    });

    expect(result).toEqual({
      accessToken: "access-token",
      refreshToken: "raw-refresh-token",
      tokenId: 123,
    });
  });

  it("refreshAccessToken signs token with role and type", async () => {
    const tokenRecord = {
      id: 10,
      userId: 7,
      tokenHash: "hash",
      revokedAt: null,
      expiresAt: new Date(Date.now() + 60_000),
    };

    const tx = {
      refreshTokens: {
        update: jest.fn().mockResolvedValue({}),
        create: jest.fn().mockResolvedValue({ id: 456 }),
      },
    };

    const prisma = {
      refreshTokens: {
        findUnique: jest.fn().mockResolvedValue(tokenRecord),
      },
      user: {
        findUnique: jest.fn().mockResolvedValue({
          id: 7,
          role: UserRole.CLIENT,
          type: UserType.ORGANIZATION,
        }),
      },
      $transaction: jest.fn().mockImplementation(<T>(cb: (ctx: typeof tx) => Promise<T>) => cb(tx)),
    } as unknown as PrismaService;

    const jwtService = {
      sign: jest.fn().mockReturnValue("access-token"),
    } as unknown as JwtService;

    const mailService = {} as unknown as MailService;

    jest.spyOn(argon2, "verify").mockResolvedValue(true);
    jest.spyOn(helper, "createToken").mockReturnValue("new-raw-token");
    jest.spyOn(helper, "hashThis").mockResolvedValue("new-hash");

    const service = new AuthService(prisma, jwtService, mailService);

    const result = await service.refreshAccessToken("raw-token", 10);

    expect(jwtService.sign).toHaveBeenCalledWith({
      sub: 7,
      role: UserRole.CLIENT,
      type: UserType.ORGANIZATION,
    });
    expect(result).toEqual({
      accessToken: "access-token",
      refreshToken: "new-raw-token",
      tokenId: 456,
    });
  });

  it("compliteOrganizationProfile updates profileCompleted", async () => {
    const tx = {
      organizationProfile: {
        create: jest.fn().mockResolvedValue({}),
      },
      user: {
        update: jest.fn().mockResolvedValue({}),
      },
    };

    const prisma = {
      $transaction: jest.fn().mockImplementation(<T>(cb: (ctx: typeof tx) => Promise<T>) => cb(tx)),
    } as unknown as PrismaService;

    const jwtService = {} as unknown as JwtService;
    const mailService = {} as unknown as MailService;

    const service = new AuthService(prisma, jwtService, mailService);

    await service.compliteOrganizationProfile(
      { sub: 1, role: UserRole.CLIENT, type: UserType.ORGANIZATION },
      {
        companyName: "SendIt LLC",
        companyNameLat: null,
        edrpou: "12345678",
        taxNumber: null,
        legalAddress: "Somewhere",
        contactPersonName: null,
      },
    );

    expect(tx.organizationProfile.create).toHaveBeenCalledWith({
      data: expect.objectContaining({ userId: 1, companyName: "SendIt LLC" }),
    });
    expect(tx.user.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: { profileCompleted: true },
    });
  });

  it("me returns organization profile when user is organization", async () => {
    const prisma = {
      user: {
        findFirst: jest.fn().mockResolvedValue({
          id: 1,
          profileCompleted: true,
          type: UserType.ORGANIZATION,
        }),
      },
      organizationProfile: {
        findFirst: jest.fn().mockResolvedValue({ userId: 1 }),
      },
      individualProfile: {
        findFirst: jest.fn(),
      },
    } as unknown as PrismaService;

    const jwtService = {} as unknown as JwtService;
    const mailService = {} as unknown as MailService;

    const service = new AuthService(prisma, jwtService, mailService);

    const result = await service.me({
      sub: 1,
      role: UserRole.CLIENT,
      type: UserType.ORGANIZATION,
    });

    expect(prisma.organizationProfile.findFirst).toHaveBeenCalledWith({
      where: { userId: 1 },
    });
    expect(prisma.individualProfile.findFirst).not.toHaveBeenCalled();
    expect(result).toEqual({
      success: true,
      data: [{ id: 1, profileCompleted: true, type: UserType.ORGANIZATION }, { userId: 1 }],
    });
  });
});
