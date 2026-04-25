async function main() {
  const argon2 = await import("argon2");
  const { PrismaPg } = await import("@prisma/adapter-pg");
  const { PrismaClient, UserRole, UserStatus, UserType } =
    await import("../../src/generated/prisma/index.js");
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set");
  }

  const adapter = new PrismaPg({
    connectionString: databaseUrl,
  });

  const prisma = new PrismaClient({ adapter });
  const email = "send.it@gmail.com";
  const password = "NotGeneratedPass";
  const passwordHash = await argon2.default.hash(password);

  try {
    const user = await prisma.user.upsert({
      where: { email },
      update: {
        status: UserStatus.ACTIVE,
        role: UserRole.CLIENT,
        type: UserType.INDIVIDUAL,
      },
      create: {
        email,
        role: UserRole.CLIENT,
        status: UserStatus.ACTIVE,
        type: UserType.INDIVIDUAL,
      },
    });

    await prisma.userCredentials.upsert({
      where: { userId: user.id },
      update: { passwordHash },
      create: {
        userId: user.id,
        passwordHash,
      },
    });

    console.log(`Seeded user ${email} with type ${user.type}`);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
