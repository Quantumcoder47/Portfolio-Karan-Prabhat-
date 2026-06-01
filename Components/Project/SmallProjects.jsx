"use client";
import { SectionHeading } from "../Common";

// This section is reserved for future mini-projects / experiments
const SmallProjects = () => {
  const comingSoon = [
    {
      name: "Sentiment Analysis API",
      des: "REST API for real-time sentiment classification using fine-tuned transformer models.",
      tech: ["Python", "FastAPI", "HuggingFace", "Transformers"],
      status: "In Progress",
    },
    {
      name: "Stock Price Predictor",
      des: "LSTM-based time series forecasting model for stock price prediction with technical indicators.",
      tech: ["Python", "TensorFlow", "Pandas", "yfinance"],
      status: "Planned",
    },
    {
      name: "Resume Parser",
      des: "NLP pipeline to extract structured information from resumes using spaCy and regex.",
      tech: ["Python", "spaCy", "NLP", "Streamlit"],
      status: "Planned",
    },
  ];

  return (
    <div className="flex flex-col gap-[2rem]">
      <SectionHeading
        isLine={false}
        heading="upcoming-projects"
        icon="#"
        des="What I'm building next"
      />

      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {comingSoon.map((project, index) => (
          <div key={index} className="w-full border border-gray bg-dark p-4 opacity-70">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-[600] text-[0.95rem]">{project.name}</span>
              <span
                className={`text-[0.72rem] px-2 py-0.5 border font-[500] ${
                  project.status === "In Progress"
                    ? "border-primary text-primary"
                    : "border-gray text-gray"
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-gray text-[0.85rem] leading-relaxed mb-3">{project.des}</p>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((t, i) => (
                <span key={i} className="skill-tag text-[0.75rem]">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallProjects;
