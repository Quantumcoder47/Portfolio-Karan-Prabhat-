import Link from "next/link";
import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";

const Message = () => {
  return (
    <div className="w-full border border-gray p-[1rem] flex flex-col gap-3 bg-dark">
      <h4 className="font-[600] text-white text-[1rem]">Reach me directly</h4>
      <div className="w-full flex flex-col gap-2.5">
        <div className="flex flex-row items-center gap-3">
          <FaEnvelope className="text-primary text-[1.2rem] flex-shrink-0" />
          <Link
            href="mailto:prabhatkaran47@gmail.com"
            className="description hover:text-primary transition-all text-[0.9rem]"
          >
            prabhatkaran47@gmail.com
          </Link>
        </div>
        <div className="flex flex-row items-center gap-3">
          <FaLinkedin className="text-primary text-[1.2rem] flex-shrink-0" />
          <Link
            href="https://www.linkedin.com/in/karan-prabhat"
            target="_blank"
            className="description hover:text-primary transition-all text-[0.9rem]"
          >
            linkedin.com/in/karan-prabhat
          </Link>
        </div>
        <div className="flex flex-row items-center gap-3">
          <FaGithub className="text-primary text-[1.2rem] flex-shrink-0" />
          <Link
            href="https://github.com/karanprabhat"
            target="_blank"
            className="description hover:text-primary transition-all text-[0.9rem]"
          >
            github.com/karanprabhat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Message;
