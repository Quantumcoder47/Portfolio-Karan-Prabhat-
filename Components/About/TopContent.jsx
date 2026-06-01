"use client";
import { PrimaryButton, SectionHeading } from "../Common";
import Link from "next/link";
import { motion } from "framer-motion";

const TopContent = ({ isButton, gap, isLine, icon, des }) => {
  return (
    <div className="w-full overflow-hidden relative">
      {/* Decorative left box */}
      <div className="h-[9.6875rem] w-[5.6875rem] border border-gray hidden lg:block absolute -left-7 top-[25%] opacity-30" />

      <div className={`container flex flex-col ${gap}`}>
        <SectionHeading
          isLine={isLine}
          heading="about-me"
          des={des || null}
          icon={icon}
        />

        <div className="w-full grid lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-[5rem]">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            className="w-full h-full justify-center flex flex-col gap-5 sm:gap-[1.5rem]"
          >
            <p className="description">
              Hey, I&apos;m <span className="text-white font-[600]">Karan Prabhat</span> — a B.Tech CSE (AI &amp; ML) student at Sister Nivedita University, Kolkata, deeply passionate about building intelligent systems that solve real-world problems.
            </p>
            <p className="description">
              My journey started with curiosity about how machines learn. That curiosity turned into hands-on projects — from detecting credit card fraud with 0.97+ AUC-ROC to analyzing 211K IoT network records with 99.82% accuracy. I don&apos;t just build models; I build pipelines that deliver measurable impact.
            </p>
            <p className="description">
              Beyond ML, I have full-stack development exposure through Pantech Solutions training and product design experience from the XPMC XPro Program with Federation University Australia. I think in systems, not just code.
            </p>
            <p className="description">
              My goal: land a high-impact AI/ML engineering role at a top-tier tech company and keep building things that matter.
            </p>

            {isButton && (
              <Link href="/about-me">
                <PrimaryButton
                  text="Read more →"
                  childClass="border border-primary text-white hover:bg-light_primary w-[11rem]"
                />
              </Link>
            )}
          </motion.div>

          {/* Stats / info panel */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }}
            className="hidden lg:flex flex-col gap-4 justify-center"
          >
            {/* Education card */}
            <div className="border border-gray p-4 bg-dark">
              <h4 className="text-primary font-[600] text-[0.85rem] uppercase tracking-wider mb-3">
                Education
              </h4>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-white font-[500] text-[0.95rem]">B.Tech — CSE (AI &amp; ML)</p>
                  <p className="text-gray text-[0.85rem]">Sister Nivedita University, Kolkata</p>
                  <p className="text-primary text-[0.8rem]">Aug 2023 – Aug 2027</p>
                </div>
                <div className="border-t border-gray pt-3">
                  <p className="text-white font-[500] text-[0.95rem]">I.Sc — Mathematics</p>
                  <p className="text-gray text-[0.85rem]">Marwari College Ranchi, Jharkhand</p>
                  <p className="text-primary text-[0.8rem]">Apr 2020 – Apr 2022</p>
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="border border-gray p-4 bg-dark">
              <h4 className="text-primary font-[600] text-[0.85rem] uppercase tracking-wider mb-3">
                Quick Facts
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Location", value: "Kolkata, India" },
                  { label: "Focus", value: "AI/ML & Data Science" },
                  { label: "Status", value: "Open to Work" },
                  { label: "Degree", value: "B.Tech CSE (AI & ML)" },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-gray text-[0.75rem] uppercase tracking-wide">{item.label}</p>
                    <p className="text-white text-[0.9rem] font-[500]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="h-[9.6875rem] w-[5.6875rem] hidden lg:block absolute -right-7 bottom-[15%] opacity-20">
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-gray" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopContent;
