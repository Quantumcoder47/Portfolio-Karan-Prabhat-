"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "../Common";
import { experience } from "@/db";

const ExperienceCard = ({ role, type, company, location, duration, points, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.35, delay: index * 0.1 } }}
    viewport={{ once: true }}
    className="relative pl-6 border-l-2 border-primary"
  >
    {/* Timeline dot */}
    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-darker" />

    <div className="border border-gray bg-dark p-4 sm:p-5 card-hover">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="text-white font-[600] text-[1.05rem]">{role}</h3>
          <p className="text-primary text-[0.85rem] font-[500]">{type}</p>
          <p className="text-gray text-[0.85rem]">
            {company} · {location}
          </p>
        </div>
        <span className="metric-badge whitespace-nowrap self-start">{duration}</span>
      </div>

      {/* Points */}
      <ul className="flex flex-col gap-2">
        {points.map((point, i) => (
          <li key={i} className="flex gap-2 text-gray text-[0.9rem] leading-relaxed">
            <span className="text-primary mt-1 flex-shrink-0">▸</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <div className="w-full">
      <div className="container flex flex-col gap-[2rem] py-[3rem]">
        <SectionHeading heading="experience" isLine={true} icon="#" />

        <div className="flex flex-col gap-8">
          {experience?.map((exp, index) => (
            <ExperienceCard key={exp.id} {...exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
