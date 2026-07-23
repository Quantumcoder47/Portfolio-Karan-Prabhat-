"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "../Common";
import { certifications } from "@/db";

const CertCard = ({ name, issuer, year, icon, credentialUrl, index }) => (
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

    {credentialUrl && (
      <a
        href={credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Show credentials for ${name}`}
        className="mt-auto pt-3 w-full flex items-center justify-center gap-2 text-[0.82rem] font-[500] text-primary border border-primary px-3 py-[0.45rem] transition-all duration-200 hover:bg-primary hover:text-darker focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark"
      >
        Show Credentials
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    )}
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
