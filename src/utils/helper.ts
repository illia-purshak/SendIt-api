import argon2 from "argon2";
import { randomBytes } from "crypto";

export const hashThis = async (value: string | number): Promise<string> =>
  await argon2.hash(String(value));

export const createToken = (size: number = 64): string => {
  return randomBytes(size).toString("hex");
};
