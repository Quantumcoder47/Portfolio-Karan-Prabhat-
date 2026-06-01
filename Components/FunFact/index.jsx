import React from "react";
import { SectionHeading } from "../Common";
import { funFacts } from "@/db";

const FunFacts = () => {
  return (
    <div className="w-full">
      <div className="container flex flex-col gap-[2rem]">
        <SectionHeading heading="fun-facts" isLine={false} icon="#" />
        <div className="w-full flex flex-wrap gap-3">
          {funFacts?.map((fact, index) => (
            <div
              key={index}
              className="bg-dark border border-gray p-[0.6rem] hover:border-primary transition-all duration-200"
            >
              <span className="description text-[0.9rem]">
                <span className="text-primary mr-2">✦</span>
                {fact}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
