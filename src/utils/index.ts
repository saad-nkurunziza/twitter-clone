import prisma from "@/libs/prisma";
import { getServerSession, NextAuthOptions, User } from "next-auth";
import axios from "axios";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

export const getTweets = async () => {
  const response = await axios.get("http://localhost:3000/api/tweets");
  const tweets = await response.data;
  return tweets;
};
export const getUsers = async () => {
  const response = await axios.get("http://localhost:3000/api/users");
  const users = await response.data;
  return users;
};

export const handleLike = async (id: string) => {
  // const like = await prisma.tweet.update({
  //   where: {
  //     id: id || "",
  //   },
  //   data: {
  //     likes: {
  //       push: "John Doe",
  //     },
  //   },
  // });
  // const tweet = await prisma.tweet.findUnique({
  //   where: {
  //     id: id,
  //   },
  // });
  const response = await axios.get("http://localhost:3000/api/tweet");
  const tweet = await response.data;
  console.log(tweet);
  return tweet;
};

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_ID!,
    }),
  ],
  theme: {
    colorScheme: "dark",
  },
  // session: {
  //   strategy: "jwt",
  //   maxAge: 30 * 24 * 60 * 60,
  //   updateAge: 24 * 60 * 60,
  // },
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ user }: { user: AdapterUser | User }) {
      try {
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  return session;
}
