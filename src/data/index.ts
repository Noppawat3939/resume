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
        tasks: [
          "Designed and built core backoffice systems — Warehouse & Inventory Management, a multi-channel Payment & Financial System with commission engine, and partner-integration APIs — supporting operations across TH and MY.",
          "Built the customer-facing order creation flow (image annotation, model-specific photo upload) and integrated M-Pay / ShopeePay Later payment gateways, including a deposit flow that boosted campaign conversion.",
          "Built a standalone pricing widget, embedded on AIS's site (own repo, Redis-cached, partner-restricted API) — Remobie's first in-partner-site integration.",
          "Built an Apple/Google Wallet digital pass feature end-to-end, from dev setup through production certificate/signing configuration, giving customers a scannable pre-trade pass during high-demand pre-order launches.",
          "Built the Matching Order system (FIFO + rules engine) and an Order Simulator for pre-campaign load testing (10k+ orders/day), plus role-based User Management across all platforms and countries.",
          "Built an SEO-optimized customer trade-in website and a React Native (Expo) WebView app for branch staff with native↔web communication.",
          "Investigated production incidents across internal and partner-integration APIs via CloudWatch Logs/Logs Insights — including error responses on the return path and on APIs awaiting external webhook callbacks — and drove fixes with the team before production releases.",
          "Leveraged AI to clarify ambiguous requirements via stakeholder pain points and codebase tracing, draft implementation plans, and cross-check plans and test cases against requirements for full alignment — plus API specs and user manuals for delivery.",
          "Used AI to generate unit tests once requirements and design were confirmed, and to run full reviews before production delivery — reducing miscommunication and rework.",
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
