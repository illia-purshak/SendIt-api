import { BadRequestException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";

describe("AuthController", () => {
  it("resetPassword throws when token is missing", () => {
    const authService = {
      resetPassword: jest.fn(),
    } as unknown as AuthService;

    const controller = new AuthController(authService);

    expect(() =>
      controller.resetPassword(undefined as unknown as string, {
        password: "Password1",
      }),
    ).toThrow(BadRequestException);
  });

  it("resetPassword throws when token is malformed", () => {
    const authService = {
      resetPassword: jest.fn(),
    } as unknown as AuthService;

    const controller = new AuthController(authService);

    expect(() => controller.resetPassword("%E0%A4%A", { password: "Password1" })).toThrow(
      BadRequestException,
    );
  });

  it("resetPassword decodes token and calls service", () => {
    const authService = {
      resetPassword: jest.fn(),
    } as unknown as AuthService;

    const controller = new AuthController(authService);

    controller.resetPassword("abc%20123", { password: "Password1" });

    expect(authService.resetPassword).toHaveBeenCalledWith("abc 123", {
      password: "Password1",
    });
  });
});
