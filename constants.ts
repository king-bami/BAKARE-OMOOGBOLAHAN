import { Experience, Project, Skill } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/omogbolahan-bakare",
  github: "https://github.com/omogbolahan",
  email: "mailto:gbolahan.bakare@attenda.africa",
  portfolio: "https://omogbolahan.com" // Placeholder
};

export const RESUME_SUMMARY = `
Results-driven Senior Full Stack Developer with 5+ years of experience designing, building, and scaling web applications for startups and enterprises across Africa. Specialized in Next.js, Node.js, and Supabase, with proven expertise in cloud-native architecture, API design, and AI-powered automation. Adept at leading teams and delivering user-centered digital products from concept to production. Passionate about using technology to drive measurable business outcomes and global impact.
`;

export const EXPERIENCES: Experience[] = [
  {
    company: "Seamless Auto Part",
    role: "Lead Full Stack Engineer",
    location: "Lagos, Nigeria",
    period: "Jan 2025 – Present",
    description: [
      "Architected and developed an intelligent auto-parts marketplace (Next.js, Node.js, MongoDB) that helps users find genuine vehicle and industrial parts with AI-powered recommendations.",
      "Built a Smart Assistant API trained on user behavior to automate product categorization and in-session suggestions — increasing conversions by ~30%.",
      "Designed a real-time admin dashboard with instant CRUD updates, role-based access control, and Paystack-integrated checkout flow.",
      "Migrated the system from React to Next.js (SSR/SSG) for SEO and scalability, supporting over 2,500 active users."
    ],
    techStack: ["Next.js", "Node.js", "Express", "MongoDB", "TailwindCSS", "JWT", "Socket.IO", "Paystack API"],
    link: "https://seamlessautopart.com"
  },
  {
    company: "Attenda Africa",
    role: "Lead Full-Stack Developer: CTO / Founder",
    location: "Lagos, Nigeria",
    period: "May 2023 – Dec 2024",
    description: [
      "Led the rebuild of Attenda, a geo-attendance and facial verification platform for organizations and NYSC CDS groups.",
      "Migrated architecture from React.js + Firebase to Next.js + Supabase, improving scalability, performance, and security.",
      "Built Telegram automation for attendance, announcements, and reporting — scaling across multiple states in Nigeria.",
      "Developed AI-driven verification using Hugging Face models and location APIs to prevent spoofing and ensure authenticity.",
      "Designed analytics dashboards for attendance tracking and engagement insights using Chart.js.",
      "Successfully piloted Attenda with NYSC, achieving adoption in several CDS groups before product exit in late 2024."
    ],
    techStack: ["Next.js", "Supabase", "TailwindCSS", "Chart.js", "Telegram API", "Hugging Face API", "Edge Functions"],
    link: "https://attenda.africa"
  },
  {
    company: "Afrisata Awards",
    role: "Lead Full Stack Developer",
    location: "Nairobi, Kenya",
    period: "Jan 2024 – Apr 2024",
    description: [
      "Designed and built the Africa Sales in Technology Awards (Afrisata) platform, celebrating excellence in tech sales across Africa.",
      "Developed the voting system, admin portal, and payment integration to handle thousands of participant votes securely.",
      "Integrated role-based authentication, analytics, and live leaderboard tracking."
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Paystack API", "TailwindCSS"],
    link: "https://afrisata.com"
  },
  {
    company: "Sunrise Water Park",
    role: "Frontend Developer (Contract)",
    location: "Ogun State, Nigeria",
    period: "Apr 2023 – Jun 2023",
    description: [
      "Built a high-performance, SEO-optimized website for Sunrise Water Park to enhance brand presence and online bookings.",
      "Delivered a responsive and visually engaging UI showcasing attractions, pricing, and contact integrations."
    ],
    techStack: ["Next.js", "TailwindCSS", "Vercel"],
    link: "https://sunrisewaterpark.com"
  },
  {
    company: "Lagos State University (LASU)",
    role: "Career Break - Bachelor's Degree",
    location: "Ojo, Lagos, Nigeria",
    period: "Oct 2020 – Jun 2023",
    description: [
      "Pursued a Bachelor’s Degree in Computer Science to strengthen theoretical and technical depth.",
      "Focused on algorithms, databases, and software engineering, while building personal and open-source projects.",
      "Active in campus tech communities, mentoring peers, and leading coding initiatives."
    ],
    techStack: ["Algorithms", "Databases", "Software Engineering"]
  },
  {
    company: "Google Open Source Mentorship",
    role: "Frontend Developer (AdSense UI Team)",
    location: "Remote",
    period: "Jun 2020 – Sep 2020",
    description: [
      "Selected for the Google Open Source Mentorship Program during the COVID-19 pandemic, contributing to the AdSense UI/UX team.",
      "Collaborated with Google engineers to improve the AdSense dashboard experience for global publishers.",
      "Built reusable components with React (v16), TypeScript, and Material UI, integrating REST APIs for analytics and revenue insights.",
      "Improved load time by 20% through rendering and bundling optimization."
    ],
    techStack: ["React", "TypeScript", "Redux", "Material-UI", "Jest", "GCP"]
  },
  {
    company: "Aptech Computer Education",
    role: "Software Development Trainee",
    location: "Pune, India",
    period: "Jan 2019 – Dec 2019",
    description: [
      "Completed Certificate in Proficiency in Information Systems Management (CPISM), building a strong foundation in software development and database systems.",
      "Gained practical experience in JavaScript, C#, SQL, and system design, preparing for full-stack development roles.",
      "Developed mini projects integrating web and desktop applications."
    ],
    techStack: ["JavaScript", "C#", "SQL", "System Design"]
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Frontend Engineering",
    items: ["Next.js", "React.js", "Redux", "TypeScript", "TailwindCSS", "Framer Motion", "Material UI"],
    level: 95
  },
  {
    category: "Backend & Cloud",
    items: ["Node.js", "Express.js", "Supabase", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
    level: 85
  },
  {
    category: "AI & Automation",
    items: ["Hugging Face", "Telegram API", "Geo APIs", "Gemini API"],
    level: 80
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "Vercel", "CI/CD Pipelines"],
    level: 85
  },
  {
    category: "Soft Skills",
    items: ["Leadership", "Remote Collaboration", "Product Strategy", "Agile Development"],
    level: 90
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Omogbolahan I. Bakare's portfolio website. 
Your goal is to represent him professionally to recruiters.
He is a Senior Full Stack Developer and Founder/CTO based in Nigeria, open to remote/global roles.
Key Highlights:
- Founder of Attenda Africa (Geo-attendance app used by NYSC).
- Expert in Next.js, Supabase, and Node.js.
- Google Open Source Mentorship alumni.
- Recently built Seamless Auto Part with AI recommendations increasing conversion by 30%.
- Values: Impact-driven, Scalability, Clean Code, User Experience.

Keep answers concise, professional, and persuasive. If asked about contact, provide his email: gbolahan.bakare@attenda.africa or LinkedIn.
`;

export const STATS = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Delivered", value: "25+" },
  { label: "Users Impacted", value: "10k+" },
  { label: "Code Commits", value: "3k+" }
];

export const TESTIMONIALS = [
  {
      name: "Adewale O.",
      role: "Project Manager",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Gbolahan's leadership in building Attenda was exceptional. He translated complex government requirements into a user-friendly platform that scaled nationwide."
  },
  {
      name: "Sarah K.",
      role: "CEO, Afrisata",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The voting platform Gbolahan built handled our traffic spikes effortlessly. His attention to security and performance is top-notch."
  },
  {
      name: "Rajiv M.",
      role: "Senior Instructor",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      text: "One of the most dedicated students I've mentored. His grasp of system architecture at such an early stage was impressive."
  },
  {
      name: "Michael B.",
      role: "Lead Engineer",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      text: "Working with Gbolahan is a pleasure. He writes clean, maintainable code and always keeps the end-user experience in mind."
  },
  {
      name: "Zainab A.",
      role: "Product Owner",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "His ability to bridge the gap between technical constraints and product requirements is rare. A true asset to any team."
  },
  {
      name: "David O.",
      role: "Frontend Dev",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      text: "I learned so much just by reviewing his PRs. He has a deep understanding of React patterns and performance optimization."
  }
];