"use client";
import { SectionHeading } from "../Common";

const SmallProjects = () => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <SectionHeading
        isLine={false}
        heading="upcoming-projects"
        icon="#"
        des="What I'm building next"
      />

      <div className="border border-gray bg-dark p-6 flex items-center gap-4">
        <span className="relative flex h-3 w-3 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
        </span>
        <span className="text-gray text-[1rem]">Currently working on it...</span>
      </div>
    </div>
  );
};

export default SmallProjects;
