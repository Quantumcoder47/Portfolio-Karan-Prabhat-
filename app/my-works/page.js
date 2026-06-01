import PageLayout from "@/Components/Layouts/PageLayout";
import AllProject from "@/Components/Project";

export async function generateMetadata() {
  return {
    title: "Projects — Karan Prabhat | AI/ML & Data Science Portfolio",
    description:
      "Explore Karan Prabhat's machine learning and data science projects: IoT Network Security Analysis (99.82% accuracy), FraudNet AI (AUC-ROC 0.97–0.99), and Canteen Menu Optimizer.",
    openGraph: {
      title: "Projects — Karan Prabhat | AI/ML & Data Science Portfolio",
      description:
        "End-to-end ML pipelines, deep learning models, and data science applications with measurable real-world impact.",
      images: [
        {
          url: "/Assets/heroImage.png",
          width: 500,
          height: 500,
          alt: "Karan Prabhat Projects",
        },
      ],
    },
  };
}

const ProjectsPage = () => {
  return (
    <PageLayout>
      <div className="w-full pt-[5rem] pb-[5rem] lg:pb-[7rem] lg:pt-[9rem] px-[1rem] sm:px-0">
        <AllProject />
      </div>
    </PageLayout>
  );
};

export default ProjectsPage;
