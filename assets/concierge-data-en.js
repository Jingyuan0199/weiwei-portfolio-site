/* Generated from content/en/concierge.json; public preview content only. */
window.WEIWEI_CONCIERGE_DATA = {
  "version": "2026-11-05-approved-content-refresh",
  "mode": "preview",
  "defaultEntryId": "ai",
  "welcome": {
    "title": "Ask Weiwei",
    "description": "I'm Weiwei's AI guide. I can help you understand her experience, find projects and articles, and point you to the related material.",
    "suggestions": [
      {
        "label": "Meet Weiwei in 30 seconds",
        "query": "Introduce Weiwei in 30 seconds"
      },
      {
        "label": "See her AI work",
        "query": "Tell me about Weiwei's AI experience"
      },
      {
        "label": "How she leads a team",
        "query": "What team-management experience does Weiwei have"
      },
      {
        "label": "Find a complex-platform case",
        "query": "Recommend a complex platform design case"
      },
      {
        "label": "How she sees design in the AI era",
        "query": "How does she see AI's impact on design"
      }
    ]
  },
  "entries": [
    {
      "id": "intro",
      "title": "Meet Weiwei in 30 seconds",
      "keywords": [
        "introduction",
        "who is",
        "about Weiwei",
        "30 seconds",
        "background",
        "expert designer",
        "weiwei",
        "Weiwei Duan",
        "design experience",
        "years",
        "how many years"
      ],
      "answer": "Weiwei is an Expert Designer with 14 years of experience, focused on enterprise infrastructure and complex product design. She turns project experience into design systems so teams can keep building. Her path runs from print and portals, to mobile products, to engineering, data, and AI — doing key product design, with formal-manager, dotted-line lead, and PIC experience.\n\nNow she's using AI to change how she works, and — starting from zero coding background — has built personal works like a nature roam and a classical-poem experience. The Projects page shows the concrete work; the Thinking essays record how experience changes judgment; AI creations tell the origin, process, and gaps of each idea.",
      "sources": [
        {
          "title": "Resume · Experience",
          "href": "career.html#shopee",
          "description": "Design responsibilities, team experience, and career progression"
        },
        {
          "title": "Project overview",
          "href": "projects.html",
          "description": "From AI products to complex platforms and the design system"
        }
      ],
      "suggestions": [
        {
          "label": "See the AI experience",
          "query": "Tell me about Weiwei's AI experience"
        },
        {
          "label": "See the team experience",
          "query": "What team-management experience does Weiwei have"
        }
      ]
    },
    {
      "id": "ai",
      "title": "Her AI product & design practice",
      "keywords": [
        "ai",
        "artificial intelligence",
        "ai project",
        "ai experience",
        "human-in-the-loop",
        "ask",
        "ops",
        "on-call",
        "troubleshooting",
        "incident",
        "sre"
      ],
      "answer": "Weiwei's AI practice has three parts: in Ask, she designed how people and AI complete work together — AI proposes and executes, and a person authorizes, corrects, and takes over at the key points; she tried letting AI use the design system through three paths — Figma MCP, Make, and React — MCP canvas work was slow, Make or direct generation was fast, and generating in an existing React codebase was acceptable but only good at standard screens; outside work, she used AI to build a nature roam, a poem experience, a community prototype, a mini-game, and a gesture experiment. Start with whichever interests you.",
      "sources": [
        {
          "title": "Ask · AI product design",
          "href": "projects/ask.html#decisions",
          "description": "How experts understand, authorize, correct, and take over"
        },
        {
          "title": "In late 2025, the rules were all in my head",
          "href": "projects/ai-design-infrastructure.html#phase-one",
          "description": "Ask's early practice, the failed distillation, and the CTO meeting"
        },
        {
          "title": "AI creations and experiments",
          "href": "projects/independent.html",
          "description": "Five works — origin, process, and playable results"
        }
      ],
      "suggestions": [
        {
          "label": "See the design-system experiment",
          "query": "What problems did her Design Skill exploration run into"
        },
        {
          "label": "See the personal works",
          "query": "Tell me about Weiwei's AI creations"
        }
      ]
    },
    {
      "id": "ai-design",
      "title": "I tried to distill myself into AI — and only partly succeeded.",
      "keywords": [
        "ai design exploration",
        "design skill",
        "design md",
        "design debt",
        "design automation",
        "mcp",
        "react",
        "non-standard",
        "generation cost",
        "skill exploration"
      ],
      "answer": "In late 2025, Weiwei built Ask's runnable high-fidelity prototype in Figma Make — before most people were using AI to generate product pages directly, and with no precedent for a complete large product. She was among the early ones: there was no Design MD constraint, and all the rules — including where to break things into business components — existed only in her head. Later the team's Design Manager assigned someone to feed her thousand-plus rounds of conversation to AI for a summary, to replicate the path; it didn't work. The CTO then met her specifically to ask how she used AI for design; Figma's product lead also came to ask how she used Make for a large product and invited her to share the case — which involved internal information, so she had to decline.\n\nHer later attempts were, at root, trying to distill an expert designer into specs AI can understand: Codex operating Figma through MCP, Design MD constraining Figma Make, and Codex generating interfaces from components in a React project. The three paths differ in speed but are only good at standard screens. At the end of distillation, what can be written down is only the standard spec; the most valuable judgment — why break a component, which difference to preserve, which risk not to let through — can't be distilled.",
      "sources": [
        {
          "title": "In late 2025, the rules were all in my head",
          "href": "projects/ai-design-infrastructure.html#phase-one",
          "description": "Ask's early practice, the failed distillation, and the CTO meeting"
        },
        {
          "title": "Where the skipped work went",
          "href": "projects/ai-design-infrastructure.html#phase-three",
          "description": "Design debt and trade-offs still to verify"
        }
      ],
      "suggestions": [
        {
          "label": "See the design system build",
          "query": "How did Weiwei build Infra Design System"
        },
        {
          "label": "Read another AI essay",
          "query": "How does she see the changes in Smart and Coze"
        }
      ]
    },
    {
      "id": "when-models-plan",
      "title": "When models plan on their own, which judgments are still worth a human?",
      "keywords": [
        "coze",
        "deepseek",
        "Liang Wenfeng",
        "models plan",
        "workflow era",
        "chasing",
        "long-term choice",
        "worth investing",
        "smart and coze"
      ],
      "answer": "Reading the announcement of Coze's enterprise-plan changes, Weiwei thought of two products she'd been part of: Smart's workflow mode is similar to Coze's — not chasing anyone; internally, companies tend to build their own for information security. Ask's executable SOPs are the same mode. Both were company-level key projects when built; both have now quieted down.\n\nHer judgment: a middle layer that fills a model's gap lives as long as the gap. The industry treats AGI as the main line; in a May 2026 closed-door conversation with investors, Liang Wenfeng said C-side and B-side are both byproducts on the way to AGI — intermediate outputs. Workflows and SOP platforms are exactly such forms: they let things run, then step aside once the gap is filled. A design system isn't in that category — it accumulates judgment and just changes users. The forms step aside, but they leave a dividing line: what gets absorbed is execution; the four things that can't be taken over are defining the problem, owning the consequence, ambiguous trade-offs, and persuading and handing over. Ask's experience is that line productized: let AI take on tasks while a person authorizes, corrects, and takes over at key points.",
      "sources": [
        {
          "title": "Two hot products, after they quieted down",
          "href": "projects/when-models-plan.html#workflow-value",
          "description": "The Coze announcement and Smart/Ask's rise and fall"
        },
        {
          "title": "What gets absorbed is execution; what can't be taken over is judgment",
          "href": "projects/when-models-plan.html#long-term-choices",
          "description": "The four things and Ask's productization"
        }
      ],
      "suggestions": [
        {
          "label": "See her work in Smart",
          "query": "What did Weiwei do in Smart"
        },
        {
          "label": "See how she tries AI",
          "query": "What problems did her Design Skill exploration run into"
        }
      ]
    },
    {
      "id": "ask-delivery",
      "title": "Ask's role and delivery",
      "keywords": [
        "ask role",
        "ask delivery",
        "high-fidelity",
        "interactive",
        "figma make",
        "figma design",
        "production code",
        "delivery standard",
        "ai generation",
        "ask design"
      ],
      "answer": "On Ask, Weiwei was the lead designer. With only three days before a major review, she worked with several TPMs to map roles, tasks, and the core flow, ran expert interviews, and designed how a person authorizes, corrects, and takes over. From late 2025 she used Figma Make to build a runnable, interactive high-fidelity prototype — the first version in three days, about a thousand rounds of conversation — at a time when no designer at the company had produced a runnable large-product prototype this way.\n\nMake generates Figma's own front-end output, which didn't meet the company's production requirements and couldn't be adopted directly. Once the design stabilized, she organized it into design files, business components, and theming — for ongoing revision, component reuse, and team collaboration.",
      "sources": [
        {
          "title": "Ask · taking over + first version",
          "href": "projects/ask.html#definition",
          "description": "Assembling the whole product in three days; a runnable prototype that passed review"
        },
        {
          "title": "Ask · SOPs and delivery",
          "href": "projects/ask.html#assets",
          "description": "From a playable prototype to maintainable design assets"
        }
      ],
      "suggestions": [
        {
          "label": "How people control AI",
          "query": "How does Ask design human-in-the-loop collaboration"
        },
        {
          "label": "What is Smart",
          "query": "What did Weiwei do in Smart"
        }
      ]
    },
    {
      "id": "space",
      "title": "Space's complex platform design",
      "keywords": [
        "space",
        "engineering infrastructure",
        "engineering platform",
        "complex platform",
        "complex system",
        "complex product",
        "platform design",
        "global understanding",
        "log",
        "log platform",
        "cmdb",
        "toc",
        "service cmdb",
        "server cmdb",
        "infrastructure"
      ],
      "answer": "Space is the engineering infrastructure platform, covering interrelated domains of resources, services, observability, and governance. Weiwei entered the business through concrete tools, untangling objects, states, roles, and upstream/downstream, gradually building the product landscape and the team's design foundation. The work includes initial builds, redesigns, continuous iteration, and taking over existing products.\n\nStart with how Service CMDB untangles the multi-layer structure, then how Server CMDB supports professional queries. These are representative cases, not the full scope of her work.",
      "sources": [
        {
          "title": "Space · first, the whole engineering world",
          "href": "projects/space.html#context",
          "description": "Platform scope, two kinds of roles, and the nine-domain landscape"
        },
        {
          "title": "Space · Log Platform",
          "href": "projects/space.html#log",
          "description": "Establishing the design foundation, guiding later design, and quality ownership"
        }
      ],
      "suggestions": [
        {
          "label": "How it differs from the data platform",
          "query": "What did Weiwei do in DataSuite"
        },
        {
          "label": "How the team takes over",
          "query": "What team-management experience does Weiwei have"
        }
      ]
    },
    {
      "id": "data-suite",
      "title": "DataSuite's mature-platform experience optimization",
      "keywords": [
        "datasuite",
        "data suite",
        "data platform",
        "data development",
        "data governance",
        "datago",
        "flink",
        "dashboard",
        "data service",
        "api testing",
        "query",
        "dashboard",
        "api testing",
        "permissions"
      ],
      "answer": "DataSuite covers data development, analysis, and governance. When Weiwei took over, the platform already had a systematic set of products and interfaces; she added professional, systematic design support — untangling complex tasks, cross-product flows, permission boundaries, and feedback.\n\nLook at her work through four products: DataGo shows how one query makes clear where data comes from, what you can access, and how to get it; Dashboard shows the correspondence between config and chart when editing; Flink shows how to trace to the exact failed step after triggering a pipeline; Data Service shows how to read an API and make a call. The optimization advanced under existing engineering constraints — not a from-zero build, and never a full unification or full design-system adoption.",
      "sources": [
        {
          "title": "DataSuite · one query's starting point and permission boundary",
          "href": "projects/data-suite.html#go",
          "description": "Model discovery, query config, and permission changes"
        },
        {
          "title": "DataSuite · inherited constraints and progressive support",
          "href": "projects/data-suite.html#tradeoffs",
          "description": "Advancing experience under engineering and organizational conditions"
        }
      ],
      "suggestions": [
        {
          "label": "See the engineering platform",
          "query": "Tell me about Space's platform design"
        },
        {
          "label": "How she understands complexity",
          "query": "Find articles about complex-product design judgment"
        }
      ]
    },
    {
      "id": "design-system",
      "title": "Infra Design System's build and evolution",
      "keywords": [
        "design system",
        "design systems",
        "infrad",
        "infra design system",
        "design token",
        "tokens",
        "component library",
        "component guides",
        "theming",
        "patterns",
        "templates"
      ],
      "answer": "Infra Design System was led by Weiwei from zero and kept evolving: the design-side build, the Design Tokens upgrade, UI Kit maintenance, and the full component guides. Implementation is co-maintained with the front-end team.\n\nIn 2024 she drove the v4 → v5 design-side upgrade, turning the token mechanism into design assets; adding a text-color tier, for example, went from a 2–3 week full change (design plus engineering) to as fast as half an hour. During her 2023 maternity leave, the product team led Space's UI/UX Standards; after returning she took over folding the landed assets into Space Biz Component. In team use, some routine requests are assembled by TPMs on templates, with designers stepping in for key judgments and quality checks.",
      "sources": [
        {
          "title": "InfraD · from scattered tools to a shared foundation",
          "href": "projects/infrad.html#context",
          "description": "The 0-to-1 build and the Space Standards timeline"
        },
        {
          "title": "InfraD · what changed in Space after the upgrade",
          "href": "projects/infrad.html#benefits",
          "description": "Value rationale and the full change time"
        },
        {
          "title": "InfraD · getting assets into daily work",
          "href": "projects/infrad.html#adoption",
          "description": "Guides, patterns, TPMs, and quality checks"
        }
      ],
      "suggestions": [
        {
          "label": "See the business customization",
          "query": "What did Weiwei do in Smart"
        },
        {
          "label": "See the AI design exploration",
          "query": "What problems did her Design Skill exploration run into"
        }
      ]
    },
    {
      "id": "leadership",
      "title": "Leading a team while staying hands-on",
      "keywords": [
        "leading",
        "team",
        "team management",
        "management",
        "leader",
        "pic",
        "supervisor",
        "leadership",
        "collaboration",
        "mentoring",
        "new hire",
        "handover",
        "managed a team"
      ],
      "answer": "She has management and professional-leadership experience across stages: at Huaxun Investment she was Head of UI Design leading a 4-person team; after becoming App Infra's founding designer in early 2020, she served as a dotted-line lead while the team grew from 1 to 5, also owning key product design, cross-team communication, and mentoring. The 2021 records kept weekly intake, Q4 scheduling, stage-based collaboration, and project delivery tracking.\n\nLater, App Infra, STO, and TechOps merged into Engineering Infrastructure, and the design team and its scope grew. When the team moved into Infra in 2022 and a dedicated manager arrived, she stepped back from management to become a product-line lead (PIC — Person In Charge), once leading one of two groups alongside another PIC. She then gradually focused on the design system, business-specific support, mentoring, and key projects. The essay records the methods she used in that management period.",
      "sources": [
        {
          "title": "Resume · Shopee",
          "href": "career.html#shopee",
          "description": "Hands-on design, team responsibilities, and professional building"
        },
        {
          "title": "Leading a team",
          "href": "projects/team-operating-model.html#ownership",
          "description": "Fixed product-line ownership plus flexible scheduling"
        }
      ],
      "suggestions": [
        {
          "label": "How she hires designers",
          "query": "What hiring and interview experience does Weiwei have"
        },
        {
          "label": "See the practice in platforms",
          "query": "Tell me about Space's platform design"
        }
      ]
    },
    {
      "id": "hiring",
      "title": "Judgment in hiring",
      "keywords": [
        "hiring",
        "interview",
        "campus recruiting",
        "experienced hire",
        "150",
        "candidate",
        "hiring standard",
        "junior",
        "senior",
        "talent"
      ],
      "answer": "Weiwei has done 150 campus and experienced-hire interviews across levels — 150 is the number of interviews, not hires. She also mentored every new member of the Infra design team. Her hiring judgment formed gradually: as a dotted-line lead, hiring wasn't hers — whoever got hired, she used; after the team merged into Infra, she ran the professional interview rounds as an expert and truly took part in selection. In interviews she probes a candidate's real contribution, domain understanding, and trade-offs, and judges fit through concrete tasks.\n\nIn one interview she recognized the candidate's detail-level handling but still doubted his complex-domain ability; the later written test's domain learning, option comparison, and proactive verification gave new evidence that revised her judgment. The essay also uses a service-management page exercise to show how she observes information organization, boundary handling, and design reasoning.",
      "sources": [
        {
          "title": "Judgment in hiring · revising an initial read with new evidence",
          "href": "projects/hiring-designers.html#transfer",
          "description": "A written test and proactive verification provide new evidence"
        },
        {
          "title": "Judgment in hiring · the service-management page exercise",
          "href": "projects/hiring-designers.html#exercise",
          "description": "Observing complex-product design ability through a concrete task"
        }
      ],
      "suggestions": [
        {
          "label": "See the team collaboration",
          "query": "What team-management experience does Weiwei have"
        },
        {
          "label": "See the method practice",
          "query": "How does Weiwei do user research and design methods"
        }
      ]
    },
    {
      "id": "methods",
      "title": "From research to design judgment",
      "keywords": [
        "user research",
        "design method",
        "research method",
        "experience measurement",
        "quality",
        "review",
        "prephase",
        "workflow",
        "requirements",
        "design definition",
        "user interview",
        "best practice",
        "team co-built"
      ],
      "answer": "Weiwei has three professional methods for grounding design judgment. First, user research: she led the design-system website research and, with colleagues, completed interviews with 12 participants — having them replay real task paths, observing pauses and think-aloud moments, then adding role-specific questionnaires, and turning findings into prioritized improvement tasks. Second, experience measurement: a team co-built measurement model (effectiveness, ease of use, acceptance), a design self-check list, and quality evaluation rules — three tools that turn \"is the experience good\" into a measurable standard. Third, Design Prephase: an early-stage design method she helped build, with seven capabilities — requirements organizing, feature benchmarking, design definition, AI design input, user-feedback analysis, skill audit, and workflow routing — later packaged as a plugin (the plugin is only the form). The measurement, self-check, and review materials were also team co-built, with her participation.",
      "sources": [
        {
          "title": "Research & methods",
          "href": "projects/design-practice.html#method",
          "description": "Finding problems from recent real tasks"
        },
        {
          "title": "Design Prephase",
          "href": "projects/design-practice.html#prephase",
          "description": "A team co-built best practice for early-stage design"
        }
      ],
      "suggestions": [
        {
          "label": "See the design system",
          "query": "How did Weiwei build Infra Design System"
        },
        {
          "label": "How she understands complexity",
          "query": "Find articles about complex-product design judgment"
        }
      ]
    },
    {
      "id": "creative",
      "title": "AI creations and experiments",
      "keywords": [
        "ai creation",
        "ai-native",
        "ai native builds",
        "ai collaboration",
        "open-source practice",
        "personal creation",
        "allsome",
        "Jinjujiu",
        "poem",
        "Juan Le Ge Juan",
        "mini-game",
        "national parks",
        "into the wild",
        "gesture particle planet",
        "gemini",
        "gemini canvas",
        "three.js",
        "mediapipe",
        "gesture",
        "video demo"
      ],
      "answer": "There are five AI creations: the nature roam was inspired by the original intention behind the National Parks project — the Hainan scene is explorable, but texture, sound, and animal effects still fall short of the idea; Jinjujiu was inspired by a colleague building teaching tools for their kids, trying a four-scene sound-and-image reading; Allsome wants to give colleagues' creations a place to be seen — currently an interactive prototype, not launched; Juan Le Ge Juan is based on an open-source match-3 project, remade with Codex, with a video of the personal version played on a phone; the gesture particle planet is a visual-interaction experiment with Gemini Canvas, Three.js, and MediaPipe.\n\nThe first three offer external experience links; the last two play demo videos directly. Starting from zero coding background, Weiwei decides what to make and what experience she wants, checks results and gaps, and uses AI and open-source tools to take ideas through to implementation and debugging.",
      "sources": [
        {
          "title": "AI creations and experiments overview",
          "href": "projects.html#creative",
          "description": "Five works with direct experience links"
        },
        {
          "title": "AI creation records",
          "href": "projects/independent.html",
          "description": "Motivation, process, and real gaps"
        }
      ],
      "suggestions": [
        {
          "label": "See the AI practice at work",
          "query": "Tell me about Weiwei's AI experience"
        },
        {
          "label": "Contact Weiwei",
          "query": "How can I contact Weiwei"
        }
      ]
    },
    {
      "id": "smart",
      "title": "Smart and Ask's executable SOPs",
      "keywords": [
        "smart",
        "agent platform",
        "node",
        "resource mount",
        "business component",
        "theming",
        "workflow",
        "intermediate form"
      ],
      "answer": "Smart is a platform for agent configuration, workflow orchestration, testing, and publishing. Ask's executable SOPs are built with its workflow mode — laying out the steps as a node flow, adding parameters and human confirmation, then called by Ask. Weiwei guided theming from the design-system side, co-built business components with the project designer, and took part in professional review; front-line requirements and page design were led by the responsible colleague. In the Ask project she reflects: Ask and Smart are both intermediate forms from when models weren't strong enough; once models can plan on their own, this layer gets absorbed or reshaped.",
      "sources": [
        {
          "title": "Ask · the workflow platform behind executable SOPs",
          "href": "projects/ask.html#smart",
          "description": "Smart's orchestration, parameters, and theming, and the intermediate-form judgment"
        },
        {
          "title": "Ask · resolution knowledge must be callable and maintainable",
          "href": "projects/ask.html#assets",
          "description": "The two paths: executable SOPs and manual documents"
        }
      ],
      "suggestions": [
        {
          "label": "How Ask's SOPs execute",
          "query": "How does Ask design human-in-the-loop collaboration"
        },
        {
          "label": "What is an intermediate form",
          "query": "When models plan on their own, which work is still worth designing"
        }
      ]
    },
    {
      "id": "think-tank",
      "title": "The think-tank website design at Tencent Daxiang",
      "keywords": [
        "think tank",
        "think-tank website",
        "Development Research Center of the State Council",
        "Tencent Daxiang",
        "Daxiang"
      ],
      "answer": "During her time at Tencent Daxiang, Weiwei provided design support for a think-tank website for the Development Research Center of the State Council; the design stayed in use for years. This work belongs to her Tencent Daxiang role, presented together with portal, campaign, and feature design.",
      "sources": [
        {
          "title": "Tencent Daxiang · think-tank website design support",
          "href": "career.html#career-3",
          "description": "Website design support during the role and the design's continued use"
        }
      ],
      "suggestions": [
        {
          "label": "View the full resume",
          "query": "Tell me about Weiwei's career"
        },
        {
          "label": "See a complex-platform project",
          "query": "Tell me about Space's platform design"
        }
      ]
    },
    {
      "id": "contact",
      "title": "Contacting Weiwei",
      "keywords": [
        "contact",
        "wechat",
        "email",
        "mail",
        "contact info",
        "collaboration",
        "role",
        "opportunity",
        "chat",
        "salary",
        "compensation",
        "start date"
      ],
      "answer": "You can find WeChat, email, and phone through the \"Contact\" menu in the top-right. Role, collaboration, compensation, and start date need to be discussed with Weiwei herself.\n\nIt helps to bring the role or project you have in mind, and the questions you most want answered, so she can respond directly. This assistant won't send messages on your behalf, and won't confirm any arrangement for her.",
      "sources": [
        {
          "title": "Contact Weiwei",
          "href": "career.html#contact",
          "description": "Open the top contact card"
        },
        {
          "title": "View the resume",
          "href": "career.html",
          "description": "Continue the conversation with concrete experience and responsibilities"
        }
      ],
      "suggestions": [
        {
          "label": "First, her experience",
          "query": "Introduce Weiwei in 30 seconds"
        },
        {
          "label": "See a representative project",
          "query": "Recommend a complex platform design case"
        }
      ]
    }
  ],
  "routes": [
    {
      "title": "Home",
      "href": "index.html",
      "keywords": [
        "home",
        "weiwei",
        "introduction",
        "badge"
      ],
      "description": "Weiwei Duan's focus areas, representative projects, and thinking."
    },
    {
      "title": "Project overview",
      "href": "projects.html",
      "keywords": [
        "projects",
        "works",
        "cases",
        "project directory",
        "all projects"
      ],
      "description": "Browse by AI products, engineering & data platforms, systems & methods, and AI creations."
    },
    {
      "title": "Thinking",
      "href": "insights.html",
      "keywords": [
        "thinking",
        "articles",
        "views",
        "all articles",
        "design thinking",
        "AI & the era",
        "product & judgment",
        "team & methods"
      ],
      "description": "Six essays, in order: AI & the era, product & judgment, team & methods — each answering a judgment question inside a complex system, and the conditions under which it holds."
    },
    {
      "title": "Resume & capabilities",
      "href": "career.html",
      "keywords": [
        "career",
        "experience",
        "resume",
        "PDF",
        "download resume",
        "education",
        "school",
        "Central South University",
        "Shopee",
        "Huaxun",
        "Zhuma",
        "Xiaoxiang Morning Herald",
        "Tencent",
        "degree",
        "think tank",
        "contact",
        "WeChat",
        "email"
      ],
      "description": "Capabilities, career and education, team practice, and the PDF resume download."
    },
    {
      "title": "Let AI gradually take on on-call work while people hold the key judgment.",
      "href": "projects/ask.html",
      "keywords": [
        "Ask",
        "AI",
        "human-in-the-loop",
        "ops",
        "on-call",
        "incident",
        "authorize",
        "correct",
        "take over",
        "SOP"
      ],
      "description": "Ask is an AI on-call and incident-resolution platform, aiming to have AI gradually take on first-line on-call work. From intake, diagnosis, and resolution to retrospective, the design lands experts' authorization, correction, and takeover in concrete tasks."
    },
    {
      "title": "One product, then the full picture — building the design foundation for an engineering platform.",
      "href": "projects/space.html",
      "keywords": [
        "Space",
        "engineering platform",
        "infrastructure",
        "complex platform",
        "global understanding",
        "TOC",
        "CMDB",
        "log",
        "resource",
        "monitoring"
      ],
      "description": "Space is the engineering infrastructure platform built by Shopee Engineering Infrastructure, covering 100+ sub-products, connecting service ownership, resource management, delivery, observability, and governance for cross-product collaboration."
    },
    {
      "title": "One shared, evolving design foundation — across different products.",
      "href": "projects/infrad.html",
      "keywords": [
        "InfraD",
        "Infra Design System",
        "design system",
        "components",
        "Design Tokens",
        "theme",
        "Patterns",
        "Templates"
      ],
      "description": "Infra Design System is an enterprise design system connecting components, business patterns, page templates, and usage guides. A systematic Design Tokens layer and theming let different products share a foundation while keeping the expressions they need."
    },
    {
      "title": "On a mature data platform, building professional design support.",
      "href": "projects/data-suite.html",
      "keywords": [
        "DataSuite",
        "Data Suite",
        "Data Infra",
        "data platform",
        "DataGo",
        "Flink",
        "Dashboard",
        "Data Service",
        "data governance",
        "data development"
      ],
      "description": "DataSuite is the data development, analysis, and governance platform built by Shopee Data Infrastructure, with 20+ products and modules connecting data access, processing, operations assurance, asset discovery, and consumption."
    },
    {
      "title": "Turning curiosity into experiences you can open.",
      "href": "projects/independent.html",
      "keywords": [
        "personal creation",
        "independent build",
        "Allsome",
        "Jinjujiu",
        "Juan Le Ge Juan",
        "game",
        "poem",
        "national parks",
        "AI collaboration",
        "AI creation",
        "Independent Builds",
        "gesture particle planet",
        "Gemini",
        "Three.js",
        "MediaPipe",
        "video demo"
      ],
      "description": "Five AI creations — origin, process, and gaps: a nature roam, a poem experience, a community prototype, a WeChat mini-game, and a gesture particle planet."
    },
    {
      "href": "projects/when-models-plan.html",
      "keywords": [
        "AI & the era",
        "AI",
        "Coze",
        "Smart",
        "DeepSeek",
        "Liang Wenfeng",
        "workflow",
        "model planning",
        "chasing",
        "long-term choice"
      ],
      "title": "When models plan on their own, which work is still worth designing?",
      "description": "In the era when models weren't good at planning, workflows were a necessary intermediate. Once models can plan, that layer loses its premise — what gets absorbed is execution; what can't be taken over is judgment."
    },
    {
      "title": "After I handed the design spec to AI",
      "href": "projects/ai-design-infrastructure.html",
      "keywords": [
        "AI",
        "design responsibility",
        "AI workflow",
        "rules",
        "context",
        "Skill",
        "MCP",
        "prototype",
        "code",
        "human-in-the-loop",
        "AI & the era",
        "Design MD",
        "Figma Make",
        "React",
        "design debt",
        "non-standard",
        "generation cost",
        "AI design exploration"
      ],
      "description": "However complete the spec, some judgment I still couldn't hand to AI. What I worry about isn't AI's speed, but the skipped thinking turning into design debt."
    },
    {
      "title": "Order on the page",
      "href": "projects/complex-product-decisions.html",
      "keywords": [
        "complexity",
        "complex product",
        "design judgment",
        "product judgment",
        "object relationship",
        "filter",
        "table",
        "side menu",
        "navigation",
        "product & judgment"
      ],
      "description": "Engineering-infrastructure complexity has two sources: the technical system behind the pages, and the people who use it. Design can't eliminate complexity — only organize it into order on the page."
    },
    {
      "title": "Leading a team is making sure the work has someone to own it.",
      "href": "projects/team-operating-model.html",
      "keywords": [
        "team",
        "collaboration",
        "leading",
        "PIC",
        "Leader",
        "scheduling",
        "review",
        "mentoring",
        "shared talent pool",
        "management",
        "team & methods"
      ],
      "description": "As a dotted-line lead serving Infra, I grew the team from 1 to 5. This is about the methods I used in that management period."
    },
    {
      "title": "How do you spot complex-product design ability in hiring?",
      "href": "projects/hiring-designers.html",
      "keywords": [
        "hiring",
        "interview",
        "campus",
        "experienced hire",
        "candidate",
        "selection",
        "mentoring",
        "150",
        "level",
        "team & methods"
      ],
      "description": "I've done 150 campus and experienced-hire interviews, and mentored every new member of the Infra design team. What's worth asking isn't what they've done, but how they work."
    },
    {
      "title": "Real tasks, evidence-based judgment.",
      "href": "projects/design-practice.html",
      "keywords": [
        "research",
        "user research",
        "interview",
        "experience measurement",
        "self-check",
        "Design Prephase",
        "design definition",
        "requirements",
        "workflow",
        "team & methods"
      ],
      "description": "Design judgment can't rely on feeling alone. User research, experience measurement, and the early-stage method give it a basis."
    }
  ]
};
