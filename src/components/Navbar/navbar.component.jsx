import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronDown } from "react-icons/bi";
const url =
  "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png";

const NavSm = () => {
  return (
    <>
      <div className="text-white text-xl font-bold flex justify-between items-center ">
        <div>
          <h3>It All starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">
            Chennai <BiChevronRight />
          </span>
        </div>
        <div className="flex">
          <FaSearch />
        </div>
      </div>
    </>
  );
};

const Navmd = () => {
  return (
    <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md ">
      <FaSearch />
      <input
        type="search"
        placeholder="Search for Movies ,Events,Place,Sports and Activities"
        className="w-full  border-none focus:outline-none"
      />
    </div>
  );
};

const Navlg = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center px-40 mx-auto">
        <div className="w-1/2 flex items-center px-4 gap-3">
          <div className="w-12  h-12">
            <img className="w-full h-full" src={url} alt="logo" />
          </div>
          <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md ">
            <FaSearch />
            <input
              type="search"
              placeholder="Search for Movies ,Events,Place,Sports and Activities"
              className="w-full  border-none focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer">
            Chennai <BiChevronDown />
          </span>
          <button className="bg-red-500 hover:bg-red-600 text-white rounded-md text-center text-sm px-5 py-2">
            Sign in
          </button>
          <div className="text-white w-8 h-8 ">
            <GiHamburgerMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

function Navbar() {
  return (
    <>
      <nav className="bg-bms-800 p-4">
        <div className="md:hidden">
          <NavSm />
        </div>

        <div className="hidden md:flex lg:hidden">
          <Navmd />
        </div>

        <div className="hidden lg:flex">
          <Navlg />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
