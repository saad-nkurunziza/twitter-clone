"use client";
import React, { useState } from "react";
import { HomeLinks } from "@/constants";

const NavRow = () => {
  const [view, setView] = useState<"for_you" | "following">("for_you");
  return (
    <section className="w-full">
      <article className="flex border-b border-light">
        <div className="w-full flex justify-center items-center hover:bg-zinc-500/25">
          <button className="relative outline-none border-none py-3 before:absolute before:block before:mt-1 before:h-1 before:rounded-full before:bg-primary before:w-full before:bottom-0 before:left-0 ">
            For You
          </button>
        </div>
        <div className="w-full flex justify-center items-center hover:bg-zinc-500/25">
          <button className="relative outline-none border-none py-3 text-light ">
            Following
          </button>
        </div>
      </article>
    </section>
  );
};

export default NavRow;
