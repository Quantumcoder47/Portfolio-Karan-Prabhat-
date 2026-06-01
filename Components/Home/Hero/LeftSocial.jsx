"use client";
import { socialLink } from "@/db";
import Link from "next/link";
import { motion } from "framer-motion";

const LeftSocial = () => {
  return (
    <div className="hidden fixed z-[999] top-0 left-10 lg:flex flex-col items-center gap-[0.7rem] bg-darker">
      <div className="h-[11.9375rem] w-[0.0625rem] bg-gray opacity-40" />

      {socialLink?.map((values, index) => {
        const { icon, url, name } = values;
        return (
          <Link key={index} href={url} target="_blank" aria-label={name}>
            <motion.div
              initial={{ opacity: 0, y: 20 * (index + 1) }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.1 },
              }}
              className="text-gray hover:text-primary transition-all text-[1.3rem]"
            >
              {icon}
            </motion.div>
          </Link>
        );
      })}

      <div className="h-[5rem] w-[0.0625rem] bg-gray opacity-40" />
    </div>
  );
};

export default LeftSocial;
