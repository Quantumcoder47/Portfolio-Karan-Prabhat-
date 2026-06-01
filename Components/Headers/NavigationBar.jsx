"use client";
import React, { useContext } from "react";
import { Logo } from "../Common";
import { navigationTab } from "@/db";
import Link from "next/link";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { MenuContext } from "../Context/MenuContext";

const NavigationBar = () => {
  const { handleMenuToggle } = useContext(MenuContext);

  return (
    <nav
      className="bg-darker bg-opacity-90 backdrop-blur-md border-b border-gray border-opacity-20 px-[1rem] sm:px-0 py-3 md:py-4 flex flex-row justify-between items-center container"
      role="navigation"
      aria-label="Main navigation"
    >
      <Link href="/" aria-label="Karan Prabhat — Home">
        <Logo />
      </Link>

      {/* Desktop nav */}
      <div className="text-[0.9rem] hidden sm:flex flex-row sm:gap-[1.5rem] lg:gap-[2rem] items-center">
        {navigationTab?.map((values, index) => {
          const { tab, path } = values;
          const isCV = tab === "MY CV";
          return (
            <Link
              href={path}
              key={index}
              target={isCV ? "_blank" : undefined}
              className="flex flex-row items-center text-gray font-[400] hover:text-primary transition-all duration-200"
            >
              <span className="text-primary mr-0.5 hidden md:inline">#</span>
              <span>{tab}</span>
            </Link>
          );
        })}
      </div>

      {/* Mobile hamburger */}
      <button
        className="sm:hidden text-white"
        onClick={() => handleMenuToggle()}
        aria-label="Open menu"
      >
        <HiMiniBars3BottomRight className="text-[1.8rem]" />
      </button>
    </nav>
  );
};

export default NavigationBar;
