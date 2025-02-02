"use client";

import Image from "next/image";
import React, { useRef } from "react";

const Menu = [
  {
    title: "Home",
    path: "hero",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Services",
    path: "services",
  },
  {
    title: "Works",
    path: "works",
  },
  {
    title: "Education",
    path: "education",
  },
  {
    title: "Skills",
    path: "skills",
  },
];

const Navbar = ({ scrollToSection, refs }) => {
  return (
    <header className="w-full py-2 pr-2 bg-normal/15 backdrop-blur-lg border-b-[1px] border-normal/20">
      <div className="container transition-all ease-in-out">
        <div className="flex justify-between items-center transition-all duration-700 ease-in-out">
          {/* Logo and Name */}
          <a className="flex items-center" href="/">
            <Image
              src={"./icon/rheez.svg"}
              alt="Rheez Logo"
              width={100}
              height={100}
              className="w-12 h-12 md:w-16 md:h-16"
            />
            <h1 className="transition-all duration-700 text-[18px] md:text-[19px] xl:text-[25px]">
              rheezmotion
            </h1>
            <h1 className="text-normal text-[18px] md:text-[19px] xl:text-[25px]">
              .
            </h1>
          </a>
          <div className="2xl:gap-9 xl:gap-7 flex items-center gap-5">
            {/* Navbar */}
            <nav className="xl:text-[16px] 2xl:gap-9 xl:gap-7 hidden lg:flex gap-5 items-center justify-center text-[14px] transition-all duration-600 ease-in-out">
              {Menu.map((menu, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => scrollToSection(refs[`${menu.path}Ref`])}
                    className="text-opacity-75 hover:text-opacity-100 font-light text-light hover:text-light-hover active:text-light-active transition-all duration-300 ease-in-out active:scale-95"
                  >
                    {menu.title}
                  </button>
                );
              })}
            </nav>
            {/* Button */}
            <button
              type="button"
              onClick={() => scrollToSection(refs.messageRef)}
              className="xl:text-[14px] my-button text-white py-[7px] px-[22px] border-[1.5px] border-normal rounded-full transition-all duration-300 ease-in-out active:scale-95 text-[12px] font-normal tracking-wide active:bg-darker hover:text-light-hover"
            >
              <div>Hire Me!</div>
            </button>
            {/* Burger */}
            <button
              button="button"
              className="lg:hidden flex flex-col gap-2 items-end"
            >
              <span className="w-8 h-[3px] bg-light rounded-full"></span>
              <span className="w-6 h-[3px] bg-light rounded-full"></span>
              <span className="w-7 h-[3px] bg-light rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
