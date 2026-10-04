// Logos are imported (not written as "/logos/…" paths) so Next adds the site's basePath to their URLs.
// Without that, the GitHub Pages site (served under /resume) asks for /logos/… and gets a 404.
import magicBoxLogo from "~/assets/logos/magic-box-solutions.png";
import remobieLogo from "~/assets/logos/remobie.svg";
import teachForThailandLogo from "~/assets/logos/teach-for-thailand.svg";

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
  major: "Human Resource Management",
  period: "Aug 2015 – May 2019",
  details: [
    "Bachelor’s Degree in Human Resource Management and Minor in Logistics Management.",
  ],
};

// Work experiences
export const works: {
  position: string;
  company: string;
  shortName?: string;
  logo?: { src: string; width: number; height: number };
  /** which side of the career pivot this role sits on (default "tech") */
  track?: "people" | "tech";
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
    shortName: "Remobie",
    logo: remobieLogo,
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
    shortName: "Magic Box",
    logo: magicBoxLogo,
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
    shortName: "Teach For Thailand",
    track: "people",
    logo: teachForThailandLogo,
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

// /me page — hero, showcase and contact copy (source of truth: src/draft/readme.md)
export const hero = {
  lead: "I design, build and ship",
  words: ["systems.", "websites.", "mobile apps."],
  // a short version of `profile` (used by the print CV at "/"); no employer named, since Experiences covers that
  summary: {
    strong: "Self-taught software engineer",
    rest: " from an HR background — React, Next.js and Node.js across frontend, backend and mobile.",
  },
  proof: {
    years: "years shipping software",
    platforms: { value: "3", label: "platforms: web, mobile, backend" },
    logos: "Worked at",
  },
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "Jun 2022" → a month count, so two dates can be subtracted */
export const monthIndex = (date: string) => {
  const [m, y] = date.split(" ");
  return Number(y) * 12 + MONTHS.indexOf(m);
};

// the hero's "years" figure counts from the first non-people job in `works`
export const techStart = works
  .filter((w) => w.track !== "people")
  .map((w) => w.startDate)
  .sort((a, b) => monthIndex(a) - monthIndex(b))[0];

export const showcase: {
  key: string;
  title: string;
  from: string;
  project: string;
  description: string;
  sketch: SketchName;
  alt: string;
}[] = [
  {
    key: "design",
    title: "Design",
    from: "How I start",
    project: "Data first, screens second",
    description: "Systems, data models and interfaces, planned before the first line of code.",
    sketch: "model",
    alt: "ER diagram of a small shop: customers have many orders, each order has many order items, and each item points to a product. Notes: one order has many items; status is a tiny state machine.",
  },
  {
    key: "website",
    title: "Websites",
    from: "How I build",
    project: "Made to be found",
    description: "Search-friendly websites, taken from design all the way to launch.",
    sketch: "page",
    alt: "Wireframe of a web page: logo and menu, a clear headline with one call-to-action button, and a row of three content cards. Notes: real headings and real text, one clear action, sections that scan.",
  },
  {
    key: "mobile",
    title: "Mobile apps",
    from: "Who I build for",
    project: "Customers and staff",
    description: "Mobile apps for customers and for the staff who serve them.",
    sketch: "app",
    alt: "Wireframe of a phone app: a Customer / Staff switch, a list of three items and a bottom tab bar. Notes: two audiences with one design, loading, empty and error states drawn too, thumb-reach navigation.",
  },
];

export const contact = {
  title: "Let's talk.",
};

// the moment the path changes from people-focused work to software
export const journey = {
  pivotLabel: "Self-taught → Tech",
};

// /me "How I design" strip — sketches redrawn from real work (no client data) and open-source side projects.
//
// TO ADD A PROJECT: append an item to a group below (or add a group). Only title, kind and caption are required.
//   picture, pick one:  sketch: "<name>"  → hand-drawn diagram, add its name to SketchName and draw it in
//                                           ~/components/me/design-sketches.tsx
//                       image: {...}      → a screenshot / exported diagram placed in /public
//                       (neither)         → a text-only card
//   repo + stack        → adds the "View code" button and the stack line
// Cards sit two to a row and flow down by themselves; keep `alt` describing what the picture shows.
export type SketchName = "model" | "page" | "app" | "lock" | "fsm";

export type DesignItem = {
  title: string;
  kind: "System design" | "UI design";
  caption: string;
  tag?: string;
  alt?: string;
  sketch?: SketchName;
  image?: { src: string; width: number; height: number };
  stack?: string;
  repo?: string;
};

type DesignGroup = { label: string; items: DesignItem[] };

export const designWork: { title: string; groups: DesignGroup[] } = {
  title: "How I design",
  groups: [
    {
      label: "Side projects · open source",
      items: [
        {
          sketch: "lock",
          kind: "System design",
          tag: "Concurrency",
          title: "Movie check-in service",
          caption:
            "Seat booking that stays correct when two people tap the same seat at once.",
          stack: "Go · Gin · PostgreSQL · Redis",
          repo: "https://github.com/noppawat3939/movie-check-in-service",
          alt: "Flow of POST /reservations with three guards against double booking: a Redis SETNX lock per seat, a PostgreSQL SELECT FOR UPDATE row lock, and a unique index on showtime and seat; each guard returns 409 on conflict. On success: commit, release the lock, 201 Created.",
        },
        {
          sketch: "fsm",
          kind: "System design",
          tag: "Payments",
          title: "Card payment service",
          caption:
            "Authorize → capture → refund, with idempotency keys so a retry never charges twice.",
          stack: "Go · PostgreSQL · Redis",
          repo: "https://github.com/noppawat3939/card-payment-service",
          alt: "Payment state machine: pending to authorized to captured to refunded; pending can go straight to captured by direct charge, or to failed; authorized can be voided. An idempotency key makes a retry return the stored response instead of charging twice.",
        },
      ],
    },
  ],
};
