import _ from "lodash";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type TMenuItem = {
  label: string;
  url: string;
};

const MenuItems: TMenuItem[] = [
  { label: "User", url: "/admin" },
  { label: "Courses", url: "/admin/courses" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const findPickedUrl = (): TMenuItem => {
    const sortItem = _.sortBy(MenuItems, (a) => -a.url.length);
    return sortItem.find((item) => pathname?.startsWith(item.url));
  };
  console.log("🚀 ~ findPickedUrl ~ findPickedUrl:", findPickedUrl());
  return (
    <div className="border-r border-product2-border-secondary min-h-full flex flex-col items-start space-y-3 p-6 w-[300px] border-t">
      {MenuItems.map((item) => (
        <Link
          href={item.url}
          key={item.url}
          className={
            "flex w-full items-center rounded-xl border py-2.5 pl-3 pr-2 hover:bg-[#333661] border-transparent cursor-pointer " +
            (_.isEqual(findPickedUrl(), item)
              ? "!border-product2-border-secondary !bg-product-background-secondary-dark"
              : "")
          }
        >
          <div className="flex w-full items-start justify-between">
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
