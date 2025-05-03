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
  Software Engineer with ${
    new Date().getFullYear() - 2022
  } years of experience, specializing in frontend development using Next.js, React, and TypeScript. Proficient in creating intuitive user interfaces and seamless experiences across web and mobile platforms. Currently expanding backend expertise with NestJS, Node.js, and PostgreSQL to build scalable, full-featured applications. Seeking a role to grow as a well-rounded engineer and contribute to impactful products.
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
  ],
  frameworkProgramming: [
    { name: "Next.js" },
    { name: "React Native" },
    { name: "Expo" },
    { name: "Express" },
    { name: "NestJS" },
  ],
  javascriptLibrary: [{ name: "React" }, { name: "Socket.IO" }],
  cssFramework: [{ name: "Tailwind CSS" }],
  cssLibrary: [{ name: "Ant Design" }, { name: "NextUI" }],
  database: [
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "MySQL" },
    { name: "Redis" },
  ],
  objectDataModeling: [{ name: "Mongoose" }],
  objectRelationalMapping: [
    { name: "Sequelize" },
    { name: "TypeORM" },
    { name: "Prisma" },
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
    companyUrl: "https://www.remobie.com",
    details: [
      "Design and implement backend architecture for a Service-Center System, using NestJS, TypeORM, and PostgreSQL to deliver scalable and maintainable services.",
      "Develop and maintain website applications, including the Trade-in and Admin System, using Next.js, Node.js, Sequelize, Firebase (Realtime DB) and PostgreSQL.",
      "Design and implement a LINE LIFF-based Member System using Next.js and Node.js, enabling smooth user authentication and interaction directly within the LINE platform.",
      "Revampe the company’s primary website, improving SEO, multi-locale support, and overall performance using Next.js and Node.js.",
      "Integrate third-party services, including Samsung Trade-Plus and LINE Notify, ensuring secure, stable, and seamless communication between platforms.",
      "Implement E2E testing for critical application workflows, increasing test coverage and improving overall software quality.",
      "Collaborate with DevOps teams to conduct load testing using k6, identifying and addressing performance bottlenecks under stress.",
      "Conduct code reviews and mentorship, promoting clean code practices and maintaining code quality across the team.",
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
    name: "Job",
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
    name: "JSON Generator",
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
