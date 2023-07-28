import React from "react";
import NavRow from "./NavRow";

const HomeContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="w-3/5 min-h-screen border-r border-l border-gray-700">
      <h2 className="text-xl font-semibold mx-5 mt-6 mb-7">Home</h2>
      <NavRow />
      {children}
    </article>
  );
};

export default HomeContainer;
