"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { format, isSameWeek, differenceInDays, parseISO } from "date-fns";
import {
  AiOutlineMore,
  AiOutlineRetweet,
  AiOutlineHeart,
  AiOutlineBarChart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
interface TweetTypes {
  id: string;
  body: string;
  image: string;
  updatedAt: Date;
  createdAt: Date;
}
const Tweet = ({ tweet }: { tweet: TweetTypes }) => {
  const { id, body, image, updatedAt, createdAt } = tweet;
  const today = new Date();
  // let formattedDate;
  // if (isSameWeek(createdAt, today)) {
  //   formattedDate = differenceInDays(today, createdAt);
  // } else {
  //   formattedDate = format(parseISO(createdAt.toISOString()), "dd-MM");
  // }

  return (
    <div className="px-4 py-3 border-b border-light flex gap-3">
      <article className="w-16">
        <div className="w-12 h-12 bg-black rounded-full" />
      </article>
      <article className="flex-grow relative flex flex-col">
        <article className="flex justify-between">
          <div className="flex gap-1 items-center text-lg">
            <h5>John Doe</h5>
            <h5 className="text-xs text-light">
              @JOHNDOE <span className="text-xs text-light">. 2d</span>
            </h5>
          </div>
          <div>
            <AiOutlineMore />
          </div>
        </article>
        <article className="text-sm">
          <p className="leading-7 my-1">{body}</p>
        </article>
        <article className="h-fit w-full relative">
          <Image src={`/uploads/${image}`} alt="Tweet Pic" fill />
        </article>
        <article className="flex justify-around items-center mt-2">
          <div className="flex gap-1 items-center text-light">
            <BiMessageRounded />
            <span>2</span>
          </div>
          <div className="flex gap-1 items-center text-light">
            <AiOutlineRetweet />
            <span>3</span>
          </div>
          <div
            className="flex gap-1 items-center text-light"
            // onClick={handleLike}
          >
            <AiOutlineHeart />
            <span>9</span>
          </div>
          <div className="flex gap-1 items-center text-light">
            <AiOutlineBarChart />
            <span>108</span>
          </div>
          <div className="text-light">
            <AiOutlineShareAlt />
          </div>
        </article>
      </article>
    </div>
  );
};

export default Tweet;
