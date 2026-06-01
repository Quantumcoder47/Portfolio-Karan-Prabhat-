"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Stat badge shown below the hero image
const StatBadge = ({ value, label }) => (
  <div className="flex flex-col items-center px-4 py-2 border border-gray bg-dark">
    <span className="text-primary font-[700] text-[1.2rem]">{value}</span>
    <span className="text-gray text-[0.75rem] font-[400] text-center">{label}</span>
  </div>
);

const HeroImage = () => {
  return (
    <div className="h-full flex-all-center flex-col gap-4">
      {/* Profile image with decorative border */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      >
        {/* Decorative corner accents */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary" />
        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary" />
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary" />

        <Image
          src="/Assets/heroImage.svg"
          alt="Karan Prabhat — AI/ML Engineer"
          width={280}
          height={280}
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Key stats */}
      <motion.div
        className="grid grid-cols-3 gap-2 w-full max-w-[320px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }}
      >
        <StatBadge value="3+" label="ML Projects" />
        <StatBadge value="99.82%" label="Best Accuracy" />
        <StatBadge value="500K+" label="Records Processed" />
      </motion.div>

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.3 } }}
        className="p-[0.5rem] border border-gray flex flex-row items-center gap-[0.75rem] bg-dark w-full max-w-[320px]"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
        </span>
        <span className="description text-[0.85rem]">
          Open to AI/ML &amp; Data Science roles
        </span>
      </motion.div>
    </div>
  );
};

export default HeroImage;
