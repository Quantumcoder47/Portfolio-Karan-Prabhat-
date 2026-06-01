"use client";
import React, { useContext } from "react";
import { Logo } from "../Common";
import { MenuContext } from "../Context/MenuContext";
import { navigationTab, socialLink } from "@/db";
import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const Drawer = () => {
  const { handleMenuToggle } = useContext(MenuContext);

  return (
    <div className="h-screen w-full fixed z-[99999] top-0 left-0 sm:hidden overflow-x-hidden">
      <div className="relative bg-dark h-full w-full px-[1rem] flex flex-col gap-[2.5rem]">
        {/* Header */}
        <div className="w-full pt-[1rem] pb-[0.5rem] flex flex-row justify-between items-center">
          <Logo />
          <button onClick={() => handleMenuToggle()} aria-label="Close menu">
            <X size={28} className="text-white cursor-pointer" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="w-full flex flex-col gap-[1.5rem]">
          {navigationTab?.map((values, index) => {
            const { tab, path } = values;
            const isCV = tab === "MY CV";
            return (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: index * 0.06 }}
                className="w-full"
                key={index}
              >
                <Link
                  href={path}
                  target={isCV ? "_blank" : undefined}
                  onClick={() => handleMenuToggle()}
                  className="flex flex-row items-center text-gray font-[400] text-[1.1rem] hover:text-primary transition-all"
                >
                  <span className="text-primary pr-2">#</span>
                  <span>{tab}</span>
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Social links */}
        <div className="w-full absolute left-0 bottom-[3.5rem] flex flex-row justify-center gap-[1rem]">
          {socialLink.map((values, index) => {
            const { icon, url, name } = values;
            return (
              <Link
                className="text-gray text-[1.6rem] hover:text-primary transition-all"
                href={url}
                target="_blank"
                key={index}
                aria-label={name}
              >
                {icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
