import React from "react";
import Search from "./Search";
import AsideBox from "./AsideBox";
import Button from "./Button";
import { CgMoreAlt } from "react-icons/cg";

const Aside = () => {
  return (
    <div className="pl-[30px] pr-[50px] py-3">
      <Search />
      <article className="flex flex-col gap-4">
        <AsideBox>
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold ">Get Verified</h2>
            <h4 className="text-lg font-medium">
              Subscribe to unlock new features.
            </h4>
            <div className="w-fit">
              <Button className="py-2 px-3 mt-1">Get Verified</Button>
            </div>
          </div>
        </AsideBox>
        <AsideBox>
          <h2 className="text-xl font-semibold mb-4 mt-1">
            Recommended for you
          </h2>
          <div className="flex flex-col gap-4">
            <article className="flex justify-between items-center">
              <div className="flex flex-col gap-1.5">
                <h5 className="text-xs text-light"> Sports . Trending</h5>
                <h4 className="font-medium">John</h4>
                <h5 className="text-xs text-light"> 40.2k Tweets</h5>
              </div>
              <span>
                <CgMoreAlt />
              </span>
            </article>
            <article className="flex justify-between items-center">
              <div className="flex flex-col gap-1.5">
                <h5 className="text-xs text-light"> Sports . Trending</h5>
                <h4 className="font-medium">John</h4>
                <h5 className="text-xs text-light"> 40.2k Tweets</h5>
              </div>
              <span>
                <CgMoreAlt />
              </span>
            </article>
          </div>
        </AsideBox>
      </article>
    </div>
  );
};

export default Aside;
