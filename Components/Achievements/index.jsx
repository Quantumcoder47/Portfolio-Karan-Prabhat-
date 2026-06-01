"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "../Common";
import { achievements } from "@/db";

const AchievementCard = ({ title, subtitle, description, icon, highlight, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.35, delay: index * 0.1 } }}
    viewport={{ once: true }}
    className="border border-primary bg-dark p-5 card-hover glow-primary relative overflow-hidden"
  >
    {/* Background accent */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-light_primary rounded-bl-full opacity-50" />

    <div className="relative z-10 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="text-3xl" role="img" aria-label={title}>{icon}</span>
        <div>
          <h3 className="text-white font-[700] text-[1.05rem]">{title}</h3>
          <p className="text-primary text-[0.82rem] font-[500]">{subtitle}</p>
        </div>
      </div>

      <p className="text-gray text-[0.9rem] leading-relaxed">{description}</p>

      <div className="flex items-center gap-2 pt-1">
        <div className="w-2 h-2 bg-primary rounded-full" />
        <span className="text-primary text-[0.82rem] font-[600]">{highlight}</span>
      </div>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <div className="w-full">
      <div className="container flex flex-col gap-[2rem] py-[3rem]">
        <SectionHeading heading="achievements" isLine={true} icon="#" />

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements?.map((ach, index) => (
            <AchievementCard key={ach.id} {...ach} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
