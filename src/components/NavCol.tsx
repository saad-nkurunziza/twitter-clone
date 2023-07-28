import Link from "next/link";
import React from "react";
import Button from "./Button";
import UserBox from "./UserBox";
import { generalLinks } from "@/constants";

const NavCol = () => {
  return (
    <div className="w-[350px] flex flex-col items-center my-auto h-screen p-6 gap-y-3">
      <div className="flex flex-col mt-2 gap-1">
        {generalLinks.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            className="py-3 px-4 w-fit rounded-full hover:bg-zinc-500/25 cursor-pointer"
          >
            <h3 className="flex items-center gap-2">
              <link.icon size={23} />
              <span className="text-xl font-base">{link.title}</span>
            </h3>
          </Link>
        ))}
      </div>
      <Button big>Tweets</Button>
      <UserBox />
    </div>
  );
};

export default NavCol;
