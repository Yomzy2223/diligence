import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

interface UserAndJWT {
  id: string;
  token: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  enterpriseId: string;
  managerId: string;
  managerEmail: string;
}

declare module "next-auth" {
  interface User extends UserAndJWT {}

  interface Session {
    token: string;
    user: {
      email: string;
      firstname: string;
      lastname: string;
      role: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT extends UserAndJWT {}
}
