"use client";

import { CustomImage } from "@/compound/customImage";
import Link from "next/link";
import { useState } from "react";
import Logo from "../assets/images/logo.png";
import {
  BsPersonGear,
  IoHomeOutline,
  MdKeyboardArrowDown,
  RiArrowRightDownLine,
} from "../compound/icons/index";

interface SubItem {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  subItems: SubItem[];
}

const DropdownNavItem: React.FC<NavItem> = ({ href, label, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li
      className="flex py-[28px] h-full items-center gap-2 nav-link relative "
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href={href}>{label}</Link>
      <MdKeyboardArrowDown className="cursor-pointer" onClick={handleToggle} />

      {/* dropdown list */}
      <div
        className={`absolute p-8 w-[235px] bg-white flex top-[84px] flex-col gap-4 z-50 left-0 shadow-sm transition-all duration-300 ease-in-out opacity-${
          isOpen ? "100" : "0"
        } scale-${isOpen ? "100" : "95"}`}
      >
        {subItems.map((subItem, index) => (
          <div key={index} className="flex items-center gap-2 group">
            <RiArrowRightDownLine className="hide group-hover:show" />
            <a href={subItem.href}>{subItem.label}</a>
          </div>
        ))}
      </div>
    </li>
  );
};

export const Header: React.FC = () => {
  const navItems: NavItem[] = [
    {
      href: "/",
      label: "Home",
      subItems: [
        { href: "/", label: "Home page 1" },
        { href: "/", label: "Home page 1" },
        { href: "/", label: "Home page 1" },
        { href: "/", label: "Home page 1" },
        { href: "/", label: "Home page 1" },
      ],
    },
    { href: "/", label: "Property", subItems: [] },
    { href: "/", label: "Page", subItems: [] },
    { href: "/", label: "Blog", subItems: [] },
    { href: "/", label: "Contact", subItems: [] },
  ];

  return (
    <header className="h-20 flex items-center justify-between z-[1000] px-3 shadow-sm">
      <h1>
        <CustomImage width={197} height={48} alt="Logo" src={Logo} />
      </h1>
      <nav className="nav items-center gap-8 hidden lg:flex">
        <ul className="w-full flex z-[1000] items-center gap-6 ">
          {navItems.map((navItem, index) => (
            <DropdownNavItem key={index} {...navItem} />
          ))}
        </ul>
      </nav>
      <div className="account flex items-center">
        <div className="flex items-center mr-[21px]">
          <div className="hidden items-center gap-2 lg:flex">
            <BsPersonGear size={22} />
            <Link
              href="#"
              className="font-ref text-14 font-semibold hover:text-yellow transition-colors duration-300"
            >
              Register
            </Link>
          </div>
          <span className="px-1 hidden lg:block">/</span>
          <Link
            href="#"
            className="font-ref flex items-center gap-1 text-14 font-semibold hover:text-yellow transition-colors duration-300"
          >
            <BsPersonGear size={22} className="block lg:hidden" />
            Login
          </Link>
        </div>
        <div className="flex items-center gap-2 py-[15px] px-[18.5px] bg-yellow text-15 font-bold rounded-[10px] text-white">
          <IoHomeOutline size={20} />
          <span className="text-12">|</span>
          <button type="button" className="]">
            Sell Property
          </button>
        </div>
      </div>
    </header>
  );
};
