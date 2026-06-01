"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "../Common";
import { certifications } from "@/db";

const CertCard = ({ name, issuer, year, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: index * 0.08 } }}
    viewport={{ once: true }}
    className="border border-gray bg-dark p-4 card-hover flex flex-col gap-2"
  >
    <div className="flex items-start justify-between">
      <span className="text-2xl" role="img" aria-label={name}>{icon}</span>
      <span className="metric-badge">{year}</span>
    </div>
    <h3 className="text-white font-[600] text-[0.95rem] leading-snug">{name}</h3>
    <p className="text-gray text-[0.82rem]">{issuer}</p>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className="w-full">
      <div className="container flex flex-col gap-[2rem] py-[3rem]">
        <SectionHeading heading="certifications" isLine={true} icon="#" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications?.map((cert, index) => (
            <CertCard key={cert.id} {...cert} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
