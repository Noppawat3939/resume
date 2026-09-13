### Remobie Technologies Co., Ltd.

Software Engineer · Bangkok, Thailand [Jan 2024 – Present]
Remobie operates a second-hand electronics trade-in platform (TH & MY), connecting retail branches with a remote assessment team through a warehouse and payment pipeline.

##### Admin System (Backoffice — TH & MY)

- Designed and built Warehouse & Inventory Management — inbound/outbound scanning, item registration, and audit logging.
- Built the Payment & Financial System — multi-channel payouts, partner payments, and a commission engine with financial reporting for accounting.
- Developed partner-integration APIs to external specs and coordinated cross-company staging tests before production releases.

##### Trade-in Platform

- Built the order creation flow for smartphones, tablets, and computers with custom image annotation/marker and model-specific photo-upload tools.
- Integrated M-Pay and ShopeePay Later gateways (frontend + partial backend), including a deposit flow that secured transactions upfront and saw higher usage during campaigns.
- Owned a standalone widget (dedicated repo, script-tag embed) delivering real-time iPhone 18 trade-in pricing on AIS's site — built the responsive frontend and a Redis-cached, partner-restricted API, Remobie's first in-partner-site pricing integration.
- Designed and built an Apple Wallet & Google Wallet digital pass feature end-to-end — including the Pre-trade reservation flow and pass signing/certificates across all environments — giving customers a scannable in-store pass during high-demand pre-order launches (e.g., iPhone).

##### Admin-Global (Multi-country assessment platform — TH & MY)

- Built the Matching Order system (FIFO + configurable rules), automatically assigning orders to available assessors and eliminating manual selection.
- Developed User Management with role-based access control across all platforms and countries.
- Built an Order Simulator for pre-campaign training — configurable bulk order generation simulating high-traffic conditions (tens of thousands of orders/day).

##### Customer Website & Mobile App

- Built an SEO-optimized customer-facing trade-in website with self-assessment, appointment booking, and campaign trade-toward-purchase features.
- Built a React Native (Expo) WebView app for branch staff with bidirectional native↔web communication, speeding up in-store service.

##### Operations & Tooling

- Investigated production incidents (internal & partner-integration APIs) via CloudWatch Logs/Logs Insights and Postman reproduction, validating root causes with the team before shipping fixes.
- Root-caused a stuck order-status bug to a race condition — in-flight Redis consumer messages were dropped when a pod was killed mid-consumption — by correlating pod-lifecycle and consumer logs.

### Magic Box Solutions

Frontend Developer · Bangkok, Thailand [Jun 2022 – Jan 2024]
Magic Box Solutions is a Thailand-based software solutions company specializing in custom software development and resource augmentation for clients across various industries.

- Developed and maintained web and mobile applications across multiple client projects using React, Next.js, and React Native within agile sprint cycles.
- Integrated REST APIs, converted Figma designs into responsive components, and collaborated with UX/UI designers, QA engineers, PMs, and outsourced backend teams to deliver on schedule.

### Teach For Thailand

Fellow (Cohort 6) · Thailand [Aug 2019 – Nov 2021]
Teach For Thailand is a non-profit organization committed to creating equitable educational opportunities for children across Thailand.

- Two-year fellowship teaching in an underserved Thai school — planned and delivered lesson plans, managed classroom, and collaborated with teachers and the community to support student development.
