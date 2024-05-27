/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import LogoSRC from "../../../../../public/logo.svg";
import { Popover } from "antd";
import { handleLogout } from "@/utils/lib/auth";
import { useRouter } from "next/navigation";

const UserPopoverContent = () => {
  const router = useRouter();
  return (
    <div className="font-semibold rounded-xl">
      <span className="rounded-full px-2 py-1 text-xs font-bold uppercase leading-[18px] text-white bg-[#78d86b] ">
        Mimo Basic
      </span>
      <a
        className="select-none outline-none !mt-3 flex items-center space-x-2 rounded-lg px-2 py-1 hover:bg-[#4a4d85] hover:text-inherit"
        data-orientation="vertical"
        data-radix-collection-item=""
        href="/settings"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M9.995 21.8c.655.13 1.33.2 2.005.2v-.005c.67 0 1.35-.065 2.005-.2.58-.115.995-.63.995-1.225v-1.155a7.8 7.8 0 0 0 1.925-1.11l1 .575c.515.295 1.17.195 1.555-.245a10 10 0 0 0 2.01-3.48 1.25 1.25 0 0 0-.565-1.47l-1-.575a8.2 8.2 0 0 0 0-2.22l1-.58c.51-.295.75-.915.565-1.47a10 10 0 0 0-2.01-3.48c-.39-.44-1.04-.54-1.555-.245l-1 .575a8 8 0 0 0-1.92-1.11V3.425c0-.59-.42-1.11-.995-1.225-1.31-.27-2.7-.27-4.015 0-.58.115-.995.63-.995 1.225V4.58a7.8 7.8 0 0 0-1.925 1.11l-1-.575a1.25 1.25 0 0 0-1.555.245 10 10 0 0 0-2.01 3.48c-.185.555.05 1.175.565 1.47l1 .58a8.2 8.2 0 0 0 0 2.22l-1 .58c-.51.295-.75.915-.565 1.47a9.9 9.9 0 0 0 2.01 3.48c.39.44 1.04.54 1.555.245l1-.575c.59.46 1.235.83 1.925 1.11v1.155c0 .59.42 1.11.995 1.225m3.505-1.43a8.6 8.6 0 0 1-3 0v-2.02l-.52-.17a6.5 6.5 0 0 1-2.325-1.345l-.405-.365-1.75 1.01A8.4 8.4 0 0 1 4 14.885l1.75-1.01-.11-.53Q5.499 12.684 5.5 12c0-.455.05-.905.14-1.345l.11-.53L4 9.115A8.4 8.4 0 0 1 5.5 6.52l1.75 1.01.405-.365A6.4 6.4 0 0 1 9.98 5.82l.52-.17V3.63a8.6 8.6 0 0 1 3 0v2.015l.52.17c.865.28 1.645.735 2.325 1.345l.405.365 1.75-1.01A8.4 8.4 0 0 1 20 9.11l-1.75 1.01.11.53q.141.661.14 1.345c0 .455-.05.905-.14 1.345l-.11.53L20 14.88a8.4 8.4 0 0 1-1.5 2.6l-1.75-1.01-.405.365a6.4 6.4 0 0 1-2.325 1.345l-.52.17zM8 12c0 2.205 1.795 4 4 4s4-1.795 4-4-1.795-4-4-4-4 1.795-4 4m1.5 0a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>Settings</span>
      </a>
      <a
        className="select-none outline-none flex items-center space-x-2 rounded-lg px-2 py-1 hover:bg-[#4a4d85] hover:text-inherit"
        role="menuitem"
        target="_blank"
        data-orientation="vertical"
        data-radix-collection-item=""
        href="https://getmimo.zendesk.com/hc/en-us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M5.038 10h.712a2.75 2.75 0 0 1 2.75 2.75v1.5A2.75 2.75 0 0 1 6 16.989v.761c0 .69.56 1.25 1.25 1.25h2.378a2.25 2.25 0 0 1 2.122-1.5h.5a2.25 2.25 0 0 1 0 4.5h-.5a2.25 2.25 0 0 1-2.122-1.5H7.25a2.75 2.75 0 0 1-2.75-2.75V17h-1v-6.25A8.75 8.75 0 0 1 12.25 2 8.75 8.75 0 0 1 21 10.75V17h-2.25A2.75 2.75 0 0 1 16 14.25v-1.5A2.75 2.75 0 0 1 18.75 10h.712a7.25 7.25 0 0 0-7.212-6.5A7.25 7.25 0 0 0 5.038 10m.712 1.5H5v4h.75c.69 0 1.25-.56 1.25-1.25v-1.5c0-.69-.56-1.25-1.25-1.25m13 0c-.69 0-1.25.56-1.25 1.25v1.5c0 .69.56 1.25 1.25 1.25h.75v-4zM11 19.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>Support</span>
      </a>
      <div
        role="menuitem"
        className="select-none outline-none"
        data-orientation="vertical"
        data-radix-collection-item=""
      >
        <button
          className="flex w-full items-center space-x-2 rounded-lg px-2 py-1 hover:text-inherit hover:bg-[#4a4d85] text-white"
          role="menuitem"
          onClick={async () => {
            await handleLogout();
            router.push("/login");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M5.865 20.135c.24.235.55.365.885.365H14v1.505H6.75a2.73 2.73 0 0 1-1.945-.805A2.73 2.73 0 0 1 4 19.255v-14.5A2.756 2.756 0 0 1 6.75 2H14v1.505H6.75c-.69 0-1.25.56-1.25 1.25V19.25c0 .335.13.65.365.885M16.53 7.215l4.145 4.145c.485.49.485 1.285 0 1.77l-4.145 4.145-1.06-1.06L18.685 13H10v-1.5h8.695L15.47 8.275z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="sticky bg-[#333661] px-4 ">
      <div className="relative flex h-12 items-center border-b border-[#333661]">
        <div className="flex h-full flex-grow justify-between items-center">
          <div className="flex items-center pr-2 h-full">
            <Image src={LogoSRC} alt={"mimo-logo"} />
            <div className="ml-6 flex h-full space-x-2">
              <a
                className="font-medium text-sm -mb-[1px] flex items-center justify-center border-b border-[#b89ced] text-product2-content-primary"
                href="/web/125/section/0"
              >
                <span className="rounded-lg px-2 py-1.5 hover:bg-[#4a4d85]">
                  Learn
                </span>
              </a>
            </div>
          </div>
          <div>
            <Popover
              arrow={false}
              trigger="click"
              content={<UserPopoverContent />}
              placement="bottomRight"
              overlayClassName="border-2 border-[#4a4d85] rounded-xl min-w-[240px]"
            >
              <img
                src={"https://i.pravatar.cc/300"}
                alt="avatar"
                width={32}
                height={32}
                className={"rounded-full cursor-pointer"}
              />
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
