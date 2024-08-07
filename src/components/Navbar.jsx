import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full bg-[#84bc9c] px-5 py-4">
      <div className="text-white text-lg font-bold">LOGO</div>
      <div
        className={`md:flex ${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex-row md:items-center absolute md:relative bg-[#84bc9c] md:bg-transparent left-0 top-[60px] md:top-auto w-full md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row md:gap-8 gap-4 md:mx-0 mx-5 my-4 md:my-0">
          <li>
            <a className="text-white hover:text-gray-300" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="/chat">
              Chat Room
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="/profile">
              User
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="/settings">
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600"
          href="#"
        >
          Sign Out
        </button>
        <GiHamburgerMenu
          size={24}
          className="text-white md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
