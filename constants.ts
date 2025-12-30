import { Experience, Project, CodingProfile, Certificate, ResearchEngagement, Publication, BlogPost } from './types';

export const PERSONAL_INFO = {
  name: "SAEE BARVE",
  title: "Software Engineer & Researcher",
  bio: "Specializing in distributed systems and AI, I engineer scalable platforms and intelligent models that turn research into real world impact.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    email: "mailto:saeekailas@gmail.com?subject=Inquiry%20from%20Portfolio"
  }
};

export const EXPERIENCES: Experience[] = [
  {
    id: "e1",
    company: "AISECT",
    role: "Software Devlopment Engineer",
    period: "Jun 2025 — Present",
    description: [
      "Develop and maintain web and mobile applications for AISECT’s education and digital service platforms, ensuring scalable and efficient software solutions.",
      "Build backend modules, APIs, and database integrations to support e-learning, skill development, and governance applications.",
      "Collaborate with cross-functional teams to implement new features, optimize workflows, and improve software reliability across AISECT’s platforms.",
      "Perform unit testing, debugging, and code reviews to ensure high quality deliverables for internal and external users."
    ]
  },
  {
    id: "e2",
    company: "A-DevOps Solutions",
    role: "Python Development Intern",
    period: "June 2024 — Sep 2024",
    description: [
      "Worked on Python scripts and backend modules to support DevOps automation, CI/CD workflows, and internal tooling.",
      "Assisted in building automation and data processing tools used for monitoring, reporting, and improving software delivery pipelines.",
      "Collaborated with the team using Git, Linux environments, and SDLC best practices to develop and optimize production ready solutions."
    ]
  },
  {
    id: "e3",
    company: "Freelance QA Automation Engineer",
    role: "Independent Contractor",
    period: "Oct 2023 — Present",
    description: [
      "Delivered Selenium based automated testing for enterprise telecom web applications used in Vodafone UK projects.",
      "Executed functional and regression test suites, identifying critical defects in customer facing workflows.",
      "Collaborated with a senior QA engineer to validate releases and improve overall test reliability."
    ]
  },
  {
    id: "e4",
    company: "Muskurahat Foundation",
    role: "Marketing & Outreach Intern",
    period: "Sep 2022 — Oct 2022",
    description: [
      "Strategically promoted educational and social campaigns through digital and offline channels, increasing awareness among target communities.",
      "Designed and executed content and engagement strategies, leveraging marketing and communication skills to drive participation in programs.",
      "Coordinated with volunteers and stakeholders to ensure successful campaign delivery, contributing to the foundation’s mission of empowering underprivileged children."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "AuraAI",
    description: "AuraAI is a high performance multimodal workspace for document intelligence, cinematic visual synthesis, and real time voice collaboration.",
    tags: ["Python", "FastAPI", "TypeScript", "React", "Node.js"],
    link: "https://github.com/saeekailas/AuraAI"
  },
  {
    id: "p2",
    title: "GlobalSight: Planetary Intelligence Engine",
    description: "GlobalSight is a multimodal intelligence engine designed to democratize expert level analysis of real world issues. While current AI describes what it sees, GlobalSight analyzes why it matters and how to fix it.",
    tags: ["Python", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/saeekailas"
  }
];

export const CERTIFICATIONS: Certificate[] = [
  {
    id: "c1",
    name: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase&Co. ",
    date: "02/10/2025",
    pdfUrl: "https://drive.google.com/file/d/1cKTXQiTZWZd92iK07MsfgnUDHKPebAjo/view?usp=sharing"
  },
  {
    id: "c2",
    name: "Certificate of Presentation",
    issuer: "National Conference on Radical Innovation for Sustainable Engineering Solutions",
    date: "12/06/2024",
    pdfUrl: "https://drive.google.com/file/d/12HMF20sOElFpHmmpWJQAi4Y49uIQoENf/view?usp=drivesdk"
  },
  {
    id: "c3",
    name: "Technology Virtual Experience Program",
    issuer: "Deloitte",
    date: "08/10/2023",
    pdfUrl: "https://drive.google.com/file/d/1RhccMkn0CCbWeoFqzR8o5wVapFmTn1NC/view?usp=sharing"
  },
  {
    id: "c4",
    name: "Agile Methodology Virtual Experience Program",
    issuer: "Cognizant",
    date: "08/10/2023",
    pdfUrl: "https://drive.google.com/file/d/1H0qAP2TCyGDW4l6UbZYxQ7GraEXKO4GH/view?usp=sharing"
  },
  {
    id: "c5",
    name: "Certificate Course in C Programming",
    issuer: "Disha Computer Institute",
    date: "05/21/2022",
    pdfUrl: "https://drive.google.com/file/d/15xEpuw088b-l2d6f7gxGsM9QmmcwhPJt/view?usp=drivesdk"
  }
];

export const CODING_PROFILES: CodingProfile[] = [
  { 
    platform: "LeetCode", 
    username: "SAEEBARVE", 
    url: "https://leetcode.com/u/SAEEBARVE/", 
    icon: "fa-solid fa-code"
  },
  { 
    platform: "Codeforces", 
    username: "SaeeBarve", 
    url: "https://codeforces.com/profile/SaeeBarve", 
    icon: "fa-solid fa-terminal"
  },
  { 
    platform: "HackerRank", 
    username: "saeebarve0103", 
    url: "https://www.hackerrank.com/profile/saeebarve0103", 
    icon: "fa-brands fa-hackerrank"
  },
  { 
    platform: "CodeChef", 
    username: "saee0103", 
    url: "https://www.codechef.com/users/saee0103", 
    icon: "fa-solid fa-bowl-food"
  }
];

export const RESEARCH_ENGAGEMENTS: ResearchEngagement[] = [
  {
    type: "Conference",
    title: "Cloud Computing, DevOps & Modern Application Architecture",
    venue: "Amazon AWS re:Invent 2025",
    date: "Dec 2025",
    role: "Conference Participant"
  },
  {
    type: "Conference",
    title: "Apple Worldwide Developers Conference",
    venue: "Apple WWDC 2025",
    date: "Jun 2025",
    role: "Conference Participant"
  }
];

export const PUBLICATIONS: Publication[] = [];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "How Knowledge Graphs Help LLMs Detect Their Own Hallucinations",
    excerpt: "How knowledge graphs enable large language models to self-detect hallucinations and improve factual reliability.",
    date: "Dec 30, 2025",
    readingTime: "4 min",
    link: "https://groundedintelligence.hashnode.dev/"
  },
  {
    title: "Fine-Tuning vs Prompt Engineering vs RAG: What Actually Works for Mental Health Text Analysis?",
    excerpt: "How Different LLM Deployment Strategies Perform in Mental Health Applications",
    date: "Dec 30, 2025",
    readingTime: "4 min",
    link: "https://groundedintelligence.hashnode.dev/fine-tuning-vs-prompt-engineering-vs-rag-what-actually-works-for-mental-health-text-analysis"
  }
];