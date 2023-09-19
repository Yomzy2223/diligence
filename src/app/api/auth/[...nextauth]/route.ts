import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { AuthOptions, Awaitable, User } from "next-auth";
import { Client } from "@/lib/axios";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "signin",
      name: "Sign in",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
      authorize: async (credentials) => {
        try {
          if (credentials?.email && credentials?.password) {
            const client = await Client();
            const res = await client.post(
              "/diligence/user/login",
              JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
              {
                headers: { "Content-Type": "application/json" },
              }
            );

            const user = res.data;
            console.log(user);

            if (user.data) {
              const data = user.data;

              const enterpriseResponse = await client.get(
                `/diligence/enterprise/${data.enterpriseId}`
              );

              const enterprise = enterpriseResponse.data.data;

              return {
                id: data.id,
                email: data.email,
                firstname: data.firstName,
                lastname: data.lastName,
                token: data.token,
                role: data.role,
                managerId: data.managerId,
                managerEmail: data.managerEmail,
                enterprise: {
                  id: enterprise.id,
                  color: enterprise.color,
                  logo: enterprise.logo,
                  name: enterprise.name,
                },
              } as Awaitable<User>;
            }
            return null;
          }
        } catch (e: any) {
          throw new Error(e.response.data.error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ user, token }) {
      if (user) {
        token = { ...user };
        return token;
      }
      return token;
    },
    session({ session, token }) {
      session.token = token.token;
      session.user = {
        id: token.id || "",
        email: token.email || "",
        firstname: token.firstname || "",
        lastname: token.lastname || "",
        role: token.role || "",
        managerId: token.managerId,
      };
      session.enterprise = {
        name: token.enterprise.name,
        color: token.enterprise.color,
        id: token.enterprise.id,
        logo: token.enterprise.logo,
      };
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
