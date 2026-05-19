export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  profileImage: string;
  blogUrl?: string;
  social: SocialLink[];
  skills: Record<string, string[]>;
  experience: Experience[];
  education: Education[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "Bob Martin",
  role: "Senior Software Engineer",
  about:
    "I’m a Senior Full Stack Developer with experience building scalable web applications, cloud-native systems, and enterprise platforms across healthcare, fintech, retail, and banking industries. I specialize in modern JavaScript ecosystems including React, Next.js, Node.js, TypeScript, and cloud technologies like AWS and Docker.",
  profileImage: "/images/portfolio.png",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/bobmartin115",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/ramartin",
      icon: "Linkedin",
    },
  ],
  skills: {
    Languages: [
      "JavaScript (ES5–ES6+)",
      "TypeScript",
      "Python (Flask APIs, GenAI backend work)",
      "PHP (Laravel, WordPress)",
      "SQL (Oracle, SQL Server)",
      "C# (.NET, ASP.NET MVC, Web API)",
    ],
    Frontend: [
      "HTML5 / CSS3",
      "Bootstrap / MDB / responsive frameworks",
      "jQuery / AJAX",
      "React.js (Redux, hooks, reusable components)",
      "SASS / LESS (CSS preprocessors)",
      "Angular (2 → 8) (core strength, migrations, components, services)",
      "Next.js (SSR, static sites, performance optimization)",
      "Vue.js (basic familiarity)",
    ],
    Backend: [
      "Node.js / Express.js",
      "Spring / Spring Boot",
      ".NET Framework / ASP.NET MVC",
      "WCF (Windows Communication Foundation)",
      "RESTful APIs / SOAP Web Services",
      "Microservices architecture",
      "Multithreaded systems & concurrency",
      "Messaging systems (JMS, MSMQ, Kafka)",
    ],
    "Databases & Data Systems": [
      "SQL Server",
      "Oracle Database",
      "Entity Framework / Hibernate ORM",
      "Query optimization & schema design",
      "Distributed data systems",
      "Cassandra (cluster setup, high-throughput writes)",
    ],
    "Cloud & DevOps": [
      "Azure",
      "AWS (deployment experience)",
      "Jenkins (CI/CD pipelines)",
      "Git / GitHub",
      "Gradle / build automation",
      "NPM / Node ecosystem tooling",
      "Splunk (log aggregation)",
      "Docker/Kubernetes (implied enterprise exposure depending on project context)",
    ],
  },
  experience: [
    {
      company: "Client:Walmart",
      role: "Senior fullstack Developer",
      period: "Nov 2025 – Present",
      description: [
        "Designed and developed scalable backend services using Node.js, Express.js, and NestJS for microservices-based applications.",
        "Built full stack web applications using React, Next.js, TypeScript, MongoDB, and PostgreSQL with high scalability and performance.",
        "Integrated GenAI/LLM APIs and AI-powered recommendation systems to improve personalization and predictive analytics.",
        "Implemented CI/CD pipelines and cloud deployments using AWS, Docker, Kubernetes, and GitHub Actions in Agile development environments.",
      ],
    },
    {
      company: "Client: Wells Fargo",
      role: "Senior Full Stack Developer",
      period: "Apr 2023 – 2025.Oct",
      description: [
        "Developed scalable RESTful microservices using Node.js, Express.js, and TypeScript for enterprise banking platforms.",
        "Built cloud-native applications using Docker, Kubernetes, AWS, and serverless architectures for high availability and performance.",
        "Designed responsive frontend applications with React, Next.js, GraphQL, and Redux for real-time financial dashboards.",
        "Implemented CI/CD pipelines, secure authentication systems, and optimized PostgreSQL databases within Agile development environments.",
      ],
    },

    {
      company: "Client: Change Health Care",
      role: "Senior Full Stack Developer",
      period: "Sep 2022 – Mar 2023",
      description: [
        "Designed and developed scalable RESTful APIs and microservices using Node.js and Express.js, supporting healthcare workflow automation and distributed system architecture.",
        "Implemented secure authentication and authorization systems using OAuth 2.0 and JWT, enabling role-based access control across multiple services.",
        "Built and optimized data pipelines for ingestion and transformation of healthcare data (flat files to JSON) using Node.js streams and processing logic.",
        "Optimized PostgreSQL performance using Sequelize ORM and raw SQL queries, improving efficiency for high-volume transactional healthcare data systems.",
        "Implemented CI/CD pipelines using Jenkins, Docker, and GitHub Actions for automated testing, deployment, and monitoring of healthcare applications in Agile development environments.",
      ],
    },
    {
      company: "Client: Hewlett Packard enterprise",
      role: "Full-Stack Developer",
      period: "Jul 2020 – Aug 2022",
      description: [
        "Developed and maintained scalable React.js and React Native (TypeScript) applications, building reusable components, state management (Redux), routing, and responsive healthcare dashboards.",
        "Designed frontend architecture using one-way data flow, Virtual DOM, and modular component patterns, improving performance, scalability, and maintainability of large-scale applications.",
        "Built and maintained RESTful APIs using Node.js and Express.js for healthcare workflows including patient records, scheduling systems, and clinical data exchange.",
        "Integrated healthcare interoperability standards (FHIR and HL7) to enable secure and standardized data exchange between EHR systems and external hospital platforms.",
        "Implemented secure authentication and authorization using JWT and RBAC, and managed CI/CD pipelines with Docker, Kubernetes, and GitHub Actions for cloud-based deployments.",
      ],
    },
    {
      company: "Client: TJX",
      role: "Full Stack Developer",
      period: "March 2019 – June 2020",
      description: [
        "Developed responsive, component-based web applications using React.js, TypeScript, HTML5, CSS3, and modern JavaScript (ES6+), focusing on reusable UI architecture and SPA design.",
        "Built and maintained RESTful APIs using Node.js and Express.js, handling business logic, request validation, and data transformation for enterprise applications.",
        "Modernized legacy enterprise systems by refactoring VBScript-style logic into Node.js services and JavaScript modules, improving maintainability and scalability.",
        "Migrated and deployed applications to cloud environments (AWS and Azure equivalents) using CI/CD pipelines with Jenkins, GitHub Actions, Docker, and Kubernetes.",
        "Implemented XML/JSON data transformation pipelines and database migration workflows using Node.js tools (xml2js, fast-xml-parser, Sequelize/Prisma).",
      ],
    },
    {
      company: "Wearewellpath",
      role: "Software Developer",
      period: "May 2018 - Feb 2019",
      description: [
        "Developed and enhanced large-scale healthcare web applications using React.js, Node.js, and Express.js, supporting clinicians, administrators, and operational teams across critical workflows.",
        "Designed and implemented scalable RESTful API architectures for healthcare systems including patient management, scheduling, teleconsultation, and clinical data processing.",
        "Built reusable frontend components using React.js and Redux, improving UI consistency, maintainability, and development efficiency across dashboard modules.",
        "Implemented secure authentication and authorization using JWT and RBAC, enabling role-based access for physicians, patients, and administrative users.",
        "Optimized PostgreSQL databases and backend performance through indexing, schema design, and query tuning, improving API response times by ~30–40%.",
      ],
    },
     {
      company: "Fiserv",
      role: "Junior Software Developer",
      period: "Jun 2017 - Apr 2018",
      description: [
        "Developed and maintained lending and loan servicing applications for automotive finance systems, ensuring accurate processing and tracking of financial data across enterprise workflows.",
        "Participated in the full SDLC using Agile methodologies, contributing to development, testing, deployment, and production support activities.",
        "Led integration of Zendesk Support with an internal Survey Builder system in a cross-functional team of developers and QA engineers, improving customer support workflow automation.",
        "Designed and built user-facing applications based on business and technical requirements, ensuring alignment with financial domain needs and system scalability.",
        "Worked extensively with SQL Server, stored procedures, and relational database design, supporting legacy system maintenance, debugging, and performance improvements.",
      ],
    },
  ],
  education: [
    {
      institution: "Michigan State University",
      degree: "Bachelor of Science in Computer Science",
      period: "Sep 2014 - May 2017",
      description: [
        "Graduated with honors in Computer Science.",
        "Specialized in software engineering and algorithms.",
        "Completed capstone project on distributed systems.",
      ],
    },
  ],
  projects: [
    {
      title: "Walmart",
      description:
        "A frontend implementation inspired by Walmart, focusing on large-scale product organization, promotional hierarchy, and high-traffic e-commerce layout patterns.",
      techStack: [
        "React",
        "Next.js",
        "TailWindcss",
        "Responsive UI",
        "Component-based architecture",
      ],
      link: "https://www.walmart.com/",
      thumbnail: "/images/projects/walmart.webp",
    },
  ],
};
