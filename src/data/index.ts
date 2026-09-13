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
          "Designed and built Warehouse & Inventory Management — inbound/outbound scanning, item registration, and audit logging.",
          "Built the Payment & Financial System — multi-channel payouts, partner payments, and a commission engine with financial reporting for accounting.",
          "Developed partner-integration APIs to external specs and coordinated cross-company staging tests before production releases.",
        ],
      },
      {
        title: "Trade-in Platform",
        tasks: [
          "Built the order creation flow for smartphones, tablets, and computers with custom image annotation/marker and model-specific photo-upload tools.",
          "Integrated M-Pay and ShopeePay Later gateways (frontend + partial backend), including a deposit flow that secured transactions upfront and saw higher usage during campaigns.",
          "Owned a standalone widget (dedicated repo, script-tag embed) delivering real-time iPhone 18 trade-in pricing on AIS's site — built the responsive frontend and a Redis-cached, partner-restricted API, Remobie's first in-partner-site pricing integration.",
          "Designed and built an Apple Wallet & Google Wallet digital pass feature end-to-end — including the Pre-trade reservation flow and pass signing/certificates across all environments — giving customers a scannable in-store pass during high-demand pre-order launches (e.g., iPhone).",
        ],
      },
      {
        title: "Admin-Global (Multi-country assessment platform — TH & MY)",
        tasks: [
          "Built the Matching Order system (FIFO + configurable rules), automatically assigning orders to available assessors and eliminating manual selection.",
          "Developed User Management with role-based access control across all platforms and countries.",
          "Built an Order Simulator for pre-campaign training — configurable bulk order generation simulating high-traffic conditions (tens of thousands of orders/day).",
        ],
      },
      {
        title: "Customer Website & Mobile App",
        tasks: [
          "Built an SEO-optimized customer-facing trade-in website with self-assessment, appointment booking, and campaign trade-toward-purchase features.",
          "Built a React Native (Expo) WebView app for branch staff with bidirectional native↔web communication, speeding up in-store service.",
        ],
      },
      {
        title: "Operations & Tooling",
        tasks: [
          "Investigated production incidents (internal & partner-integration APIs) via CloudWatch Logs/Logs Insights and Postman reproduction, validating root causes with the team before shipping fixes.",
          "Root-caused a stuck order-status bug to a race condition — in-flight Redis consumer messages were dropped when a pod was killed mid-consumption — by correlating pod-lifecycle and consumer logs.",
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
  "Platforms & tools: Lark, Jira, Git, Postman, AWS, Docker, TablePlus, Obsidian",
  "Design: DBDiagram, DrawSQL, Figma, Whimsical, Canvas",
  "Testing: Playwright, Jest, K6",
  "AI Tools: Claude, ChatGPT, Gemini",
];
