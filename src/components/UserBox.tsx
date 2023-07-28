import React from "react";
import { CgMoreAlt } from "react-icons/cg";
import UserDetails from "./UserDetails";
const UserBox = () => {
  return (
    <article className="flex items-center justify-between gap-3 mt-2 w-full px-4">
      <UserDetails />
      <div>
        <CgMoreAlt />
      </div>
    </article>
  );
};

export default UserBox;
