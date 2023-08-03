import prisma from "@/libs/prisma";
import axios from "axios";
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
