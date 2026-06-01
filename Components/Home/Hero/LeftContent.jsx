"use client";
import { PrimaryButton } from "@/Components/Common";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa6";

const LeftContent = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `<span class="text-primary">AI/ML Engineer</span> in the making`,
        `<span class="text-primary">Data Scientist</span> & problem solver`,
        `<span class="text-primary">Full-Stack Developer</span> with ML depth`,
        `Building <span class="text-primary">intelligent systems</span> that matter`,
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1800,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col gap-[1.5rem] lg:gap-[2rem] justify-center h-full">
      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
      >
        <span className="text-gray text-[1rem] font-[400] tracking-widest uppercase">
          Hi there, I&apos;m
        </span>
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.05 } }}
      >
        <h1 className="text-white font-[700] text-[2.2rem] sm:text-[2.5rem] lg:text-[3rem] leading-tight tracking-tight">
          Karan Prabhat
        </h1>
      </motion.div>

      {/* Typed role */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.1 } }}
      >
        <h2 className="text-white font-[500] text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] min-h-[2rem]">
          <span ref={el}></span>
        </h2>
      </motion.div>

      {/* Summary */}
      <motion.p
        className="description max-w-[480px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.15 } }}
      >
        B.Tech CSE (AI &amp; ML) student building end-to-end data science
        pipelines and production-ready ML applications with measurable impact.
        Targeting high-impact engineering roles at top-tier tech companies.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-row flex-wrap gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.2 } }}
      >
        <Link href="/?action=contact">
          <PrimaryButton
            childClass="border-primary text-white bg-light_primary hover:bg-primary w-[9rem]"
            text="Hire Me"
          />
        </Link>
        <Link href="/Assets/Karan_Prabhat_Resume.pdf" target="_blank">
          <button className="flex items-center gap-2 py-[0.5rem] px-[1.2rem] border border-gray text-gray hover:border-primary hover:text-primary transition-all duration-200 font-[500]">
            <FaDownload className="text-sm" />
            <span>Resume</span>
          </button>
        </Link>
      </motion.div>

      {/* Social quick links */}
      <motion.div
        className="flex flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.25 } }}
      >
        <Link
          href="https://github.com/karanprabhat"
          target="_blank"
          aria-label="GitHub profile"
          className="text-gray hover:text-primary transition-all text-[1.4rem]"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/karan-prabhat"
          target="_blank"
          aria-label="LinkedIn profile"
          className="text-gray hover:text-primary transition-all text-[1.4rem]"
        >
          <FaLinkedin />
        </Link>
      </motion.div>
    </div>
  );
};

export default LeftContent;
