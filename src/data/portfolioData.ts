export interface Project {
  id: string;
  title: string;
  nameInResume: string;
  subtitle: string;
  category: "genai" | "audit" | "applied";
  categoryLabel: string;
  statusLabel: string;
  statusType: "live" | "http" | "undeployed";
  timeline: string;
  githubUrl: string;
  demoUrl: string | null;
  demoLabel: string | null;
  isUndeployed?: boolean;
  stack: string[];
  summary: string;
  highlights: string[];
  workflowNodes?: {
    id: number;
    name: string;
    stage: string;
    description: string;
    role: string;
  }[];
  dossierTabs?: {
    id: string;
    label: string;
    heading: string;
    content: string;
  }[];
  auditCategories?: {
    id: string;
    family: string;
    title: string;
    description: string;
    status: string;
  }[];
}

export interface SkillGroup {
  id: string;
  category: "data" | "ml" | "genai" | "backend" | "core";
  categoryCode: string;
  title: string;
  countLabel: string;
  skills: string[];
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  badge: string;
  badgeType: "primary" | "secondary" | "neutral";
  description: string;
  link?: {
    label: string;
    url: string;
  };
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Harsh Raj",
    title: "AI/ML Engineer",
    headlineIntro: "I’m Harsh Raj.",
    headlineShimmer: "I build intelligent systems.",
    institution: "Indian Institute of Information Technology, Bhagalpur",
    shortInstitution: "IIIT Bhagalpur",
    department: "Mechatronics and Automation Engineering",
    degree: "B.Tech in Mechatronics and Automation Engineering",
    minor: "Minor in Computer Science and Engineering (CSE)",
    batch: "2024–2028",
    cgpa: "7.81 / 10.0",
    seniorSecondary: {
      school: "New Holy Ganges Public School, Khagaria, Bihar",
      board: "Class XII (CBSE)",
      percentage: "84.0%",
    },
    email: "harshraj17060@gmail.com",
    phone: "+91 7870259081",
    linkedin: "https://www.linkedin.com/in/harsh-raj-92b810325/",
    github: "https://github.com/harshraj1706",
    codolio: "https://codolio.com/profile/harsh1706",
    resumePdfPath: "/resume.pdf",
    portraitPath: "/images/harsh-raj.jpg",
    portraitFull: "/images/harsh-raj-full.jpg",
    summaryParagraph1:
      "Mechatronics and Automation Engineering scholar at IIIT Bhagalpur (2024–2028 · CGPA 7.81/10) with a Minor in Computer Science and Engineering (CSE). Advancing at the intersection of mathematical machine learning, generative & agentic orchestration, and physical automation loops.",
    summaryParagraph2:
      "From formulating empirical neural architectures to deploying distributed multi-agent research loops and cloud microservices, I engineer practical software systems that perceive, plan, and reliably execute.",
    fieldNotesQuote:
      "I started in mechatronics understanding how physical actuators and sensor loops respond to real-world dynamics. That naturally led me to intelligence: how software can perceive, reason, and act. Today, I build end-to-end applications that range from multi-agent research pipelines to web auditing systems.",
  },

  disciplines: [
    {
      id: "01",
      title: "Machine Learning, Deep Learning & Data Science",
      subtitle: "Empirical Architectures, Statistical Modeling & Ensembles",
      description:
        "Developing empirical neural networks, supervised & unsupervised classifiers, and ensemble methods with statistical feature engineering, model evaluation, cross-validation, and hyperparameter optimization.",
      tags: ["PyTorch", "Scikit-learn", "TensorFlow/Keras", "Ensemble Methods", "Cross-Validation", "Feature Engineering"],
      color: "primary",
    },
    {
      id: "02",
      title: "Generative & Agentic AI Systems",
      subtitle: "LangGraph, Swarm Orchestration, Tool Calling & RAG",
      description:
        "Orchestrating stateful agents capable of autonomous research, tool execution, claim verification, contradiction detection, and structured reporting across distributed LLM workflows.",
      tags: ["LangGraph", "LangChain", "LLMs", "Tool Calling", "RAG", "Multi-Agent Systems", "SentenceTransformers"],
      color: "secondary",
    },
    {
      id: "03",
      title: "Applied AI, Cloud Deployment & NLP/CV",
      subtitle: "Microservices, AWS EC2, Spaces, OCR & Processing Pipelines",
      description:
        "Transforming experimental algorithms into dependable microservices with FastAPI, REST APIs, Supabase, AWS EC2, and Hugging Face Spaces, integrated with text/image processing and OCR pipelines.",
      tags: ["FastAPI", "AWS EC2", "Hugging Face Spaces", "Streamlit", "Pydantic", "Supabase", "OCR (Tesseract.js)"],
      color: "tertiary",
    },
  ],

  skillGroups: [
    {
      id: "languages",
      category: "core",
      categoryCode: "CATEGORY // CORE_LANG",
      title: "Programming Languages",
      countLabel: "2 RUNTIMES",
      skills: ["Python", "C++"],
      description: "Algorithmic problem solving, numerical simulations, and embedded hardware bridges.",
    },
    {
      id: "data_science",
      category: "data",
      categoryCode: "CATEGORY // DATA_SCIENCE",
      title: "Data Science",
      countLabel: "5 DISCIPLINES",
      skills: [
        "Data Preprocessing",
        "Exploratory Data Analysis (EDA)",
        "Statistical Analysis",
        "Feature Engineering",
        "Data Visualization",
      ],
      description: "Rigorous tabular dataset hygiene, exploratory modeling, and statistical validation.",
    },
    {
      id: "classical_ml",
      category: "ml",
      categoryCode: "CATEGORY // CLASSICAL_ML",
      title: "Machine Learning",
      countLabel: "8 TECHNIQUES",
      skills: [
        "Scikit-learn",
        "Supervised Learning",
        "Unsupervised Learning",
        "Classification & Regression",
        "Ensemble Methods",
        "Model Evaluation",
        "Cross-Validation",
        "Hyperparameter Optimization",
      ],
      description: "Gradient boosting, ensemble bagging/stacking, ROC-AUC calibration, and loss minimization.",
    },
    {
      id: "deep_learning",
      category: "ml",
      categoryCode: "CATEGORY // DEEP_MODELS",
      title: "Deep Learning",
      countLabel: "5 SYSTEMS",
      skills: [
        "PyTorch",
        "TensorFlow / Keras",
        "Neural Networks",
        "CNNs",
        "Transfer Learning",
      ],
      description: "Spatial representation learning, convolutional backbones, and gradient propagation.",
    },
    {
      id: "nlp_cv",
      category: "data",
      categoryCode: "CATEGORY // NLP_AND_VISION",
      title: "NLP & Computer Vision",
      countLabel: "5 CAPABILITIES",
      skills: [
        "Text Processing",
        "Embeddings",
        "Transformers",
        "OCR",
        "Image Processing",
      ],
      description: "Dense semantic representations, multimodal tokenization, and visual text extraction.",
    },
    {
      id: "gen_ai",
      category: "genai",
      categoryCode: "CATEGORY // AGENTIC_AI",
      title: "Generative & Agentic AI",
      countLabel: "10 PLATFORMS",
      skills: [
        "LLMs",
        "LangChain",
        "LangGraph",
        "RAG",
        "Prompt Engineering",
        "Tool Calling",
        "Multi-Agent Systems",
        "LLM Orchestration",
        "Hugging Face Transformers",
        "SentenceTransformers",
      ],
      description: "Autonomous actor graphs, state synchronization, dynamic tool calling, and dense vector search.",
    },
    {
      id: "backend_deployment",
      category: "backend",
      categoryCode: "CATEGORY // BACKEND_CLOUD",
      title: "Backend, Deployment & Tools",
      countLabel: "11 FRAMEWORKS",
      skills: [
        "FastAPI",
        "Streamlit",
        "Pydantic",
        "REST APIs",
        "Supabase",
        "AWS EC2",
        "Hugging Face Spaces",
        "Git",
        "GitHub",
        "BeautifulSoup",
        "lxml",
      ],
      description: "Cloud EC2 instances, production FastAPI microservices, strict Pydantic schemas, and web harvesting.",
    },
    {
      id: "cs_fundamentals",
      category: "core",
      categoryCode: "CATEGORY // CS_FOUNDATIONS",
      title: "CS Fundamentals",
      countLabel: "4 DISCIPLINES",
      skills: [
        "OOP",
        "DBMS",
        "Operating Systems",
        "Data Structures & Algorithms",
      ],
      description: "200+ DSA problems solved on Codolio; object-oriented design and systems architecture.",
    },
  ] as SkillGroup[],

  projects: [
    {
      id: "multi-agent-system",
      title: "CogniSynth: Multi-Agent Research System",
      nameInResume: "CogniSynth: Multi-Agent Research System",
      subtitle: "Autonomous Research & Decision Intelligence Platform",
      category: "genai",
      categoryLabel: "GENERATIVE AI",
      statusLabel: "PRODUCTION LIVE (SPACES)",
      statusType: "live",
      timeline: "Jun 2026–Present",
      githubUrl: "https://github.com/harshraj1706/multi-agent-system",
      demoUrl: "https://huggingface.co/spaces/harshraj1706/Multiagent",
      demoLabel: "Live Demo (Hugging Face) →",
      isUndeployed: false,
      stack: ["Python", "LangGraph", "Gemini", "Tavily", "FastAPI", "Streamlit"],
      summary:
        "A multi-agent research workflow that decomposes a topic into research tasks and coordinates web search, page extraction, claim analysis, verification, synthesis, and report generation.",
      highlights: [
        "Built a multi-agent research workflow that decomposes a topic into research tasks and coordinates web search, page extraction, claim analysis, verification, synthesis, and report generation.",
        "Implemented evidence-linked claims, source-quality scoring, contradiction detection, and persistent local semantic memory to make findings more traceable and easier to review.",
        "Developed a Streamlit dashboard with FastAPI endpoints and server-sent events (SSE), enabling users to submit research requests and follow workflow progress as results are produced.",
      ],
      workflowNodes: [
        {
          id: 1,
          name: "Task DAG Planner",
          stage: "PLANNING LAYER",
          role: "Dynamic Objective Decomposition",
          description:
            "Decomposes complex user queries into parallel discovery tracks and sequential synthesis tasks with safety bounds and timeout safeguards.",
        },
        {
          id: 2,
          name: "Researcher & Scraper",
          stage: "DISCOVERY SWARM",
          role: "Tavily API & BeautifulSoup",
          description:
            "Coordinates multi-query Tavily web search and deep page extraction with Readability and BeautifulSoup, stripping noise from target documentation.",
        },
        {
          id: 3,
          name: "Evidence Extractor",
          stage: "PROVENANCE LAYER",
          role: "Atomic Claims & Snippets",
          description:
            "Extracts atomic proposition claims directly linked to verbatim evidence excerpts from indexed source web records for audit traceability.",
        },
        {
          id: 4,
          name: "Verifier & Conflict Detector",
          stage: "EVALUATION LAYER",
          role: "Contradiction Engine & Quality Scoring",
          description:
            "Evaluates multi-factor source quality scores, cross-references claims to uncover numerical discrepancies, and generates explicit conflict records.",
        },
        {
          id: 5,
          name: "Analyst & Reporter",
          stage: "SYNTHESIS LAYER",
          role: "Report Generation & Vector Store",
          description:
            "Compiles coherent, thematic Markdown briefs with inline citations, streams real-time SSE progress, and persists intelligence into local vector memory.",
        },
      ],
      dossierTabs: [
        {
          id: "objective",
          label: "01 // OBJECTIVE",
          heading: "Autonomous Grounded Research",
          content:
            "CogniSynth transforms autonomous multi-agent research into a measurable, evidence-grounded AI research platform. Rather than relying on simple prompt chaining, it dynamically decomposes objectives into Directed Acyclic Graphs (DAGs) and verifies propositions against indexed evidence.",
        },
        {
          id: "architecture",
          label: "02 // ARCHITECTURE",
          heading: "Stateful LangGraph Orchestration",
          content:
            "Engineered around LangGraph stateful machines with conditional transitions, retry backoff with jitter between Gemini models, explicit conflict loops, and zero-dependency local semantic vector memory for querying prior research sessions.",
        },
        {
          id: "capabilities",
          label: "03 // CAPABILITIES",
          heading: "Verified Claims & Contradiction Detection",
          content:
            "Extracts atomic proposition claims with verbatim evidence snippets, computes source reliability through domain authority and freshness signals, flags numerical discrepancies, and provides real-time execution observability via Server-Sent Events (SSE).",
        },
        {
          id: "implementation",
          label: "04 // LESSONS LEARNED",
          heading: "Bounded Execution & Evidence Rigor",
          content:
            "Preventing multi-agent hallucination loops requires anchoring every assertion to physical source snippets, enforcing strict Pydantic validation schemas at every node boundary, and bounding crawler depth to guarantee predictable completion times.",
        },
      ],
    },
    {
      id: "auditing-website-agent",
      title: "Brand AI-Readiness Auditing Engine",
      nameInResume: "Brand AI-Readiness Auditing Engine",
      subtitle: "Autonomous Brand AI-Readiness Audit Engine & Agent Skills Suite",
      category: "audit",
      categoryLabel: "AI AUDITING",
      statusLabel: "ACTIVE PROTOTYPE (HTTP)",
      statusType: "http",
      timeline: "Aug 2026–Present",
      githubUrl: "https://github.com/harshraj1706/auditing_website_agent",
      demoUrl: "http://16.16.207.1",
      demoLabel: "Live Demo (HTTP) →",
      isUndeployed: false,
      stack: ["Python", "Web Crawling", "HTML Parsing", "JSON", "FastAPI", "React"],
      summary:
        "Developed an audit engine that assesses crawler access, HTML quotability, structured brand/entity information, content freshness, user-action pathways, and barriers caused by non-text content.",
      highlights: [
        "Developed an audit engine that assesses crawler access, HTML quotability, structured brand/entity information, content freshness, user-action pathways, and barriers caused by non-text content.",
        "Added checks for crawler directives, sitemap and metadata signals, structured information, and content discoverability to identify issues that may limit website visibility to AI-driven systems.",
        "Built a bounded, robots-aware crawling pipeline that returns structured JSON findings with supporting evidence, severity-ranked recommendations, and verification steps to help reduce false positives.",
      ],
      auditCategories: [
        {
          id: "crawl-access",
          family: "CRA-01 / CRA-03",
          title: "Crawler Access Audit",
          description:
            "Inspects robots.txt rules, AI user agents (GPTBot, ClaudeBot, Perplexity), sitemap availability, and WAF challenge roadblocks.",
          status: "CRAWLER ADVISORY",
        },
        {
          id: "render-quotability",
          family: "CRA-02 / CRA-05 / CRA-06",
          title: "Render Quotability Audit",
          description:
            "Detects empty client-side JavaScript shells, CSR-only facets, unindexed SPA navigation menus, and non-extractable content.",
          status: "HTML PARSER",
        },
        {
          id: "freshness-entity",
          family: "FC-ENT / FC-FRESH",
          title: "Freshness & Schema Corroboration",
          description:
            "Validates Organization sameAs links, JSON-LD schemas (Product, Article, FAQPage, SpeakableSpecification), and publication dates.",
          status: "SCHEMA.ORG",
        },
        {
          id: "engagement-nontext",
          family: "ENG-01 / CRA-04",
          title: "Engagement & Surface Audit",
          description:
            "Flags dead call-to-actions, missing H1/breadcrumbs, image-only hero barriers without alt text, and PDF/canvas gates.",
          status: "ACTION PATHWAYS",
        },
      ],
    },
    {
      id: "medireach",
      title: "MediReach: AI-Enabled Healthcare Platform",
      nameInResume: "MediReach: AI-Enabled Healthcare Platform",
      subtitle: "Full-Stack Healthcare Management & Clinical Intelligence Suite",
      category: "applied",
      categoryLabel: "APPLIED AI / TEAM",
      statusLabel: "TEAM PROJECT (2ND PLACE SIH '26)",
      statusType: "undeployed",
      timeline: "2026",
      githubUrl: "https://github.com/BIT-BY-BIT-26/Reflexes",
      demoUrl: null,
      demoLabel: null,
      isUndeployed: true,
      stack: ["LLM Services", "OCR", "Document Processing", "FastAPI", "SQLite", "React"],
      summary:
        "Built an LLM-driven patient-intake workflow to collect and structure patient information, with a document pipeline to extract data from uploaded medical records, protocol-oriented reviews, and medicine-label OCR.",
      highlights: [
        "Built an LLM-driven patient-intake workflow to collect and structure patient information, with a document pipeline to extract data from uploaded medical records.",
        "Developed AI-assisted report generation and protocol-oriented review; an LLM reviewer flags contradictions and unsupported claims in generated reports.",
        "Integrated AI services with FastAPI and contributed to SQLite persistence, API-key authentication, configurable multilingual support, medicine-label OCR, and voice-assistance workflows; team secured second place at the SIH ’26 internal hackathon.",
      ],
    },
  ] as Project[],

  education: [
    {
      institution: "Indian Institute of Information Technology, Bhagalpur",
      degree: "B.Tech. in Mechatronics and Automation Engineering",
      minor: "Minor in Computer Science and Engineering (CSE), IIIT Bhagalpur",
      timeline: "2024–2028",
      status: "CURRENT UNDERGRADUATE",
      cgpa: "7.81 / 10.0",
      details:
        "Bridging physical mechatronics, control systems, and robotics with rigorous computer science fundamentals, neural network design, and multi-agent AI orchestration.",
    },
    {
      institution: "New Holy Ganges Public School, Khagaria, Bihar",
      degree: "Senior Secondary Board Examination (Class XII, CBSE)",
      minor: null,
      timeline: "Completed",
      status: "COMPLETED",
      cgpa: "84.0%",
      details: "Strong foundational grounding in mathematics, physics, and computational thinking.",
    },
  ],

  achievements: [
    {
      id: "ai-verse",
      title: "3rd Place — AI-Verse '26 Machine Learning Challenge",
      badge: "COMPETITION",
      badgeType: "primary",
      description:
        "Machine Learning Challenge at IIIT Bhagalpur (2026); developed predictive models with tailored feature engineering, evaluation metrics, and cross-validation.",
    },
    {
      id: "sih-2026",
      title: "2nd Place — SIH '26 Internal Hackathon (Team Reflexes)",
      badge: "TEAM ACHIEVEMENT",
      badgeType: "secondary",
      description:
        "Recognized with Team Reflexes at IIIT Bhagalpur for MediReach, implementing LLM patient-intake workflows, protocol review, prescription OCR, and voice assistance.",
    },
    {
      id: "dsa-codolio",
      title: "200+ DSA Problems Solved",
      badge: "ALGORITHMIC",
      badgeType: "neutral",
      description:
        "Consistent algorithmic problem solving across graph algorithms, dynamic programming, trees, and complexity analysis on Codolio.",
      link: {
        label: "Codolio Profile →",
        url: "https://codolio.com/profile/harsh1706",
      },
    },
    {
      id: "ibm-llm",
      title: "Introduction to Large Language Models",
      badge: "CERTIFICATION",
      badgeType: "neutral",
      description:
        "IBM SkillsBuild, Jan 2026 (Course covering LLM transformer architectures, attention mechanisms, and prompt engineering).",
      link: {
        label: "View Resume / Credentials →",
        url: "/resume.pdf",
      },
    },
  ] as Achievement[],

  leadership: {
    role: "Project Manager",
    organization: "Robotics and Electronics Club, IIIT Bhagalpur",
    timeline: "2024–2025",
    bullets: [
      "Coordinated team members, supported task planning, and oversaw the execution of robotics projects within club activities.",
      "Organized technical workshops and guided junior students during robotics project work and technical learning activities.",
    ],
  },
};
