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
      "Remobie operates a second-hand electronics trade-in platform (TH & MY), connecting retail branches with a remote assessment team through a warehouse and payment pipeline.",
    sections: [
      {
        title: "Admin System (Backoffice — TH & MY)",
        tasks: [
          "Designed and built end-to-end Warehouse & Inventory Management — inbound/outbound scanning, item registration, and full audit logging.",
          "Built the Payment & Financial System supporting multi-channel customer payouts, partner payments, and a commission calculation engine with financial reporting for the accounting team.",
          "Developed partner-integration APIs following external specifications, and coordinated cross-company staging tests prior to production releases.",
        ],
      },
      {
        title: "Trade-in Platform (Branch-facing)",
        tasks: [
          "Developed order creation flow for multiple device types (smartphones, tablets, computers) with custom features — image annotation & marker tool and model-specific photo upload.",
          "Integrated M-Pay and ShopeePay Later payment gateways across frontend and partial backend, including a deposit flow that secured transactions upfront and saw significantly higher usage during campaign periods.",
        ],
      },
      {
        title: "Admin-Global (Multi-country assessment platform — TH & MY)",
        tasks: [
          "Built the Matching Order system (FIFO + configurable business rules) that automatically assigns orders to available assessors, eliminating manual order selection.",
          "Developed User Management with role-based access control across all platforms and countries.",
          "Built an Order Simulator for pre-campaign staff training — configurable bulk order generation to realistically simulate high-traffic conditions (tens of thousands of orders/day).",
        ],
      },
      {
        title: "Customer Website & Mobile App",
        tasks: [
          "Built an SEO-optimized customer-facing trade-in website with self-assessment, appointment booking, and campaign trade-toward-purchase features.",
          "Built a React Native (Expo) WebView mobile application for branch staff with bidirectional native↔web communication to speed up in-store customer service.",
        ],
      },
      {
        title: "Operations & Tooling",
        tasks: [
          "Embedded AI tools across the full development lifecycle — requirements grooming, planning, documentation, acceptance criteria, test cases, and code review.",
          "Investigated production issues using AWS CloudWatch logs to identify root causes and support incident resolution.",
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
      "Magic Box Solutions is a Thailand-based software solutions company specializing in custom software development and resource augmentation for clients across various industries.",
    sections: [
      {
        tasks: [
          "Developed and maintained web and mobile applications across multiple client projects using React, Next.js, and React Native within agile sprint cycles.",
          "Integrated REST APIs, converted Figma designs into responsive components, and collaborated with UX/UI designers, QA engineers, PMs, and outsourced backend teams to deliver on schedule.",
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
          "Two-year fellowship teaching in an underserved Thai school — planned and delivered lesson plans, managed classroom, and collaborated with teachers and the community to support student development.",
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
  "Testing: Playwright, Jest, K6",
  "AI Tools: Claude, ChatGPT, Gemini",
];
