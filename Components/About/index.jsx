import React from "react";
import TopContent from "./TopContent";
import Skills from "../Home/Skills";
import FunFacts from "../FunFact";
import Experience from "../Experience";
import Certifications from "../Certifications";
import Achievements from "../Achievements";

const About = () => {
  return (
    <>
      <TopContent
        isLine={false}
        icon="/"
        gap="gap-[1.5rem] sm:gap-[2rem]"
        des="Who am I?"
      />
      <div className="w-full py-[2rem]">
        <Skills
          isLine={false}
          icon="#"
          isDesign={false}
          childLayout="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        />
      </div>
      <Experience />
      <Achievements />
      <Certifications />
      <div className="w-full sm:pt-[2rem] lg:pb-[5rem]">
        <FunFacts />
      </div>
    </>
  );
};

export default About;
