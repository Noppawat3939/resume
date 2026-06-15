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

export const profile = `Software Engineer with a background in Human Resources Management who transitioned into tech through self-learning. Experienced across frontend, backend, and mobile development, specializing in React, Next.js, and Node.js (Express/NestJS). Focused on scalable system design and clean architecture.`;

// Education
export const education = {
  university: "Prince of Songkla University",
  period: "Aug 2015 – May 2019",
  details: [
    "Bachelor’s Degree in Human Resource Management and Minor in Logistics Management.",
  ],
};

// Work experiences
export const works: {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description?: string;
  sections: {
    title?: string;
    tasks: string[];
  }[];
  hidden?: boolean;
}[] = [
  {
    position: "Software Engineer",
    company: "Remobie Technologies Co., Ltd.",
    location: "Bangkok, Thailand",
    startDate: "Jan 2024",
    endDate: null,
    description:
      "Remobie operates a second-hand electronics trade-in platform connecting retail branches with an internal assessment team. Orders are created by branches, graded remotely, then fulfilled through a warehouse and payment pipeline.",
    sections: [
      {
        title: "Admin System (Backoffice — TH & MY)",
        tasks: [
          "Designed and built a Warehouse & Inventory Management system end-to-end, covering inbound/outbound scanning, item registration, and full audit logging.",
          "Built the Payment & Financial System supporting multi-channel customer payouts, partner payments, and a commission calculation engine with financial reporting for the accounting team.",
          "Developed partner-integration APIs following external partner specifications, and coordinated cross-company testing on staging environments prior to production releases.",
          "Investigated production issues using AWS CloudWatch logs to identify root causes and support incident resolution.",
        ],
      },
      {
        title: "Trade-in Platform (Branch-facing)",
        tasks: [
          "Developed the order creation flow supporting multiple trade-in types (smartphones, tablets, computers), with the primary focus on mobile devices.",
          "Built custom frontend features including an image annotation & marker tool and a device model-specific photo upload system to capture device condition accurately at point of trade.",
          "Made occasional contributions to the grading & pricing system — UI adjustments and pricing logic fixes.",
          "Integrated payment gateway services across frontend and partial backend for two partners — M-Pay and ShopeePay Later — including a deposit feature that secured transactions upfront and saw significantly higher usage during campaign periods.",
        ],
      },
      {
        title: "Admin-Global (Multi-country assessment platform — TH & MY)",
        tasks: [
          "Developed User Management — account creation, editing, and role-based access control across all platforms and countries.",
          "Built the Matching Order system — automatically assigns newly created trade-in orders to available assessors using FIFO logic combined with configurable business rules, eliminating manual order selection.",
          "Developed an Order Simulator tool used for pre-campaign staff training — allows configurable bulk order generation (type, quantity, and per-order timing) to realistically simulate high-traffic campaign conditions (tens of thousands of orders per day).",
          "Maintained and extended platform features during major campaign periods tied to new smartphone launches.",
        ],
      },
      {
        tasks: [
          "Part of a team-wide initiative to embed AI tools across all projects, applying them throughout the full development lifecycle — from requirements grooming and planning to documentation, acceptance criteria, test cases, and code review.",
        ],
      },
      {
        title: "Remobie Website (Customer-facing)",
        tasks: [
          "Built a customer-facing trade-in website with SEO-optimized phone model search, enabling end users to self-assess device condition and check preliminary trade-in prices before visiting a branch.",
          "Developed an appointment booking flow that routes confirmed customers directly into the Admin system for seamless handoff to the operations team.",
          "Implemented campaign-period features enabling customers to trade in their current device toward a new model purchase directly on the website.",
        ],
      },
      {
        title: "Remobie Order System — Mobile Application (React Native · Expo)",
        tasks: [
          "Built a React Native (Expo) WebView mobile application wrapping the Trade-in Platform, deployed to branch staff to speed up in-store customer service without relying on a browser.",
          "Engineered bidirectional communication between the native app shell and the embedded web app, ensuring smooth feature interactions and reliable data handoff across the app boundary.",
        ],
      },
    ],
    hidden: false,
  },
  {
    position: "Frontend Developer",
    company: "Magic Box Solutions",
    location: "Bangkok, Thailand",
    startDate: "Jun 2022",
    endDate: "Jan 2024",
    description:
      "Magic Box Solutions is a Thailand-based software solutions company with over 10 years of experience, specializing in custom software development, technology consulting, and resource augmentation for clients across various industries.",
    sections: [
      {
        tasks: [
          "Developed and maintained web and mobile applications across multiple client projects using React, Next.js, and React Native within agile sprint cycles.",
          "Integrated REST APIs independently and converted Figma designs into responsive components, covering both feature development and bug fixing.",
          "Collaborated with UX/UI designers, QA engineers, PMs, and outsourced backend teams to deliver client requirements on schedule.",
        ],
      },
    ],
  },
  {
    position: "Fellow (Cohort 6)",
    company: "Teach For Thailand",
    location: "Thailand",
    startDate: "Aug 2019",
    endDate: "Nov 2021",
    description:
      "Teach For Thailand is a non-profit organization committed to creating equitable educational opportunities for children across Thailand, recruiting and developing leaders through a Change-Making Leadership Fellowship program that has impacted over 161,000 students across 21 provinces.",
    sections: [
      {
        tasks: [
          "Planned, prepared, and delivered engaging lesson plans that facilitated active learning.",
          "Collaborated with teachers, principals, and other staff to align on goals and support student development.",
          "Actively and enthusiastically participated in school-related events and community projects.",
          "Established and enforced classroom guidelines to manage student behavior effectively.",
          "Created and utilized a variety of educational materials for in-class activities.",
          "Marked student work, homework, and exams.",
        ],
      },
    ],
  },
];

// Skills
export const skill = [
  "Languages: JavaScript, TypeScript",
  "Frontend: React, React Native, Next.js, Tailwind CSS, Ant Design",
  "Backend: Node.js, NestJS, Express, Socket.IO",
  "Databases & ORM: PostgreSQL, Redis, Firebase Realtime Database, TypeORM, Sequelize, Prisma",
  "Platforms & tools: Lark, Jira, Git, Postman, AWS (S3, CloudWatch), Docker, TablePlus, Obsidian",
  "Design: DBDiagram, DrawSQL, Figma, Whimsical, Canvas",
  "Testing: K6, Jest",
  "AI Tools: Claude, ChatGPT, Gemini",
];
