import { Inter } from "next/font/google";
import "./globals.css";
import MenuProvider from "@/Components/Context/MenuContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Karan Prabhat — AI/ML Engineer & Data Scientist",
  description:
    "Portfolio of Karan Prabhat — Aspiring AI/ML Engineer, Data Scientist, and Full-Stack Developer. B.Tech CSE (AI & ML) student building intelligent systems with measurable impact.",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Full Stack Developer",
    "AI ML Portfolio",
    "Computer Science Student",
    "Karan Prabhat",
    "Python Developer",
    "TensorFlow",
    "Deep Learning",
  ],
  authors: [{ name: "Karan Prabhat" }],
  creator: "Karan Prabhat",
  metadataBase: new URL("https://karanprabhat.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karanprabhat.dev",
    title: "Karan Prabhat — AI/ML Engineer & Data Scientist",
    description:
      "Aspiring AI/ML Engineer with strong foundations in machine learning, deep learning, and full-stack development. Building intelligent systems with measurable impact.",
    siteName: "Karan Prabhat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Prabhat — AI/ML Engineer & Data Scientist",
    description:
      "Aspiring AI/ML Engineer building intelligent systems with measurable impact.",
    creator: "@karanprabhat",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#C778DD" />
        <link rel="canonical" href="https://karanprabhat.dev" />
      </head>
      <body className={inter.className}>
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  );
}
