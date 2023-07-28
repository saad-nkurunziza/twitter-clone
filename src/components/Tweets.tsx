import React from "react";
import Tweet from "./Tweet";
import { getTweets } from "@/utils";

interface TweetTypes {
  id: string;
  body: string;
  image: string;
  updatedAt: Date;
  createdAt: Date;
}
const Tweets = async () => {
  const data = await getTweets("tweets");
  const { tweets }: { tweets: TweetTypes[] } = data;

  return (
    <div className="flex flex-col">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default Tweets;
