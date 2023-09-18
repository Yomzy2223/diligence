import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

interface UserAndJWT {
  id: string;
  token: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  managerId: string;
  managerEmail: string;
  enterprise: {
    id: string;
    color: string;
    logo: string;
    name: string;
  };
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
      managerId: string;
    };
    enterprise: {
      name: string;
      id: string;
      logo: string;
      color: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT extends UserAndJWT {}
}
