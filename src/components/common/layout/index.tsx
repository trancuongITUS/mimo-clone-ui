"use client";
import React, { useState } from "react";
import Header from "./header";
import SideBar from "./sidebar";

type TProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TProps) => {
  const [isExpandSideBar, setIsExpandSideBar] = useState<boolean>(true);
  return (
    <>
      <Header />
      <div className={"flex"}>
        <div
          className="flex-shrink-0 transform-gpu overflow-hidden transition-all duration-[300ms] ease-[cubic-bezier(.41,.73,.51,1.02)] w-[400px] "
          style={isExpandSideBar ? {} : { width: 0 }}
        >
          <SideBar></SideBar>
        </div>
        <div className="flex h-[calc(100vh-49px)] w-full flex-col items-center overflow-y-auto relative">
          <div
            className="absolute cursor-pointer hover:bg-[#4a4d85] flex items-center space-x-2 rounded-lg py-1 pl-1 pr-3"
            style={{ left: 16, top: 16 }}
            onClick={() => setIsExpandSideBar((prev) => !prev)}
          >
            {isExpandSideBar ? (
              <svg
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.8247 11.1147L20.7197 5.21967L21.7803 6.28033L16.0632 11.9975L21.7803 17.7147L20.7197 18.7753L14.8247 12.8803C14.3368 12.3924 14.3368 11.6026 14.8247 11.1147ZM16.5 7H3V5.5H16.5V7ZM12.5 12.75H3V11.25H12.5V12.75ZM16.5 18.5H3V17H16.5V18.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            ) : (
              <svg
                height="100%"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
              >
                <path
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="square"
                  d="M5.25 8.084h21.5M5.25 16.084h21.5M5.25 24.084h21.5"
                ></path>
              </svg>
            )}
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
