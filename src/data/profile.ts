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
    hide: !true,
    isFullTime: true,
    position: "Software Engineer",
    company: "Remobie Technologies Co., Ltd.",
    companyUrl: "https://www.remobie.com",
    details: [
      "Design, develop and maintain core website and mobile applications using Next.js, Node.js and Expo, managing over 100k orders for stores, staffs and end-users.",
      "Develop API services for partners.",
      "Integrate 3rd-party services: Samsung Trade-Plus, Line Notifify.",
      "Help review code and suggest best practices to improve it.",
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
    position: "Fellow",
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
  {
    isFullTime: false,
    position: "Digital Marketing",
    company: "Refinn International Dot Com Co., Ltd.",
    companyUrl: "https://www.refinn.com",
    details: [
      "Wrote an article about home loans personal loan car loan and refinancing to support SEO.",
    ],
    periods: {
      start: { year: 2021, month: "Apr" },
      end: { year: 2021, month: "May" },
    },
  },
  {
    isFullTime: false,
    position: "Talent Acquistion",
    company: "Teach For Thailand",
    companyUrl: "https://www.teachforthailand.org",
    details: [
      "Contacted and coordinated Teach for Thailand Leadership Program (Fellow cohort7) applications with the candidate selection team.",
      "Co-created and produced marketing videos on the Teach for Thailand Facebook page, to recruit teachers to the campaign.",
    ],
    periods: {
      start: { year: 2020, month: "Mar" },
      end: { year: 2020, month: "May" },
    },
  },
];

export const projects = [
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
