import { PrimaryButton } from "../Common";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ name, des, liveURL, github, tech, metrics, category }) => {
  return (
    <div className="w-full border border-gray bg-dark card-hover flex flex-col h-full">
      {/* Category badge */}
      {category && (
        <div className="w-full px-[1rem] pt-[0.75rem]">
          <span className="metric-badge">{category}</span>
        </div>
      )}

      {/* Tech stack */}
      <div className="w-full flex flex-row flex-wrap gap-x-[0.4rem] gap-y-1 px-[1rem] py-[0.6rem] border-b border-gray">
        {tech?.map((technology, index) => (
          <span
            key={index}
            className="skill-tag text-[0.8rem]"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="w-full p-[1rem] flex flex-col gap-[0.75rem] flex-1">
        <h3 className="text-[1.15rem] font-[600] text-white leading-snug">
          {name}
        </h3>
        <p className="text-[0.9rem] font-[400] text-gray leading-relaxed flex-1">
          {des}
        </p>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="flex flex-row flex-wrap gap-2 pt-1">
            {metrics.map((m, i) => (
              <div key={i} className="flex flex-col items-center px-3 py-1 border border-gray bg-darker">
                <span className="text-primary font-[700] text-[0.9rem]">{m.value}</span>
                <span className="text-gray text-[0.7rem]">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-row gap-2 pt-1">
          {liveURL && (
            <Link href={liveURL} className="flex-1" target="_blank">
              <PrimaryButton
                text="Live Demo"
                childClass="w-full border-primary text-white hover:bg-light_primary flex items-center justify-center gap-1"
              />
            </Link>
          )}
          {github && (
            <Link href={github} target="_blank" aria-label="View source code on GitHub">
              <button className="py-[0.5rem] px-[0.9rem] border border-gray text-gray hover:border-primary hover:text-primary transition-all duration-200 flex items-center gap-1">
                <FaGithub className="text-[1rem]" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
