import React from "react";
import { SectionHeading } from "../Common";
import { skills } from "@/db";

const SkillCard = ({ name, tech }) => (
  <div className="w-full border border-gray card-hover bg-dark">
    <div className="w-full border-b border-gray p-[0.6rem] bg-light_primary">
      <span className="capitalize font-[600] text-[0.9rem] text-primary tracking-wide">
        {name}
      </span>
    </div>
    <div className="w-full p-[0.6rem] flex flex-wrap gap-[0.4rem]">
      {tech?.map((technology, index) => (
        <span key={index} className="skill-tag">
          {technology}
        </span>
      ))}
    </div>
  </div>
);

const Skills = ({ icon, isLine, isDesign, parentLayout, childLayout }) => {
  return (
    <div className="container flex flex-col gap-[1.5rem] py-[1.5rem] lg:py-[3rem] overflow-x-hidden">
      <div className="sm:w-[60%]">
        <SectionHeading heading="skills" isLine={isLine} icon={icon} />
      </div>

      <div className={`w-full ${parentLayout || ""} gap-10`}>
        {isDesign && (
          <div className="hidden sm:flex col-span-1 items-center justify-center">
            {/* Decorative code snippet */}
            <div className="border border-gray p-4 bg-dark text-[0.75rem] font-mono text-gray leading-relaxed">
              <div><span className="text-primary">const</span> karan = {"{"}</div>
              <div className="pl-4"><span className="text-primary">role</span>: <span className="text-white">&quot;AI/ML Engineer&quot;</span>,</div>
              <div className="pl-4"><span className="text-primary">focus</span>: <span className="text-white">&quot;Deep Learning&quot;</span>,</div>
              <div className="pl-4"><span className="text-primary">goal</span>: <span className="text-white">&quot;Top-tier tech&quot;</span>,</div>
              <div className="pl-4"><span className="text-primary">status</span>: <span className="text-white">&quot;Open to work&quot;</span></div>
              <div>{"}"}</div>
            </div>
          </div>
        )}

        <div className="col-span-2">
          <div className={`w-full ${childLayout || "grid sm:grid-cols-2 gap-4"}`}>
            {skills?.map((values, index) => (
              <SkillCard key={index} name={values.name} tech={values.tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
