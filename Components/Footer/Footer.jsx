import React from "react";
import { Logo } from "../Common";
import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa6";
import { socialLink } from "@/db";

const Footer = () => {

  const data= [
              { label: "Home", href: "/" },
              { label: "Projects", href: "/my-works" },
              { label: "About Me", href: "/about-me" },
              { label: "CONTACT", href: "/#contact" },
            ];
  return (
    <footer  className="w-full py-[2rem] border-t border-gray px-[1rem] sm:px-0  mt-10">
      <div className="container flex flex-col gap-[1.5rem] sm:gap-[2.5rem]">
        <div className="flex flex-col text-center sm:text-start sm:flex-row gap-5 sm:gap-0 justify-between items-center sm:items-start">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-[0.5rem]">
            <Link href="/" aria-label="Home">
              <Logo />
            </Link>
            <span className="text-gray font-[400] text-[0.9rem] max-w-[260px]">
              Aspiring AI/ML Engineer · Data Scientist · Full-Stack Developer
            </span>
            <span className="text-gray text-[0.82rem]">
              📍 Kolkata, India
            </span>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-primary font-[600] text-[0.85rem] uppercase tracking-wider">
              Navigation
            </span>
            {data.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray text-[0.9rem] hover:text-primary transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-primary font-[600] text-[0.85rem] uppercase tracking-wider">
              Connect
            </span>
            <div className="flex flex-row gap-[0.75rem]">
              {socialLink?.map((values, index) => {
                const { icon, url, name } = values;
                return (
                  <Link key={index} href={url} target="_blank" aria-label={name}>
                    <span className="text-gray text-[1.4rem] hover:text-primary transition-all">
                      {icon}
                    </span>
                  </Link>
                );
              })}
            </div>
            <Link
              href="mailto:prabhatkaran47@gmail.com"
              className="text-gray text-[0.85rem] hover:text-primary transition-all"
            >
              prabhatkaran47@gmail.com
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center gap-1 justify-center border-t border-gray pt-4">
          <span className="text-gray text-[0.85rem]">
            <FaRegCopyright className="inline mr-1" />
            2026 Karan Prabhat • Building at the intersection of AI, Data & Technology.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
