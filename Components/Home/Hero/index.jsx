"use client";
import HeroImage from "./HeroImage";
import LeftContent from "./LeftContent";
import Quotes from "./Quotes";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section aria-label="Hero section">
      <div className="relative w-full">
        <div className="container flex flex-col pt-[5rem] lg:pt-[9rem] pb-[5rem]">
          <div className="w-full grid sm:grid-cols-2 sm:gap-[2rem] lg:gap-8 items-center">
            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4 },
              }}
              viewport={{ once: true }}
            >
              <LeftContent />
            </motion.div>

            <motion.div
              className="h-full mt-8 sm:mt-0"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1 },
              }}
              viewport={{ once: true }}
            >
              <HeroImage />
            </motion.div>
          </div>

          <div className="w-full pt-10 lg:pt-[6rem]">
            <Quotes />
          </div>
        </div>

        {/* Decorative corner */}
        <div className="h-[5.6875rem] w-[5.6875rem] border border-gray hidden lg:block absolute -right-3 bottom-[10%] opacity-30" />
      </div>
    </section>
  );
};

export default HeroSection;
