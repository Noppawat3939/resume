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
  Software Engineer with ${exp} years of experience working with JavaScript and TypeScript, focused on designing and developing features, fixing issues, and delivering user-focused solutions. I’m passionate about using technology to solve real-world problems and creating products that make a meaningful impact.
  `,
};

export const technologies = {
  design: [
    { name: "Canva" },
    { name: "Whimsical" },
    { name: "Figma" },
    { name: "DrawSQL" },
    { name: "Miro" },
  ],
  language: [
    { name: "Javascript" },
    { name: "Typescript" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Less CSS" },
    { name: "Go" },
  ],
  frameworkProgramming: [
    { name: "Next.js" },
    { name: "React Native" },
    { name: "Expo" },
    { name: "Express" },
    { name: "NestJS" },
    { name: "Fiber" },
  ],
  javascriptLibrary: [{ name: "React" }, { name: "Socket.IO" }],
  cssFramework: [{ name: "Tailwind CSS" }],
  cssLibrary: [{ name: "Ant Design" }, { name: "NextUI" }],
  database: [{ name: "PostgreSQL" }, { name: "MongoDB" }, { name: "Redis" }],
  objectDataModeling: [{ name: "Mongoose" }],
  objectRelationalMapping: [
    { name: "Sequelize" },
    { name: "TypeORM" },
    { name: "Prisma" },
    { name: "GORM" },
  ],
  guiTools: [{ name: "TablePlus" }],
  container: [{ name: "Docker" }],
  others: [
    { name: "Postman" },
    { name: "GCP" },
    { name: "AWS" },
    { name: "Firebase" },
    { name: "Cloudinary" },
    { name: "Github Actions" },
    { name: "Vercel" },
  ],
};

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
  // {
  //   isFullTime: false,
  //   position: "Digital Marketing",
  //   company: "Refinn International Dot Com Co., Ltd.",
  //   companyUrl: "https://www.refinn.com",
  //   details: [
  //     "Wrote an article about home loans personal loan car loan and refinancing to support SEO.",
  //   ],
  //   periods: {
  //     start: { year: 2021, month: "Apr" },
  //     end: { year: 2021, month: "May" },
  //   },
  // },
  // {
  //   isFullTime: false,
  //   position: "Talent Acquistion",
  //   company: "Teach For Thailand",
  //   companyUrl: "https://www.teachforthailand.org",
  //   details: [
  //     "Contacted and coordinated candidate for Leadership Program (cohort 7).",
  //     "Co-created and produced marketing videos on the facebook page.",
  //   ],
  //   periods: {
  //     start: { year: 2020, month: "Mar" },
  //     end: { year: 2020, month: "May" },
  //   },
  // },
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
