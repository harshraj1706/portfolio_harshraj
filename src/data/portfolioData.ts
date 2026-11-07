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
  metrics?: {
    label: string;
    value: string;
    detail?: string;
  }[];
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
    degree: "B.Tech. in Mechatronics and Automation Engineering",
    minor: "Minor in Computer Science and Engineering (CSE), IIIT Bhagalpur",
    batch: "2024–2028",
    cgpa: "7.81 / 10.0",
    seniorSecondary: {
      school: "New Holy Ganges Public School, Khagaria, Bihar",
      board: "Class XII",
      percentage: "84%",
    },
    email: "harshraj17060@gmail.com",
    phone: "+91 7870259081",
    linkedin: "https://www.linkedin.com/in/harsh-raj-92b810325/",
    github: "https://github.com/harshraj1706",
    codolio: "https://codolio.com/profile/harsh1706",
    resumePdfPath: "/resume.pdf",
    certificatesDriveUrl: "https://drive.google.com/drive/folders/1s1UjM0SCUzYI3JF_6g5lhxSs2BuJF17G",
    portraitPath: "/images/harsh-raj.jpg",
    portraitFull: "/images/harsh-raj-full.jpg",
    summaryParagraph1:
      "Mechatronics and Automation Engineering scholar at IIIT Bhagalpur (2024–2028 · CGPA 7.81/10) with a Minor in Computer Science and Engineering (CSE). Advancing at the intersection of mathematical machine learning, reinforcement learning policies, generative agentic orchestration, and physical automation loops.",
    summaryParagraph2:
      "From training competitive reinforcement learning agents to deploying distributed multi-agent research graphs and production auditing engines, I engineer practical software systems that perceive, verify, and reliably execute.",
    fieldNotesQuote:
      "I started in mechatronics understanding how physical actuators and sensor loops respond to real-world dynamics. That naturally led me to intelligence: how software can perceive, reason, and act. Today, I build end-to-end applications that range from multi-agent research pipelines to web auditing systems.",
  },

  disciplines: [
    {
      id: "01",
      title: "Machine Learning, Deep Learning & RL",
      subtitle: "Empirical Architectures, Policy Optimization & Ensembles",
      description:
        "Developing empirical neural networks, supervised & unsupervised classifiers, and reinforcement learning agents (such as the 2nd Place Synapse Arena racing policy), supported by rigorous statistical feature engineering, model evaluation, cross-validation, and hyperparameter optimization.",
      tags: [
        "PyTorch",
        "Scikit-learn",
        "Reinforcement Learning",
        "TensorFlow/Keras",
        "Ensemble Methods",
        "Cross-Validation",
      ],
      color: "primary",
    },
    {
      id: "02",
      title: "Generative & Agentic AI Systems",
      subtitle: "LangGraph, Swarm Orchestration, Tool Calling & RAG",
      description:
        "Orchestrating stateful agents capable of autonomous research, tool execution, evidence-linked claim verification, contradiction detection, and structured reporting across distributed LLM workflows with telemetry tracking.",
      tags: [
        "LangGraph",
        "LangChain",
        "LLMs",
        "Tool Calling",
        "RAG",
        "Multi-Agent Systems",
        "SentenceTransformers",
      ],
      color: "secondary",
    },
    {
      id: "03",
      title: "Applied AI, Cloud Deployment & NLP/CV",
      subtitle: "FastAPI Microservices, React, AWS EC2, Spaces & OCR",
      description:
        "Transforming experimental algorithms into dependable full-stack applications with FastAPI, REST APIs, React, Supabase, SQLite, AWS EC2, and Hugging Face Spaces, integrated with text/image processing and OCR pipelines.",
      tags: [
        "FastAPI",
        "React",
        "AWS EC2",
        "Hugging Face Spaces",
        "Streamlit",
        "Pydantic",
        "SQLite",
        "OCR",
      ],
      color: "tertiary",
    },
  ],

  skillGroups: [
    {
      id: "languages",
      category: "core",
      categoryCode: "CATEGORY // CORE_LANG",
      title: "Languages",
      countLabel: "2 RUNTIMES",
      skills: ["Python", "C++"],
      description: "Algorithmic problem solving, numerical simulations, machine learning backends, and embedded hardware bridges.",
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
      description: "Rigorous tabular dataset hygiene, distribution modeling, exploratory statistical analysis, and feature curation.",
    },
    {
      id: "classical_ml",
      category: "ml",
      categoryCode: "CATEGORY // MACHINE_LEARNING",
      title: "Machine Learning",
      countLabel: "9 TECHNIQUES",
      skills: [
        "Scikit-learn",
        "Supervised Learning",
        "Unsupervised Learning",
        "Classification & Regression",
        "Ensemble Methods",
        "Reinforcement Learning",
        "Model Evaluation",
        "Cross-Validation",
        "Hyperparameter Optimization",
      ],
      description: "Gradient boosting, ensemble bagging/stacking, RL Markov decision policies (racing agents), and loss minimization.",
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
      description: "Spatial representation learning, convolutional backbones, backpropagation dynamics, and fine-tuning pretrained weights.",
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
      description: "Dense semantic representations, tokenization, transformer attention heads, and prescription/label OCR extraction.",
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
      description: "Autonomous actor graphs, state synchronization, dynamic tool calling, contradiction engines, and dense vector search.",
    },
    {
      id: "backend_frontend_deployment",
      category: "backend",
      categoryCode: "CATEGORY // BACKEND_FRONTEND",
      title: "Backend, Frontend & Deployment",
      countLabel: "9 FRAMEWORKS",
      skills: [
        "FastAPI",
        "REST APIs",
        "Pydantic",
        "React",
        "Streamlit",
        "Supabase",
        "SQLite",
        "AWS EC2",
        "Hugging Face Spaces",
      ],
      description: "Production FastAPI microservices, React frontends, Pydantic schemas, SQLite persistence, and cloud runtimes.",
    },
    {
      id: "testing_tools_cs",
      category: "core",
      categoryCode: "CATEGORY // TESTING_TOOLS_CS",
      title: "Testing, Tools & CS Fundamentals",
      countLabel: "11 COMPETENCIES",
      skills: [
        "Pytest",
        "unittest",
        "API & Integration Testing",
        "Git",
        "GitHub",
        "BeautifulSoup",
        "lxml",
        "OOP",
        "DBMS",
        "Operating Systems",
        "Data Structures and Algorithms",
      ],
      description: "Pytest/unittest test suites, API self-test fixtures, Git/GitHub version control, web parsing, and 200+ DSA problems solved on Codolio.",
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
        "A LangGraph-based research workflow orchestrating 6 active agents to decompose topics, research web sources, extract evidence, verify claims, synthesize findings, and generate reports.",
      highlights: [
        "Built a LangGraph-based research workflow orchestrating 6 active agents to decompose topics, research web sources, extract evidence, verify claims, synthesize findings, and generate reports.",
        "Implemented evidence-linked claim verification and contradiction detection; processed 41 claims and identified 13 contradictions across 4 production runs.",
        "Integrated FastAPI/SSE streaming, telemetry, and local TF-IDF semantic memory with under 5 ms top-4 retrieval; telemetry showed an estimated mean LLM cost of $0.00249 per completed run (n=4).",
      ],
      metrics: [
        {
          label: "ACTIVE AGENTS",
          value: "6",
          detail: "LangGraph state machine orchestration",
        },
        {
          label: "CLAIMS VERIFIED",
          value: "41 / 13",
          detail: "41 claims parsed · 13 contradictions flagged (4 runs)",
        },
        {
          label: "SEMANTIC RETRIEVAL",
          value: "< 5 ms",
          detail: "Local TF-IDF top-4 semantic memory lookup",
        },
        {
          label: "MEAN LLM COST",
          value: "$0.00249",
          detail: "Estimated mean cost per completed run (n=4)",
        },
      ],
      workflowNodes: [
        {
          id: 1,
          name: "Topic Decomposer",
          stage: "PLANNING LAYER",
          role: "Dynamic Objective Decomposition",
          description:
            "Decomposes complex user queries into parallel discovery tracks and sequential synthesis tasks with safety bounds and timeout safeguards.",
        },
        {
          id: 2,
          name: "Web Source Researcher",
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
          name: "Claim Verifier",
          stage: "EVALUATION LAYER",
          role: "Contradiction Engine & Verification",
          description:
            "Evaluates multi-factor source quality scores, cross-references claims to uncover numerical discrepancies, and flags explicit contradictions (13 identified across 4 runs).",
        },
        {
          id: 5,
          name: "Findings Synthesizer",
          stage: "SYNTHESIS LAYER",
          role: "Thematic Deduplication & TF-IDF Memory",
          description:
            "Aggregates verified claims, resolves cross-source tensions, structures insights into thematic threads, and indexes findings in local TF-IDF semantic memory (<5 ms retrieval).",
        },
        {
          id: 6,
          name: "Report Generator",
          stage: "DELIVERY LAYER",
          role: "Streaming Markdown & SSE Publisher",
          description:
            "Compiles coherent, thematic briefs with inline citations, streams real-time SSE progress to the Streamlit UI, and logs telemetry metrics ($0.00249 mean LLM cost/run).",
        },
      ],
      dossierTabs: [
        {
          id: "objective",
          label: "01 // OBJECTIVE",
          heading: "Autonomous Grounded Research",
          content:
            "CogniSynth transforms autonomous multi-agent research into a measurable, evidence-grounded AI research platform. Rather than relying on simple prompt chaining, it orchestrates 6 distinct agents to decompose objectives into Directed Acyclic Graphs (DAGs) and verify propositions against verbatim indexed evidence.",
        },
        {
          id: "architecture",
          label: "02 // ARCHITECTURE",
          heading: "Stateful LangGraph Orchestration & SSE",
          content:
            "Engineered around LangGraph stateful machines with conditional transitions, retry backoff with jitter across Gemini models, explicit conflict loops, FastAPI/SSE streaming, and zero-dependency local TF-IDF semantic memory achieving sub-5ms top-4 retrieval.",
        },
        {
          id: "capabilities",
          label: "03 // METRICS & TELEMETRY",
          heading: "Verified Claims & Contradiction Detection",
          content:
            "Extracts atomic proposition claims with verbatim evidence snippets. Across 4 production runs, the engine processed 41 claims and isolated 13 contradictions, with runtime telemetry establishing an estimated mean LLM cost of $0.00249 per run.",
        },
        {
          id: "implementation",
          label: "04 // LESSONS LEARNED",
          heading: "Bounded Execution & Evidence Rigor",
          content:
            "Preventing multi-agent hallucination loops requires anchoring every assertion to physical source snippets, enforcing strict Pydantic validation schemas at every node boundary, and bounding crawler depth to guarantee predictable completion times and low inference overhead.",
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
        "A FastAPI/React website-auditing engine spanning 11 AI-readiness categories and 35 distinct checks (24 test-covered), with 0–100 citability scoring and automated Schema.org/robots.txt remediation snippets; achieved 94.4% audit completion across 18 real-world domains.",
      highlights: [
        "Built a FastAPI/React website-auditing engine spanning 11 AI-readiness categories and 35 distinct checks (24 test-covered), with 0–100 citability scoring and automated Schema.org/robots.txt remediation snippets; achieved 94.4% audit completion across 18 real-world domains.",
        "Implemented bounded, robots-aware crawling and multi-tier SSRF safeguards; DOM/schema signal extraction averaged 0.272 ms, while unsafe-address rejection averaged 1.37 ms across 14 test patterns.",
        "Revalidated 23/23 API tests, 45/45 pre-deployment checks, 13/13 self-test fixtures (123 check points), and all 6 multi-skill integrations; the frontend production build compiled 1,978 modules.",
      ],
      metrics: [
        {
          label: "DIAGNOSTIC SCOPE",
          value: "11 / 35",
          detail: "11 AI-readiness categories · 35 distinct checks (24 test-covered)",
        },
        {
          label: "AUDIT COMPLETION",
          value: "94.4%",
          detail: "Benchmarked across 18 real-world production domains",
        },
        {
          label: "SIGNAL EXTRACTION",
          value: "0.272 ms",
          detail: "DOM/schema parse · 1.37 ms SSRF rejection (14 test patterns)",
        },
        {
          label: "VALIDATION SUITE",
          value: "23 / 45",
          detail: "23/23 API tests · 45/45 pre-deploy · 1,978 modules compiled",
        },
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
        "Built an LLM-driven patient-intake workflow to collect and structure patient information, with a document pipeline to extract data from uploaded medical records, protocol-oriented review, medicine-label OCR, and voice assistance.",
      highlights: [
        "Built an LLM-driven patient-intake workflow to collect and structure patient information, with a document pipeline to extract data from uploaded medical records.",
        "Developed AI-assisted report generation and protocol-oriented review; an LLM reviewer flags contradictions and unsupported claims in generated reports.",
        "Integrated AI services with FastAPI and contributed to SQLite persistence, API-key authentication, configurable multilingual support, medicine-label OCR, and voice-assistance workflows; team secured second place at the SIH ’26 internal hackathon.",
      ],
      metrics: [
        {
          label: "COMPETITION AWARD",
          value: "2nd Place",
          detail: "SIH '26 internal hackathon (Team Reflexes)",
        },
        {
          label: "CLINICAL INTAKE",
          value: "LLM + OCR",
          detail: "Structured patient forms & uploaded record ingestion",
        },
        {
          label: "EVALUATION ENGINE",
          value: "Protocol Review",
          detail: "Flags contradictions and unsupported claims in reports",
        },
        {
          label: "INFRASTRUCTURE",
          value: "FastAPI + SQLite",
          detail: "API-key auth, multilingual support & voice workflows",
        },
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
        "Bridging physical mechatronics, control systems, and robotics with rigorous computer science fundamentals, neural network design, reinforcement learning, and multi-agent AI orchestration.",
    },
    {
      institution: "New Holy Ganges Public School, Khagaria, Bihar",
      degree: "Class XII",
      minor: null,
      timeline: "Completed",
      status: "COMPLETED",
      cgpa: "84%",
      details: "Strong foundational grounding in mathematics, physics, and computational thinking.",
    },
  ],

  achievements: [
    {
      id: "synapse-arena",
      title: "2nd Place — Synapse Arena (Reinforcement Learning-based Racing Agent Challenge)",
      badge: "2ND PLACE // RL",
      badgeType: "primary",
      description:
        "PROTOFOS Tech Fest ’26, IIIT Bhagalpur; developed a competitive reinforcement learning racing agent navigating continuous action trajectories, reward shaping, and obstacle avoidance.",
      link: {
        label: "View Certificates →",
        url: "https://drive.google.com/drive/folders/1s1UjM0SCUzYI3JF_6g5lhxSs2BuJF17G",
      },
    },
    {
      id: "ai-verse",
      title: "3rd Place — AI-Verse ’26 Machine Learning Challenge",
      badge: "3RD PLACE // ML",
      badgeType: "secondary",
      description:
        "Machine Learning Challenge at IIIT Bhagalpur (2026); developed predictive statistical models with tailored feature engineering, evaluation metrics, and cross-validation.",
      link: {
        label: "View Certificates →",
        url: "https://drive.google.com/drive/folders/1s1UjM0SCUzYI3JF_6g5lhxSs2BuJF17G",
      },
    },
    {
      id: "sih-2026",
      title: "2nd Place — SIH ’26 Internal Hackathon",
      badge: "2ND PLACE // TEAM",
      badgeType: "secondary",
      description:
        "Recognized at IIIT Bhagalpur (2026) for MediReach: full-stack AI healthcare platform with LLM patient intake, clinical report review, medicine-label OCR, and voice workflows.",
      link: {
        label: "View Project Repo →",
        url: "https://github.com/BIT-BY-BIT-26/Reflexes",
      },
    },
    {
      id: "dsa-codolio",
      title: "Solved 200+ DSA Problems (Codolio)",
      badge: "200+ SOLVED",
      badgeType: "neutral",
      description:
        "Consistent algorithmic problem solving across graph algorithms, dynamic programming, trees, and computational complexity on Codolio.",
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
        "IBM SkillsBuild, Jan 2026; transformer architectures, self-attention mechanisms, and prompt engineering strategies.",
      link: {
        label: "View Certificates →",
        url: "https://drive.google.com/drive/folders/1s1UjM0SCUzYI3JF_6g5lhxSs2BuJF17G",
      },
    },
  ] as Achievement[],

  leadership: {
    role: "Project Manager",
    organization: "Robotics and Electronics Club, IIIT Bhagalpur",
    timeline: "2024–2025",
    bullets: [
      "Coordinated about 5 teams across 4 robotics projects; organized 10+ technical workshops for an average of 25 students, mentored 20+ students, and contributed to management of Enyugma, IIIT Bhagalpur’s techno-cultural festival.",
      "Mentored junior undergraduates in microcontroller interfacing, kinematics, sensor telemetry, and hardware debugging, strengthening institutional technical knowledge.",
    ],
    metrics: [
      {
        label: "ROBOTICS TEAMS & PROJECTS",
        value: "5 Teams · 4 Projects",
        detail: "Cross-functional project execution",
      },
      {
        label: "TECHNICAL WORKSHOPS",
        value: "10+ Sessions",
        detail: "Average 25 students per session",
      },
      {
        label: "STUDENTS MENTORED",
        value: "20+ Students",
        detail: "Direct hands-on technical guidance",
      },
      {
        label: "FESTIVAL MANAGEMENT",
        value: "Enyugma",
        detail: "IIIT Bhagalpur techno-cultural fest",
      },
    ],
  },
};
