import { useState } from "react";
import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import menuClose from "../images/icon-menu-close.svg";
import NavItems from "./NavItems";

export default function Nav() {
  const navItem = [
    {
      item: "Home",
      id: 1,
    },
    {
      item: "New",
      id: 2,
    },
    {
      item: "Popular",
      id: 3,
    },
    {
      item: "Trending",
      id: 4,
    },
    {
      item: "Categories",
      id: 5,
    },
  ];
  const [showMenu, setShowMenu] = useState(false);
  function menuHandler() {
    setShowMenu((menu) => !menu);
  }
  return (
    <nav className="flex justify-between pb-3 col-[1_/_4] row-[1_/_2]">
      <img src={logo} alt={"companies logo"} />
      <img
        className="md:hidden w-[3.75rem] h-[1.875rem]"
        src={menu}
        alt={"hamburger menu"}
        onClick={menuHandler}
      />
      <div className=" hidden gap-10 md:flex">
        {navItem.map((nav) => (
          <NavItems nav={nav} key={nav.id} />
        ))}
      </div>
      {showMenu && (
        <div className="absolute bg-offWhite  min-h-screen w-[64%] right-0">
          <div className="relative">
            <img
              className="md:hidden absolute right-7 top-3"
              src={menuClose}
              alt={"X diagram to close the menu"}
              onClick={menuHandler}
            />
            <div className="space-y-6 p-6 pt-28 text-xl">
              {navItem.map((nav) => (
                <NavItems nav={nav} key={nav.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
