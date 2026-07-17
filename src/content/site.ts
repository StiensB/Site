export type NavItem = {
  label: string;
  href: string;
};

export type HeroHighlight = {
  value: string;
  label: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  stack: string[];
  impact: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ProjectItem = {
  title: string;
  eyebrow: string;
  challenge: string;
  role: string;
  architecture: string;
  outcome: string;
  stack: string[];
  featured?: boolean;
};

export type HobbyItem = {
  title: string;
  description: string;
  accent: "blue" | "amber" | "violet";
};

export const siteContent = {
  nav: [
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Off the Keyboard", href: "#off-the-keyboard" },
  ] satisfies NavItem[],
  hero: {
    name: "Bray Stiens",
    title: "Senior Software Engineer",
    summary:
      "I design and deliver resilient cloud-native platforms across .NET/C# backend systems, distributed architecture, and modern React/Next.js experiences with strong product ownership from concept through production.",
    image: {
      src: "/images/bray-stiens-headshot.jpg",
      alt: "Headshot of Bray Stiens",
    },
    highlights: [
      { value: "7+ Years", label: "Shipping enterprise software" },
      { value: "Azure + GCP", label: "Cloud platform depth" },
      { value: "End-to-End", label: "Infra, APIs, BFF, and UI" },
    ] satisfies HeroHighlight[],
    primaryCtas: [
      { label: "View Experience", href: "#experience" },
      { label: "Explore Projects", href: "#projects" },
    ] satisfies NavItem[],
    secondaryCtas: [
      { label: "Email", href: "mailto:bray.stiens@gmail.com" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/bray-stiens-92438914a/",
      },
      { label: "Resume", href: "/resume" },
    ] satisfies NavItem[],
    location: "Based in Cincinnati · Building resilient systems with strong product ownership",
  },
  profile:
    "Senior Software Engineer with deep experience across cloud-native platforms, microservice architectures, distributed messaging, and modern frontend delivery. I thrive in high-ownership environments where strong engineering craft, architectural clarity, and measurable product outcomes matter.",
  experience: [
    {
      company: "ConstructConnect",
      role: "Tech Lead (Software Engineer II)",
      period: "2024 — Present",
      summary:
        "Own the architecture and delivery of a market analytics add-on spanning infrastructure, backend APIs, a secure Next.js BFF, and a React experience for embedded analytics.",
      stack: [
        ".NET",
        "Next.js",
        "React",
        "GCP Identity Platform",
        "Looker",
        "LaunchDarkly",
      ],
      impact: [
        "Architected a near-launch analytics product across all four layers of a microservices platform, driving true end-to-end technical ownership.",
        "Built a secure orchestration layer for Looker SSO embed URL signing, authentication, theming, and structured observability.",
        "Delivered configuration-driven dashboard routing with feature-flag gating, lifecycle state management, and CSRF protection.",
      ],
    },
    {
      company: "Insight Enterprises · Werner Enterprises Client",
      role: "Senior Software Engineer",
      period: "2022 — 2024",
      summary:
        "Led critical migration workstreams moving shipment and equipment management systems to a scalable Azure-native platform for one of North America's largest trucking companies.",
      stack: [
        "Azure Functions",
        "Cosmos DB",
        "Azure Service Bus",
        "GitHub Actions",
        "Pulumi",
      ],
      impact: [
        "Delivered cloud migration work that improved performance by roughly 25% while reducing infrastructure cost by 10–30%.",
        "Owned multiple REST API workstreams that became critical-path dependencies for a new TMS platform launch.",
        "Replaced manual releases with GitHub Actions and Pulumi-based CI/CD for consistent infrastructure provisioning.",
      ],
    },
    {
      company: "Insight Enterprises · Paychex Client",
      role: "Software Engineer",
      period: "2021 — 2022",
      summary:
        "Built customer-facing cloud software focused on faster self-service access to information and reduced support burden.",
      stack: [
        ".NET",
        "C#",
        "Angular",
        "Azure Chatbot Service",
      ],
      impact: [
        "Created an Azure Chatbot Service integration with Live Agent Conversation that reduced call center inquiries by 68%.",
        "Developed an end-to-end .NET/C# and Angular application for consumer-facing information delivery.",
      ],
    },
    {
      company: "Great American Insurance",
      role: "Quality Engineer",
      period: "2017 — 2021",
      summary:
        "Established automation foundations that improved release confidence and shortened QA feedback loops.",
      stack: ["Groovy", "Selenium", "Jenkins", "CI/CD"],
      impact: [
        "Built and maintained a Groovy and Selenium based automation framework for regression coverage.",
        "Integrated automated suites into Jenkins-driven delivery pipelines to reduce manual QA overhead.",
      ],
    },
  ] satisfies ExperienceItem[],
  skills: [
    {
      title: "Cloud Platforms",
      items: ["Azure Functions", "Azure Service Bus", "Cosmos DB", "GCP Cloud Run", "BigQuery"],
    },
    {
      title: "Backend & APIs",
      items: ["C#", ".NET 8", ".NET Core", "REST APIs", "BFF orchestration", "Identity propagation"],
    },
    {
      title: "Frontend & UX Delivery",
      items: ["React", "Next.js", "TypeScript", "HTML/CSS", "Feature-flagged UI delivery"],
    },
    {
      title: "Architecture & Distributed Systems",
      items: ["Microservices", "Event-driven design", "Cloud-native patterns", "Stateful orchestration"],
    },
    {
      title: "Data & Analytics",
      items: ["ElasticSearch", "Looker", "Entity Framework", "SQL / KQL", "Embedded analytics"],
    },
    {
      title: "DevEx / CI/CD / IaC",
      items: ["GitHub Actions", "Pulumi", "Terraform", "Postman", "GitHub Copilot", "Claude Code"],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      title: "Embedded Analytics Platform",
      eyebrow: "ConstructConnect",
      challenge:
        "Launch a premium analytics add-on that securely embedded BI dashboards into a customer-facing SaaS experience.",
      role: "Tech lead across infrastructure, backend APIs, Next.js BFF orchestration, and React UI delivery.",
      architecture:
        "Configuration-driven React routing, secure SSO embed signing, GCP identity integration, and observable request pipelines.",
      outcome:
        "Delivered a production-grade embedded analytics experience with strong security boundaries, rollout controls, and end-to-end ownership.",
      stack: ["Next.js", "React", "Looker", "GCP", "LaunchDarkly"],
      featured: true,
    },
    {
      title: "Azure Logistics Migration",
      eyebrow: "Werner Enterprises",
      challenge:
        "Modernize legacy shipment and equipment management systems for higher scale, lower cost, and faster delivery.",
      role: "Senior engineer responsible for migration workstreams, APIs, and platform delivery on the critical path.",
      architecture:
        "Azure Functions, Cosmos DB, Azure Service Bus, and infrastructure automation through GitHub Actions and Pulumi.",
      outcome:
        "Improved system performance by roughly 25% and reduced cloud infrastructure costs by 10–30% while supporting a major TMS launch.",
      stack: ["Azure", "Cosmos DB", "Service Bus", "Pulumi", "GitHub Actions"],
    },
    {
      title: "ElasticSearch Lead Search API",
      eyebrow: "ConstructConnect",
      challenge:
        "Provide fast, reliable customer-facing search across project and company lead data at meaningful daily scale.",
      role: "Backend engineer owning API delivery, cloud deployment, and production reliability.",
      architecture:
        "Containerized .NET API deployed on GCP Cloud Run with ElasticSearch-backed query handling.",
      outcome:
        "Served roughly 1K–10K daily queries and expanded high-performance search capabilities across enterprise applications.",
      stack: [".NET", "ElasticSearch", "GCP Cloud Run", "Containers"],
    },
  ] satisfies ProjectItem[],
  hobbies: [
    {
      title: "Kayak Fly Fishing",
      description:
        "Former fly fishing guide who still spends time on local water chasing the next catch — a practice that mirrors patience, preparation, and reading complex systems in motion.",
      accent: "blue",
    },
    {
      title: "Backyard Smoking",
      description:
        "Low-and-slow cooks are another outlet for process discipline: small inputs, long feedback loops, and consistency that only shows up when every detail compounds correctly.",
      accent: "amber",
    },
    {
      title: "Indie 3D Game Development",
      description:
        "Building a top-down arena space shooter in Godot gives me space to explore gameplay systems, iteration loops, and creative technical problem solving outside of work.",
      accent: "violet",
    },
  ] satisfies HobbyItem[],
  education: {
    school: "Xavier University",
    period: "2015 — 2019",
    details: "B.S. in Computer Science · Minor in Jewish Studies",
  },
  footer: {
    email: "bray.stiens@gmail.com",
    github: "https://github.com/StiensB",
    linkedin: "https://www.linkedin.com/in/bray-stiens-92438914a/",
    closing: "Built with Next.js, shaped by cloud-native systems thinking, and grounded in engineering craft.",
  },
} as const;
