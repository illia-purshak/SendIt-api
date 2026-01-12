import argon2 from "argon2";
import { randomBytes } from "crypto";

export const hashThis = async (value: string): Promise<string> =>
  await argon2.hash(value);

export const createRefreshToken = (): string => {
  return randomBytes(64).toString("hex"); // 128 символів
};
