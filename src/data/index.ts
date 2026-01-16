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
  degree: "Bachelor’s Degree in Human Resource Management",
  minor: "Minor in Logistics Management",
  university: "Prince of Songkla University",
  period: "Aug 2015 – May 2019",
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
      "Developed core features for the company’s Trade-in platform, including an image annotation tool that reduced phone inspection time by over 30%, implementing localization support for multi-country usage, and building a deposit feature integrated with payment services such as M-Pay and Shopee Pay Later, using Next.js.",
      "Developed and maintained the Admin system for the Trade-in platform, redesigning the project structure to support scalability and reusable features, developing modules such as inventory management for trade-in orders, pick-up handling, and system payments, integrating Lark APIs for authentication and data synchronization, and continuously maintaining the system through bug fixes and new feature development.",
      "Developed backend services for both Trade-in and Admin systems, contributing to a shared backend monorepo that supports multiple frontend applications by developing internal and partner-facing APIs based on defined API specifications, designing databases for new features, optimizing queries for improved performance, and implementing selected end-to-end features such as the deposit workflow, using Node.js (Express), Sequelize, PostgreSQL, Redis, and Firebase Realtime Database.",
      "Developed a Service-Center backend system from scratch and delivered phase 1 within 2 months, building APIs for repair orders, quotations, invoices, receive payments, and inventory using NestJS, TypeORM, and PostgreSQL.",
      "Developed the Admin Global back-office web application from scratch, implementing a real-time FIFO-based order–staff matching system that automatically assigns unassigned orders to available bidder team members, significantly reducing order handling time and improving KPI performance measured in minutes per order, using Next.js and Firebase Realtime Database.",
      "Developed a customer-facing web application for mobile phone inspection and second-hand trade-in, supporting the company’s expansion into the Malaysia market by integrating device grading and pricing APIs, enabling localized and mobile-responsive experiences to attract new trade-in customers, using Next.js.",
      "Developed a member-facing trade-in web application on LINE LIFF, focusing on the frontend to enable users to log in via LINE and redeem points seamlessly within the LINE ecosystem, using Next.js integrated with LINE LIFF.",
      "Implemented API load testing during quarterly company campaigns, collaborating with DevOps to simulate high-traffic scenarios using k6 and Node.js, and tuning database performance to ensure system stability and reliability under peak loads.",
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
  "Languages: JavaScript, TypeScript, Go, SQL",
  "Frontend: React, React native, Next.js, Tailwind CSS, Ant-design",
  "Backend: Node.js, NestJS, Express, Fiber, Gin Socket.IO",
  "Databases & ORM: PostgreSQL, MongoDB, Redis, Firebase Realtime Database,TypeORM, Sequelize, Prisma, Mongoose, GORM",
  "Design: DBDiagram, DrawSQL, Canvas, Figma, Whimsical",
  "Testing: K6, Jest",
  "Platforms & tools: Jira, GIT, Postman, AWS (S3), Google Cloud Platform, Docker, Tableplus",
];
