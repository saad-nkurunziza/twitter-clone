import NavCol from "@/components/NavCol";
import "./global.css";
import React from "react";
import Aside from "@/components/Aside";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Twitter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className=" bg-dimBg dark:text-white flex">
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
        </body>
      </Provider>
    </html>
  );
}
