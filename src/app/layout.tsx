import NavCol from "@/components/NavCol";
import "./global.css";
import React from "react";
import Aside from "@/components/Aside";

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
      <body className=" bg-dimBg dark:text-white flex">
        <NavCol />
        <main className="flex-grow">
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
    </html>
  );
}
