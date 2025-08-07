const startedDeveloperInYears = 2022;
const exp = new Date().getFullYear() - startedDeveloperInYears;

export const intro = {
  firstName: "noppawat",
  lastName: "chochaipantawong",
  nickName: "gopgap",
  email: "noppawat3984@gmail.com",
  phone: "0855873984",
  linkedinUrl:
    "https://www.linkedin.com/in/noppawat-chochaipantawong-659180214",
  githubUrl: "https://github.com/Noppawat3939",
  introduce: `
  Software Engineer with ${exp} years of experience working with JavaScript and TypeScript, I’m passionate about using technology to solve real-world problems and creating products that make a meaningful impact.
  `,
};

export const skills = [
  {
    label: "Programming lanuages",
    values: ["HTML", "CSS", "Javascript", "Typescript", "Go"],
  },
  {
    label: "Frameworks & Libraries (Frontend)",
    values: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Ant Design",
    ],
  },
  {
    label: "Frameworks & Libraries (Backend)",
    values: ["Express", "NestJS", "Fiber", "Socket.IO"],
  },
  { label: "Databases & Caching", values: ["PostgreSQL", "MongoDB", "Redis"] },
  {
    label: "ORMs & ODMs",
    values: ["Sequelize", "TypeORM", "Prisma", "Mongoose", "GORM"],
  },
  {
    label: "DevOps & Cloud Platforms",
    values: ["Docker", "GCP", "AWS", "Firebase", "Vercel", "Github actions"],
  },
  {
    label: "Design & Collaboration",
    values: [
      "Canva",
      "Whimsical",
      "Figma",
      "Miro",
      "DrawSQL",
      "DBDiagram.io",
      "Jira",
    ],
  },
  { label: "Tools", values: ["Postman", "TablePlus", "Google sheets"] },
];

export const workExperiences = [
  {
    isFullTime: true,
    position: "Software Engineer",
    company: "Remobie Technologies Co., Ltd.",
    companyUrl: "https://th.remobie.com",
    details: [
      "Led the design and develop backend clean achitechure for Service Order System using Nestjs, TypeORM and Postgresql.",
      "Develop and maintain Trade-in service are Trade-in and Admin for manage orders system using Next.js, Node.js (Express.js), Sequelize, Firebase (Realtime Database) and Postgresql.",
      "Design, develop and maintain company's website, improving SEO, multi-locale support and partner campaign support using Next.js",
      "Design and develop Trade-in member a LINE LIFF-based for point of member using Next.js",
      "Develop RESTful APIs for third-party services ensuring secure, stable, and seamless communication between platforms.",
      "Develop a Trade-in mobile application from a Trade-in website with Expo and publish it on both iOS and Android stores.",
      "Implement e2e testing for critical application workflows, increasing test coverage and improving overall software quality.",
      "Collaborate with DevOps teams to conduct load testing server and database using k6 before campaign lauch.",
    ],
    periods: {
      start: { year: 2024, month: "Feb" },
      end: { year: null, month: null, current: true },
    },
  },
  {
    isFullTime: true,
    position: "Frontend Developer",
    company: "Magic Box Solutions",
    companyUrl: "https://www.magicboxsolution.com",
    details: [
      "Developed cross-platform website and mobile applications using Next.js, React, and React Native.",
      "Collaborated with designers, backend developers, QA and  project manager teams to deliver high-quality products.",
      "Stayed up-to-date with the latest frontend technologies and trends.",
      "Actively shared frontend knowledge and best practices with team members to foster knowledge growth.",
    ],
    periods: {
      start: { year: 2022, month: "June" },
      end: { year: 2024, month: "Jan" },
    },
  },
  {
    isFullTime: true,
    position: "Fellow (cohort 6)",
    company: "Teach For Thailand",
    companyUrl: "https://www.teachforthailand.org",
    details: [
      "Designed and delivered classroom instruction for both traditional and online classes.",
    ],
    periods: {
      start: { year: 2019, month: "Aug" },
      end: { year: 2021, month: "Nov" },
    },
  },
];

export const projects = [
  {
    name: "HEIC image convert service",
    description: "API service for convert heic image url to png or jpeg",
    stacks: { server: ["Express"] },
    repository: {
      server: "https://github.com/Noppawat3939/heic-image-service",
    },
  },
  {
    name: "Job search",
    description: "Search and apply jobs",
    stacks: {
      client: ["Next.js", "TanStack Query", "Tailwind CSS", "Zustand"],
      server: [
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "NodeMailer",
        "Firebase",
        "Docker",
      ],
    },
    repository: {
      client: "https://github.com/Noppawat3939/job-frontend",
      server: "https://github.com/Noppawat3939/job-backend",
    },
  },
  {
    name: "JSON generator",
    description:
      "Generate fake JSON data and convert typescript interfaces from JSON.",
    repository: { client: "https://github.com/Noppawat3939/json-generator" },
    url: "https://json-generator-dev.vercel.app",
  },
];

export const language = [
  {
    name: "Thai",
    details: ["speaking (fluient)", "writing (fluient)"],
  },
  {
    name: "English",
    details: ["speaking (intermidiate)", "writing (intermidiate)"],
  },
];

export const educations = [
  {
    graduate: "Bachelor degree of Human Management Resources",
    university: "Prince of Songkla University",
    periods: {
      start: { year: 2015, month: "Aug" },
      end: { year: 2019, month: "May" },
    },
  },
];
