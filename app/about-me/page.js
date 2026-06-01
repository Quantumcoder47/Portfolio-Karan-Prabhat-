import About from "@/Components/About";
import PageLayout from "@/Components/Layouts/PageLayout";
import React from "react";

export async function generateMetadata() {
  return {
    title: "About Karan Prabhat — AI/ML Engineer & Data Scientist",
    description:
      "Learn about Karan Prabhat's journey into AI/ML engineering, data science projects, education at Sister Nivedita University, and career aspirations in top-tier tech.",
    openGraph: {
      title: "About Karan Prabhat — AI/ML Engineer & Data Scientist",
      description:
        "Final Year B.Tech CSE (AI & ML) student building intelligent systems with measurable impact. Explore my story, skills, and experience.",
      images: [
        {
          url: "/Assets/heroImage.svg",
          width: 500,
          height: 500,
          alt: "Karan Prabhat",
        },
      ],
    },
  };
}

const AboutPage = () => {
  return (
    <PageLayout>
      <div className="w-full pt-[5rem] pb-[5rem] sm:pb-0 lg:pt-[9rem] px-[1rem] sm:px-0">
        <About />
      </div>
    </PageLayout>
  );
};

export default AboutPage;
