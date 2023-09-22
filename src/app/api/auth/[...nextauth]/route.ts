import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { AuthOptions, Awaitable, User } from "next-auth";
import { Client } from "@/lib/axios";
import { authOptions } from "./authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
