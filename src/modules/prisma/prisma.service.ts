import { Injectable } from "@nestjs/common";
import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { existsSync } from "node:fs";
import "dotenv/config";

const normalizeMode = (value: string | undefined): string => {
  const mode = (value ?? "auto").trim().toLowerCase();
  return mode.length === 0 ? "auto" : mode;
};

const isRunningInDocker = (): boolean => {
  try {
    return existsSync("/.dockerenv");
  } catch {
    return false;
  }
};

const resolveDatabaseUrl = (): string => {
  const mode = normalizeMode(process.env.DB_URL_MODE);
  const dockerUrl = process.env.DATABASE_URL_DOCKER;
  const localUrl = process.env.DATABASE_URL_LOCAL;
  const defaultUrl = process.env.DATABASE_URL;

  let resolved: string | undefined;
  if (mode === "docker") {
    resolved = dockerUrl ?? defaultUrl;
  } else if (mode === "local") {
    resolved = localUrl ?? defaultUrl;
  } else {
    resolved = isRunningInDocker() ? (dockerUrl ?? defaultUrl) : (localUrl ?? defaultUrl);
  }

  if (!resolved) {
    throw new Error(
      "Database URL is not configured. Set DATABASE_URL or use DATABASE_URL_DOCKER/DATABASE_URL_LOCAL with DB_URL_MODE.",
    );
  }

  return resolved;
};

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaPg({
      connectionString: resolveDatabaseUrl(),
    });
    super({ adapter });
  }
}
