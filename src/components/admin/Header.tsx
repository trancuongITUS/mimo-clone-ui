"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import LogoAppAdminPage from "../LogoAppAdminPage";
import { Button } from "antd";
import { handleLogout } from "@/utils/lib/auth";

const Header = () => {
  return (
    <div className="sticky bg-[#333661] px-4 ">
      <div className="relative flex h-12 items-center border-b border-[#333661]">
        <div className="flex h-full flex-grow justify-between items-center">
          <div className="flex items-center pr-2 h-full text-white">
            <LogoAppAdminPage />
          </div>
          <div className="flex items-center">
            <p>
              Hi, <strong>Admin</strong>
            </p>
            <Button
              type={"link"}
              className="text-white"
              onClick={() => handleLogout()}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
