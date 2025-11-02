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
      "Develop and maintain Service Center and Trade-In web services, covering frontend, backend, and database.",
      "Design and implement backend APIs, database schemas, and real-time features (NestJS, Express, PostgreSQL, TypeORM, Sequelize, Firebase).",
      "Maintain and enhance Trade-In admin and order management systems (Next.js, Ant Design) with mobile support.",
      "Integrate third-party APIs and multiple payment gateways (M-Pay, Shopee Pay Later).",
      "Lead website redesign and localization, improving user experience for new markets.",
      "Conduct load testing during campaign periods and collaborate with DevOps.",
      "Gather requirements, design feature flows, and implement documentation for team knowledge sharing.",
      "Ensure system reliability, bug fixing, and code quality improvements across all projects.",
    ],
    hidden: !false,
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
  "Platforms & tools: Jira, GIT, Postman, AWS (S3), Google Cloud Platform, Docker, Tableplus",
  "Design: DBDiagram, DrawSQL, Canvas, Figma, Whimsical",
  "Testing: K6, Jest",
];
