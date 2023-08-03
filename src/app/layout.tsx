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
          <main>{children}</main>
        </body>
      </Provider>
    </html>
  );
}
