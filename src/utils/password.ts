import { genSalt, hash, compare } from "bcrypt";

export const hashPassword = async (password: string) => {
  const salt = await genSalt(10);
  const hashed = await hash(password, salt);
  return hashed;
};

export const comparePassword = async (password: string, hash: string) => {
  const match = await compare(password, hash);
  return match;
};
