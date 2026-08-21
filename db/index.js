import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope  } from "react-icons/fa6";

const navigationTab = [
  { tab: "HOME", path: "/" },
  { tab: "PROJECTS", path: "/my-works" },
  { tab: "ABOUT ME", path: "/about-me" },
  { tab: "CONTACT", path: "/#contact" },
  { tab: "MY CV", path: "/Assets/Karan_Prabhat_Resume.pdf" },
];

const projects = [
  {
    id: "PRJ1",
    thumbnail: "/Assets/iot-project.png",
    name: "IoT Network Security — ML Attack Detection",
    des: "End-to-end ML pipeline on 211K IoT network flow records. Random Forest achieved 99.82% accuracy with only 29 missed attacks out of 29,687.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    liveURL: "",
    github:
      "https://github.com/Quantumcoder47/IoT-Network-Security-Data-Analysis-and-Classical-Machine-Learning-for-Attack-Detection",
    metrics: [
      { label: "Accuracy", value: "99.82%" },
      { label: "F1 Score", value: "0.9988" },
      { label: "Records Processed", value: "211K" },
    ],
    category: "ML / Security",
  },
  {
    id: "PRJ2",
    thumbnail: "/Assets/fraudnet-project.png",
    name: "FraudNet AI — Credit Card Fraud Detection",
    des: "MLP neural network on 284,807 transactions with SMOTE oversampling. Achieved AUC-ROC of 0.97–0.99 and Recall of 0.85–0.93 on imbalanced test set.",
    tech: ["Python", "TensorFlow", "Keras", "Scikit-learn", "imbalanced-learn"],
    liveURL: "",
    github: "https://github.com/Quantumcoder47/Credit-Card-Fraud-Detection",
    metrics: [
      { label: "AUC-ROC", value: "0.97–0.99" },
      { label: "Recall", value: "0.85–0.93" },
      { label: "Transactions", value: "284K" },
    ],
    category: "Deep Learning",
  },
  {
    id: "PRJ3",
    thumbnail: "/Assets/canteen-project.png",
    name: "Canteen Menu Optimizer",
    des: "Classification ML pipeline to predict dietary preferences. Deployed on Streamlit Cloud with 82.6% accuracy, 56.4% estimated ROI improvement, and ~30% food waste reduction.",
    tech: ["Python", "Scikit-learn", "Streamlit", "SMOTE", "Business Intelligence"],
    liveURL: "https://canteen-menu-optimizer.streamlit.app/",
    github: "https://github.com/Quantumcoder47/canteen-menu-optimizer",
    metrics: [
      { label: "Accuracy", value: "82.6%" },
      { label: "ROI Improvement", value: "56.4%" },
      { label: "Waste Reduction", value: "~30%" },
    ],
    category: "ML / Streamlit",
  },
];

const skills = [
  {
    name: "Programming Languages",
    tech: ["Python", "C", "C++", "JavaScript"],
  },
  {
    name: "AI / ML & Deep Learning",
    tech: [
      "Machine Learning",
      "ANN",
      "Deep Learning",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "SMOTE",
    ],
  },
  {
    name: "Data Science",
    tech: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Feature Engineering",
      "EDA",
      "Jupyter Notebook",
    ],
  },
  {
    name: "Web Development",
    tech: ["HTML", "CSS", "React", "Streamlit", "REST APIs"],
  },
  {
    name: "Tools & Platforms",
    tech: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Streamlit Cloud",
      "Google Colab",
    ],
  },
  {
    name: "Core CS",
    tech: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

const experience = [
  {
    id: "EXP1",
    role: "Full-Stack Web Developer",
    type: "Training Program",
    company: "Pantech Solutions",
    location: "Chennai (Online)",
    duration: "May 2024 – Aug 2024",
    points: [
      "Built full-stack web application clones with frontend–backend integration patterns.",
      "Strengthened end-to-end development, debugging, and code-structuring skills.",
      "Implemented REST API integrations and responsive UI components.",
    ],
  },
  {
    id: "EXP2",
    role: "Product Design & Implementation",
    type: "XPMC XPro Program",
    company: "Employability.life & Federation University Australia",
    location: "Remote",
    duration: "Nov 2025 – Jan 2026",
    points: [
      "Redesigned a personal loan journey using the Double Diamond framework.",
      "Conducted user research (surveys & interviews) and designed Figma wireframes.",
      "Built a stage-wise Customer Communication Logic Framework.",
      "Delivered a phased roadmap (Pilot → Limited Release → Full Launch) with KPIs and a Complexity–Impact Matrix.",
      "Contributed to agile sprint execution in a cross-functional team.",
    ],
  },
  {
    id: "EXP3",
    role: "Generative AI Annotator",
    type: "Remote Internship",
    company: "RT Networks Pvt. Ltd.",
    location: "Remote",
    duration: "January 2026 – April 2026",
    points: [
      "Annotated and validated Generative AI outputs to improve model quality, accuracy, and response consistency.",
      "Evaluated AI-generated content for correctness, relevance, safety, and alignment with project guidelines.",
      "Collaborated with cross-functional teams while following structured annotation workflows and maintaining high-quality standards.",
    ],
  },
];

const certifications = [
  {
    id: "CERT1",
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    year: "2024",
    icon: "🤖",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/KUJEB29Q5L1P",
  },
  {
    id: "CERT2",
    name: "Introduction to Artificial Intelligence (AI)",
    issuer: "Coursera",
    year: "2024",
    icon: "🧠",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/DLHZGJL2F9XZ",
  },
  {
    id: "CERT3",
    name: "Design Thinking for Innovation",
    issuer: "Coursera",
    year: "2025",
    icon: "💡",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/ACJHZFGIAGZS",
  },
  {
    id: "CERT4",
    name: "Internship in Full-Stack Web Development",
    issuer: "Pantech Solutions",
    year: "2024",
    icon: "🌐",
    credentialUrl: "https://drive.google.com/file/d/1mlFQyjZ6IZrqcRDD5k-hThneIsuLozjy/view",
  },
  {
    id: "CERT5",
    name: "XPMC XPro Certification",
    issuer: "Employability.life & Federation University Australia",
    year: "2026",
    icon: "🏆",
    credentialUrl: "https://drive.google.com/file/d/1RLIn9uk_HY1wVNiH_k6c1V4Rs1mV1SsM/view",
  },
  {
    id: "CERT6",
    name: "Generative AI Annotator",
    issuer: "RT Networks Pvt. Ltd.",
    year: "2026",
    icon: "✨",
    credentialUrl: "https://drive.google.com/file/d/1wQLpE7umlNBzI97VZYPcKpzz13QVkeVE/view",
  },
  {
    id: "CERT7",
    name: "Bharatiya Antariksh Hackathon 2026 — Certificate of Participation",
    issuer: "Indian Space Research Organisation (ISRO) / Hack2Skill",
    year: "2026",
    icon: "🚀",
    credentialUrl: "https://certificate.hack2skill.com/claim/91e4aa8b05f53d7b79fc384811d3560df4285a128760a3d33fd3c76f6a6a880f",
  },
];

const achievements = [
  {
    id: "ACH1",
    title: "Smart India Hackathon",
    subtitle: "Internal Round",
    description:
      "Ranked in top 35% among 120 teams (600+ participants) with an AI-based Traffic Management System project.",
    icon: "🥇",
    highlight: "Top 35% of 600+ participants",
  },
  {
    id: "ACH2",
    title: "XPMC XPro Certification",
    subtitle: "Employability.life & Federation University Australia (2026)",
    description:
      "Completed a rigorous program covering Product Thinking, UX Design, Roadmapping, and Agile Collaboration.",
    icon: "🎓",
    highlight: "Federation University Australia",
  },
];

const funFacts = [
  "I debug ML models at midnight",
  "I believe data tells better stories than words",
  "I've processed 500K+ records across my projects",
  "I love turning messy datasets into clean insights",
  "I'm building toward top-tier AI/ML engineering roles",
  "I think in pipelines, not just code",
];

const socialLink = [
  {
    icon: <FaGithub />,
    url: "https://github.com/Quantumcoder47",
    name: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/karan-prabhat-kp47/",
    name: "LinkedIn",
  },
  {
    icon: <FaXTwitter  />,
    url: "https://x.com/karanprabhat47",
    name: "Twitter",
  },
  {
    icon: <FaEnvelope />,
    url: "mailto:prabhatkaran47@gmail.com",
    name: "Email",
  },
];

export {
  navigationTab,
  projects,
  skills,
  experience,
  certifications,
  achievements,
  funFacts,
  socialLink,
};
