import * as React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";

import MimoLogo from "@/components/mimo-logo";
import { NavItem } from "./nav-item";

export function Layout({ children }: any) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="flex h-full max-h-screen flex-col gap-2 border-r">
        {" "}
        {/* Navbar here */}
        <div className="flex h-[60px] items-center border-b px-5">
          <Link href="/admin">
            <MimoLogo />
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <NavItem href="/admin">Users</NavItem>
            {/* <NavItem href='/admin/settings'>Settings</NavItem> */}
          </nav>
        </div>
      </div>
      <div>
        <header className="flex h-[60px] items-center gap-4 border-b px-6 justify-between white">
          {" "}
          {/* Something like a header bar here. For user status*/}
          <div></div>
          <Button
            className="text-white border-white"
            variant="outlined"
            disabled
          >
            Sign Out
          </Button>
        </header>
        {children}
      </div>
    </div>
  );
}
