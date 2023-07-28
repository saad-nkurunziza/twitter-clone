import React from "react";
import TweetForm from "./TweetForm";
import { ProfilePic } from "@/components/UserDetails";

const AddTweet = () => {
  return (
    <div className="flex border-b border-darkLight p-4">
      <article className="w-16">
        <ProfilePic />
      </article>

      <TweetForm />
    </div>
  );
};

export default AddTweet;
