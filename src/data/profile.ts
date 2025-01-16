export const intro = {
  firstName: "noppawat",
  lastName: "chochaipantawong",
  nickName: "gopgap",
  email: "noppawat3984@gmail.com",
  phone: "0855873984",
  linkedinUrl:
    "https://www.linkedin.com/in/noppawat-chochaipantawong-659180214",
  githubUrl: "https://github.com/Noppawat3939",
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
      "Develop and maintain internal web applications including Trade-in and Admin system using Next.js and Node.js, optimizing workflows and delivering a seamless user experience.",
      "Design and develop a member system in LINE LIFF using Next.js and Node.js, enabling seamless user interactions within the LINE platform.",
      "Revamp the company primary website, enhancing the frontend with Next.js and Node.js, enabling multi-locale support, improving SEO, and elevating user experience.",
      "Design, develop, and maintain APIs using Node.js, Sequelize, Nestjs, TypeORM and PostgreSQL for serving internal platforms and partner integrations.",
      "Integrate third-party services, including Samsung Trade-Plus and LINE Notify, ensuring seamless connectivity and functionality.",
      "Implement end-to-end (E2E) tesing for critical application workflows to ensure seamless functionality and improve overall software quality.",
      "Review code and provide feedback, promoting best practices and improving code quality across the team.",
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
