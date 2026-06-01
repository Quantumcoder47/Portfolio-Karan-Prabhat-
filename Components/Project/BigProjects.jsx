"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "../Common";
import ProjectCard from "../Helpers/ProjectCard";
import { projects } from "@/db";

const BigProjects = () => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <SectionHeading isLine={false} heading="ml-projects" icon="#" des="End-to-end machine learning & data science projects" />

      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((values, index) => {
          const { name, des, liveURL, github, tech, metrics, category } = values;
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 + index * 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, delay: index * 0.1 },
              }}
              viewport={{ once: true }}
              key={index}
              className="w-full"
            >
              <ProjectCard
                name={name}
                des={des}
                liveURL={liveURL}
                github={github}
                tech={tech}
                metrics={metrics}
                category={category}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BigProjects;
