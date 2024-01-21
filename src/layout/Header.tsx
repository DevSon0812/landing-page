// base next
import Image from "next/image";
import Link from "next/link";
// image logo
import Logo from "../assets/images/logo.png";
// react-icons
import {
  BsPersonGear,
  IoHomeOutline,
  MdKeyboardArrowDown,
} from "../compound/icons/index";

export const Header = () => {
  return (
    <header className="h-20 flex items-center justify-between px-3 shadow-sm">
      <h1>
        <Image width={197} height={48} alt="Banner" loading="lazy" src={Logo} />
      </h1>
      <nav className="nav flex items-center gap-8 ">
        <ul className="w-full flex items-center gap-6 ">
          <li className="flex items-center gap-2 nav-link">
            <Link href="/">Home</Link>
            <MdKeyboardArrowDown />
          </li>
          <li className="flex items-center gap-2 nav-link">
            <Link href="/">Property</Link>
            <MdKeyboardArrowDown />
          </li>
          <li className="flex items-center gap-2 nav-link">
            <Link href="/">Page</Link>
            <MdKeyboardArrowDown />
          </li>
          <li className="flex items-center gap-2 nav-link">
            <Link href="/">Blog</Link>
            <MdKeyboardArrowDown />
          </li>
          <li className="flex items-center gap-2 nav-link">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="account flex items-center">
        <div className="flex items-center mr-[21px]">
          <div className="flex items-center gap-2">
            <BsPersonGear size={22} />
            <Link
              href="#"
              className=" font-ref text-14 font-semibold hover:text-yellow transition-colors duration-300"
            >
              Register
            </Link>
          </div>
          <span className="px-1">/</span>
          <Link
            href="#"
            className="font-ref text-14 font-semibold hover:text-yellow transition-colors duration-300"
          >
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
