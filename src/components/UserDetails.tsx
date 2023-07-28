import React from "react";
import Image from "next/image";

const UserDetails = () => {
  return (
    <div className="flex gap-2 items-center">
      <ProfilePic />
      <div className="flex flex-col justify-start gap-1">
        <h4>.....</h4>
        <span className="text-sm text-light">John</span>
      </div>
    </div>
  );
};

export default UserDetails;

export const ProfilePic = () => {
  return (
    <div className="w-12 h-12 rounded-full relative bg-cover">
      <Image
        src="/profile.jpg"
        alt="Profile"
        fill
        className="rounded-full bg-cover"
      />
    </div>
  );
};
