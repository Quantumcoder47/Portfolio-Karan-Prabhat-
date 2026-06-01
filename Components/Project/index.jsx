"use client";
import { SectionHeading } from "../Common";
import BigProjects from "./BigProjects";
import SmallProjects from "./SmallProjects";

const AllProject = () => {
  return (
    <div className="w-full">
      <div className="container flex flex-col gap-[4rem]">
        <SectionHeading
          isLine={false}
          heading="projects"
          des="My machine learning, data science & development work"
          icon="/"
        />

        <div className="w-full flex flex-col gap-[4rem]">
          <BigProjects />
          <SmallProjects />
        </div>
      </div>
    </div>
  );
};

export default AllProject;
