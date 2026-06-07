import HomePage from "@/Components/Home";
import PageLayout from "@/Components/Layouts/PageLayout";

export const metadata = {
  metadataBase: new URL("https://portfolio-karan-prabhat.vercel.app"),
  title: "Karan Prabhat — AI/ML Engineer, Data Scientist & Full-Stack Developer",
  description:
    "Welcome to Karan Prabhat's portfolio. Aspiring AI/ML Engineer and Data Scientist with proven projects in fraud detection, IoT security, and ML-powered applications.",
  openGraph: {
    title: "Karan Prabhat — AI/ML Engineer & Data Scientist",
    description:
      "Aspiring AI/ML Engineer with strong foundations in machine learning, deep learning, and full-stack development. Explore my projects and achievements.",
    url: "https://portfolio-karan-prabhat.vercel.app",
    images: [
      {
        url: "/Assets/hero.png",
        width: 500,
        height: 500,
        alt: "Karan Prabhat — AI/ML Engineer Portfolio",
      },
    ],
  },
};

export default function Home() {
  return (
    <PageLayout>
      <HomePage />
    </PageLayout>
  );
}
