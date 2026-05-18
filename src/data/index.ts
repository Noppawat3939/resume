// Header
export const header = {
  full_name: "noppawat chochaipantawong",
  mail: "Noppawat3984@gmail.com",
  mail_to: "mailto:noppawat3984@gmail.com",
  tel_to: "tel:0855873984",
  phone: "(+66) 855873984",
  address: "bangkok, thailand",
  github_url: "https://github.com/Noppawat3939",
  github: "github.com/Noppawat3939",
  linked_in_url:
    "https://www.linkedin.com/in/noppawat-chochaipantawong-659180214",
};

export const profile = `Enthusiastic Software Engineer with hands-on experience in full-stack web development, specializing in JavaScript, React, Next.js, Node.js (Express/NestJS), and PostgreSQL.
Strong understanding of clean architecture and scalable API design.
Passionate about building reliable backend services, crafting efficient frontend experiences, and learning modern technologies and microservices architecture.`;

// Education
export const education = {
  university: "Prince of Songkla University",
  period: "Aug 2015 – May 2019",
  details: [
    "Bachelor’s Degree in Human Resource Management and Minor in Logistics Management.",
  ],
};

// Work experinces
export const works: {
  position: string;
  company: string;
  period: string;
  tasks: string[];
  hidden?: boolean;
}[] = [
  {
    position: "Software engineer",
    company: "Remobie Technologies Company Limited",
    period: "Jan 2024 - Present",
    tasks: [
      "Built and maintained the Trade-in platform (Next.js), shipping an image annotation tool that cut phone inspection time by 30%+, adding multi-country localization, and integrating M-Pay and Shopee Pay Later payment services.",
      "Redesigned and maintained the Admin system for the Trade-in platform, restructuring the codebase for scalability and building modules for inventory management, pick-up handling, and system payments with Lark API integration for authentication and data sync.",
      "Engineered backend services for Trade-in and Admin systems in a shared monorepo, developing internal and partner-facing APIs, designing databases for new features, and optimizing query performance using Node.js (Express), Sequelize, PostgreSQL, Redis, and Firebase Realtime Database.",
      "Built a back-office web application from scratch with a real-time FIFO order-to-staff matching system (Next.js + Firebase Realtime Database), automatically assigning orders to available staff and significantly reducing order handling time measured in KPI minutes per order.",
      "Delivered an end-user mobile web application for phone inspection and second-hand trade-in to support the company’s Malaysia market expansion, integrating device grading and pricing APIs with a localized, mobile-responsive experience using Next.js.",
      "Architected a Service-Center backend system from scratch using NestJS, TypeORM, and PostgreSQL, delivering APIs for repair orders, quotations, invoices, payment processing, and inventory management.",
      "Developed a Trade-in member web application on LINE LIFF (Next.js), enabling users to log in via LINE and redeem points seamlessly within the LINE ecosystem.",
      "Built and deployed a React Native (Expo) WebView mobile application as a container for Trade-in web applications, managing end-to-end releases to both Google Play Store and Apple App Store.",
      "Led API load testing during quarterly campaigns using k6 and Node.js, collaborating with DevOps to simulate high-traffic scenarios and tune database performance for peak-load stability.",
    ],
    hidden: false,
  },
  {
    position: "Frontend developer",
    company: "Magic Box Solutions",
    period: "June 2022 - Jan 2024",
    tasks: [
      "Developed cross-platform website and mobile applications using Next.js, React, and React Native.",
      "Collaborated with designers, Backend developers, QA and  Project manager teams to deliver high-quality products.",
      "Stayed up-to-date with the latest frontend technologies and trends.",
      "Actively shared frontend knowledge and best practices with team members to foster knowledge growth.",
    ],
  },
  {
    position: "Fellow (cohort 6)",
    company: "Teach For Thailand",
    period: "Aug 2019 - Nov 2021",
    tasks: [
      "Planned, prepared, and delivered engaging lesson plans that facilitated active learning.",
      "Collaborated with teachers, principals, and other staff to align on goals and support student development.",
      "Actively and enthusiastically participated in school-related events and community projects.",
      "Established and enforced classroom guidelines to manage student behavior effectively.",
      "Created and utilized a variety of educational materials for in-class activities.",
      "Marked student work, homework, and exams.",
    ],
  },
];

// Skils
export const skill = [
  "Languages: JavaScript, TypeScript, Go",
  "Frontend: React, React native, Next.js, Tailwind CSS, Ant-design",
  "Backend: Node.js, NestJS, Express, Fiber, Gin Socket.IO",
  "Databases & ORM: PostgreSQL, MongoDB, Redis, Firebase Realtime Database,TypeORM, Sequelize, Prisma, Mongoose, GORM",
  "Platforms & tools: Lark, Jira, GIT, Postman, AWS (S3), Docker, Tableplus",
  "Design: DBDiagram, DrawSQL, Canvas, Figma, Whimsical",
  "Testing: K6, Jest",
];
