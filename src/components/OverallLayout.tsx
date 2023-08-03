import React, { Fragment } from "react";
import NavCol from "@/components/NavCol";
import Aside from "@/components/Aside";

const OverallLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <NavCol />
      <main className="flex-grow ml-[350px]">
        <section className="">
          <article className="flex">
            {children}
            <article className="flex-grow">
              <Aside />
            </article>
          </article>
        </section>
      </main>
    </Fragment>
  );
};

export default OverallLayout;
