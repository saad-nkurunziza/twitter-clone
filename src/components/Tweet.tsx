"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { format, isSameWeek, differenceInDays, parseISO } from "date-fns";
import {
  AiOutlineMore,
  AiOutlineRetweet,
  AiOutlineHeart,
  AiOutlineBarChart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { handleLike } from "@/utils";
interface TweetTypes {
  id: string;
  body: string;
  image: string;
  updatedAt: Date;
  createdAt: Date;
}
const Tweet = ({ tweet }: { tweet: TweetTypes }) => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    menu === true ? setMenu(false) : setMenu(true);
  };
  const { id, body, image, updatedAt, createdAt } = tweet;
  const today = new Date();
  // let formattedDate;
  // if (isSameWeek(createdAt, today)) {
  //   formattedDate = differenceInDays(today, createdAt);
  // } else {
  //   formattedDate = format(parseISO(createdAt.toISOString()), "dd-MM");
  // }

  return (
    <div className="px-4 py-3 border-b border-gray-600 flex gap-3">
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
          <div className="relative">
            <div
              className="cursor-pointer"
              onClick={() => setMenu((prev) => (prev ? false : true))}
            >
              <AiOutlineMore />
            </div>
            {menu && (
              <div className="flex flex-col py-2 px-3 rounded absolute bg-darkLight right-0 w-36 my-1 z-[8]">
                <h3 className="text-sm mb-1 w-fit">Follow John Doe</h3>
                <h3 className="text-sm mb-1 w-fit">Mute</h3>
                <h3 className="text-sm mb-1 w-fit">Block</h3>
              </div>
            )}
          </div>
        </article>
        <article className="text-sm">
          <p className="leading-7 my-1">{body}</p>
        </article>
        <article className="h-fit w-full relative">
          <Image
            src={`/uploads/${image}`}
            alt="Tweet Pic"
            width={500}
            height={600}
          />
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
            onClick={() => handleLike(id)}
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
