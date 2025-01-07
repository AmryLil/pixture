"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDropdown } from "react-icons/io";
import { MdOutlineUpload } from "react-icons/md";
const Navbar = ({ bgcolor, invisible, onSubmit, onChange, value }) => {
  const [BGColor, setBGColor] = useState(false);
  const handleIconSearch = () => {
    setBGColor(!BGColor);
  };

  const [visible, setvisible] = useState(false);
  const handleBtnMenu = () => {
    setvisible(!visible);
  };

  return (
    <div className="fixed w-full z-50">
      <nav
        className={` flex md:gap-8 gap-4 md:h-fit h-16 p-5 py-2 md:py-5 w-full items-center transition-all ease-in-out  ${bgcolor}`}
      >
        <div className="w-fit h-fit object-cover translate-y-0.5 md:translate-y-0">
          {/* <h1 className="font-bold text-3xl tracking-wide ">Pixture</h1> */}
          <img
            src="/images/logo.png"
            alt=""
            className="md:w-[95%] md:h-[95%] w-[90%] h-[90%] "
          />
        </div>
        <form
          onSubmit={onSubmit}
          className={`flex relative w-full md:h-9  group  ${invisible} transition-all ease-in-out text-sm`}
        >
          <button
            className={` absolute md:start-3 start-2 md:top-2 top-2.5 transition-all group-hover:text-accent ${invisible} ${
              BGColor && "text-accent"
            }`}
          >
            <FaSearch className="text-md md:text-xl text-black" />
          </button>
          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="Search...."
            onFocus={handleIconSearch}
            className={`text-xs md:pl-10 py-2 pl-7 w-full md:py-4 opacity-50 focus:opacity-100 shadow-gray-300 rounded-full shadow-sm hover:shadow-accent transition-all active:shadow-accent outline-none text-dark ${invisible} py-0 `}
          />
        </form>
        <GiHamburgerMenu
          onClick={handleBtnMenu}
          size={40}
          className=" md:hidden cursor-pointer text-dark"
        />
        <div className="md:flex flex-row gap-6 items-center hidden ">
          <Link
            href={"/profile"}
            className="rounded hover:shadow-sm hover:shadow-accent hover:text-accent px-3 transition-all flex items-center gap-1"
          >
            <span>Profile</span>
            <IoIosArrowDropdown size={20} />
          </Link>
          <Link
            href={"/login"}
            className="rounded hover:shadow-sm hover:bg-accent px-3 py-1 transition-all font-bold tracking-wider hover:text-dark"
          >
            Login
          </Link>
          <button className="flex items-center rounded hover:shadow-sm hover:bg-accent py-1 px-3 transition-all font-bold hover:text-dark">
            <MdOutlineUpload size={20} />
            <span>Upload</span>
          </button>
        </div>

        <div
          className={`element ${
            visible ? "" : "hidden bg-white text-black"
          }absolute top-10 md:hidden items-center start-0 justify-between w-full sm:flex sm:w-auto sm:order-1`}
        >
          <ul
            className={`flex flex-col p-4 sm:p-0 mt-4 font-medium border border-gray-100 rounded-lg  sm:space-x-8 rtl:space-x-reverse sm:flex-row sm:mt-0 sm:border-0  bg-white text-dark w-full`}
          >
            <li>
              <Link
                href="/"
                className="block py-2 px-3  rounded h w-full"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="flex gap-1 py-2 px-3  rounded h w-full items-center"
              >
                <span>Profile</span>
                <IoIosArrowDropdown size={20} />
              </Link>
            </li>
            <li>
              <a
                href="/contact"
                className="flex gap-1 py-2 px-3  rounded w-full items-center"
              >
                <span>Upload</span>
                <MdOutlineUpload size={20} />
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="block py-2 px-3  rounded  sm:hidden w-full"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
