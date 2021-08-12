import React, { useContext } from "react";
import { BiShareAlt } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronDown } from "react-icons/bi";
import { MovieContext } from "../../context/movie.contact";

const url =
  "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png";

const NavSm = () => {

      const {movie}=useContext(MovieContext)
  return (
    <>
      <div className="text-white text-xl font-bold flex items-center justify-between ">
        <div>
          <h3>{movie.original_title}</h3>
        </div>
        <div>
          <BiShareAlt />
        </div>
      </div>
    </>
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

function MovieNavBar() {
  return (
    <>
      <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-800 p-4">
        <div className="md:hidden">
          <NavSm />
        </div>

        <div className="hidden md:block lg:hidden">
          <NavSm />
        </div>

        <div className="hidden lg:flex">
          <Navlg />
        </div>
      </nav>
    </>
  );
}

export default MovieNavBar;
