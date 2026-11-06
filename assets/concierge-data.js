/* Generated from content/concierge.json; public preview content only. */
window.WEIWEI_CONCIERGE_DATA = {
  "version": "2026-11-05-approved-content-refresh",
  "mode": "preview",
  "defaultEntryId": "ai",
  "welcome": {
    "title": "问问微微",
    "description": "我是微微的 AI 导览助手。可以帮你了解她的经历、查找项目与文章，也会附上相关资料。",
    "suggestions": [
      {
        "label": "30 秒认识微微",
        "query": "用 30 秒介绍一下微微"
      },
      {
        "label": "看看她的 AI 项目",
        "query": "介绍一下微微的 AI 经验"
      },
      {
        "label": "她如何带团队",
        "query": "微微有哪些团队管理经验"
      },
      {
        "label": "找一个复杂平台案例",
        "query": "推荐一个复杂平台设计案例"
      }
    ]
  },
  "entries": [
    {
      "id": "intro",
      "title": "30 秒认识微微",
      "keywords": [
        "介绍",
        "认识",
        "是谁",
        "关于微微",
        "30秒",
        "30 秒",
        "简介",
        "背景",
        "擅长",
        "expert designer",
        "weiwei",
        "段微微",
        "设计经验",
        "多少年",
        "工作年限"
      ],
      "answer": "微微是一名拥有 14 年设计经验的 Expert Designer，长期做企业级基础设施与复杂产品设计，也把项目经验整理成设计系统，支持团队继续工作。她从纸媒与门户网站转向移动互联网产品，再进入工程、数据与 AI 领域，既做关键产品设计，也有正式主管、虚线带队和 PIC 经验。\n\n现在，她正借助 AI 改变自己的工作方式，也从没有编程基础开始，亲手做自然漫游、古诗体验等作品。项目页展示具体工作，思考文章记录经历如何改变判断，AI 创作则讲述每个念头的起因、实现过程与不足。",
      "sources": [
        {
          "title": "简历 · 职业经历",
          "href": "career.html#shopee",
          "description": "设计职责、团队经验与职业发展"
        },
        {
          "title": "项目概览",
          "href": "projects.html",
          "description": "从 AI 产品到复杂平台与设计系统"
        }
      ],
      "suggestions": [
        {
          "label": "看看 AI 经验",
          "query": "介绍一下微微的 AI 经验"
        },
        {
          "label": "了解团队经验",
          "query": "微微有哪些团队管理经验"
        }
      ]
    },
    {
      "id": "ai",
      "title": "她的 AI 产品与设计实践",
      "keywords": [
        "ai",
        "人工智能",
        "ai项目",
        "ai 项目",
        "ai经验",
        "ai 经验",
        "人机协作",
        "人机",
        "ask",
        "运维",
        "值班",
        "排障",
        "故障",
        "sre"
      ],
      "answer": "微微的 AI 实践包括三部分：在 Ask 中设计人与 AI 怎样共同完成任务；尝试让 AI 使用设计系统，走过 Figma MCP、Make 和 React 几条路径，也记录了成本、质量与设计债的问题；工作之外，借助 AI 制作自然漫游、古诗体验、社区原型、小游戏和手势实验。可以从你感兴趣的一类开始看。",
      "sources": [
        {
          "title": "Ask · AI 产品设计",
          "href": "projects/ask.html#decisions",
          "description": "专家怎样理解、授权、纠正和接管处理过程"
        },
        {
          "title": "我把设计规范交给 AI 之后",
          "href": "projects/ai-design-infrastructure.html#phase-one",
          "description": "Figma MCP、Make、React 三条路径与实际限制"
        },
        {
          "title": "AI 创作与实验",
          "href": "projects/independent.html",
          "description": "五件作品的起因、过程与可体验成果"
        }
      ],
      "suggestions": [
        {
          "label": "看看设计系统实验",
          "query": "她的 Design Skill 探索遇到了哪些问题"
        },
        {
          "label": "看看个人作品",
          "query": "介绍一下微微的 AI 创作"
        }
      ]
    },
    {
      "id": "ai-design",
      "title": "我把设计规范交给 AI 之后",
      "keywords": [
        "ai 设计探索",
        "ai设计探索",
        "design skill",
        "design md",
        "设计债",
        "设计自动化",
        "设计规范交给",
        "mcp",
        "react",
        "非标",
        "生成成本",
        "skill探索",
        "skill 探索"
      ],
      "answer": "为了让 AI 使用 Infra Design System，微微尝试了三条路径：让 Codex 经 MCP 操作 Figma、用 Design MD 约束 Figma Make，以及让 Codex 在 React 工程中按既有组件生成界面。标准稿与非标稿的质量、生成耗时和成本、生产工程衔接，各有不同限制。这轮探索没有达到她期待的稳定程度。\n\n她在文章中进一步讨论设计债：组件用对、页面能运行之后，任务范围、状态含义、异常恢复和方案取舍仍可能没有想清楚。她愿意继续把经验写进 Skill，同时用实际任务检验生成、纠正和维护的总成本。",
      "sources": [
        {
          "title": "三条实现路径",
          "href": "projects/ai-design-infrastructure.html#phase-one",
          "description": "从 Figma 画布、Make 方案到 React 工程"
        },
        {
          "title": "被省下的工作去了哪里",
          "href": "projects/ai-design-infrastructure.html#phase-three",
          "description": "设计债与仍需验证的取舍"
        }
      ],
      "suggestions": [
        {
          "label": "看设计系统建设",
          "query": "微微如何建设 Infra Design System"
        },
        {
          "label": "读另一篇 AI 思考",
          "query": "她怎么看 Smart 和 Coze 的变化"
        }
      ]
    },
    {
      "id": "when-models-plan",
      "title": "当模型自己会规划，哪些工作还值得我们设计？",
      "keywords": [
        "coze",
        "扣子",
        "deepseek",
        "梁文锋",
        "模型自己会规划",
        "模型规划",
        "工作流时代",
        "追赶",
        "长期选择",
        "值得投入",
        "smart和coze",
        "smart 和 coze"
      ],
      "answer": "微微读到扣子部分企业套餐调整的公告后，想起了曾参与的 Smart。她在文章中回看：Smart 起步时追赶 Coze 的工作流模式，借助工程拆步组织当时还不够稳定的模型能力；项目后来没有继续推进，也让她重新审视过去方案成立的前提。\n\n同一天读到的梁文锋交流报道，又让她思考长期目标与眼前机会怎样排序。文章由这些经历追问：自己做的事情在帮助谁，哪些方法需要随着模型变化调整，以及怎样把技术带来的可能落到具体的人和事上。",
      "sources": [
        {
          "title": "当时为什么需要工作流",
          "href": "projects/when-models-plan.html#workflow-value",
          "description": "Smart 的背景与模型能力变化带来的问题"
        },
        {
          "title": "比追上一个产品更难的选择",
          "href": "projects/when-models-plan.html#long-term-choices",
          "description": "报道引出的个人思考与长期选择"
        }
      ],
      "suggestions": [
        {
          "label": "看看 Smart 中的工作",
          "query": "微微在 Smart 中负责什么"
        },
        {
          "label": "看看她怎样尝试 AI",
          "query": "她的 Design Skill 探索遇到了哪些问题"
        }
      ]
    },
    {
      "id": "ask-delivery",
      "title": "Ask 的职责与交付",
      "keywords": [
        "ask职责",
        "ask 职责",
        "ask交付",
        "ask 交付",
        "高保真",
        "可交互",
        "figma make",
        "figma design",
        "生产代码",
        "交付标准",
        "ai生成",
        "ai 生成",
        "ask设计",
        "ask 设计"
      ],
      "answer": "在 Ask 中，微微以主设计师身份协同 PM 梳理角色、任务与核心流程，开展专家访谈，并设计人的授权、纠正和接管方式。从 2025 年末开始，她使用 Figma Make 制作可运行、可交互的高保真方案，设计成熟度接近交付标准。\n\n生成实现不符合当时前端团队的生产环境要求，不能直接当作生产代码使用。后续把方案整理为设计文件、业务组件与主题，用于持续修改、组件复用和团队协作。",
      "sources": [
        {
          "title": "Ask · 产品定义",
          "href": "projects/ask.html#definition",
          "description": "拉齐用户、任务与模块间的关系"
        },
        {
          "title": "Ask · 协作与交付",
          "href": "projects/ask.html#delivery",
          "description": "从可体验方案到可维护的设计资产"
        }
      ],
      "suggestions": [
        {
          "label": "人怎样控制 AI",
          "query": "Ask 如何设计人机协作"
        },
        {
          "label": "Smart 又是什么",
          "query": "微微在 Smart 中负责什么"
        }
      ]
    },
    {
      "id": "space",
      "title": "Space 的复杂平台设计",
      "keywords": [
        "space",
        "工程基础设施",
        "工程平台",
        "复杂平台",
        "复杂系统",
        "复杂产品",
        "平台设计",
        "全局理解",
        "日志",
        "log platform",
        "cmdb",
        "toc",
        "基础设施"
      ],
      "answer": "Space 是工程基础设施平台，覆盖资源、服务、观测与治理等相互关联的领域。微微从具体工具进入业务，梳理对象、状态、角色和上下游，逐步建立产品全貌与团队设计基础；工作包括产品初建、改版、持续迭代和已有产品承接。\n\n可以先看服务如何关联资源的 Service CMDB，再看日志平台如何支持调查与配置。它们是代表案例，并不等于她全部工作的范围。",
      "sources": [
        {
          "title": "Space · 从具体业务理解全局",
          "href": "projects/space.html#understanding",
          "description": "建立复杂领域的共同认知与设计基础"
        },
        {
          "title": "Space · 日志平台",
          "href": "projects/space.html#log",
          "description": "从日志调查到配置与持续质量把关"
        }
      ],
      "suggestions": [
        {
          "label": "与数据平台有什么不同",
          "query": "微微在 DataSuite 中做了什么"
        },
        {
          "label": "如何让团队接续",
          "query": "微微有哪些团队管理经验"
        }
      ]
    },
    {
      "id": "data-suite",
      "title": "DataSuite 的成熟平台体验优化",
      "keywords": [
        "datasuite",
        "data suite",
        "data infra",
        "数据平台",
        "数据开发",
        "数据治理",
        "数据分析",
        "datago",
        "data go",
        "flink",
        "dashboard",
        "data service"
      ],
      "answer": "DataSuite 面向数据开发、分析与治理。微微接手时，平台已经有成体系的产品与界面；她补充的是专业、系统的设计支持，梳理复杂任务、跨产品流程、权限边界与操作反馈。\n\nDataGo 展示不同角色怎样发现模型和查询数据，Flink 展示批量任务及依赖编排。优化在既有工程约束下推进，不能概括为从零创建平台，也没有完成全量统一或全面采用设计系统。",
      "sources": [
        {
          "title": "DataSuite · DataGo",
          "href": "projects/data-suite.html#go",
          "description": "区分数据使用者与模型维护者的任务"
        },
        {
          "title": "DataSuite · 改造范围与取舍",
          "href": "projects/data-suite.html#tradeoffs",
          "description": "在工程与组织条件下推进体验改进"
        }
      ],
      "suggestions": [
        {
          "label": "看看工程平台",
          "query": "介绍一下 Space 的平台设计"
        },
        {
          "label": "她怎样理解复杂度",
          "query": "查找复杂产品设计判断相关的文章"
        }
      ]
    },
    {
      "id": "design-system",
      "title": "Infra Design System 的建设与演进",
      "keywords": [
        "设计系统",
        "design system",
        "design systems",
        "infrad",
        "infra design system",
        "design token",
        "tokens",
        "组件库",
        "组件指南",
        "主题定制",
        "patterns",
        "templates"
      ],
      "answer": "微微发起并主导 Infra Design System 的设计侧建设，与前端共同维护。2021 年的记录呈现了多套规范并存的起点，以及组件进度、业务需求池和实现校对的具体工作；这些是建设过程中的证据。\n\n系统后来扩展到业务组件、Patterns、页面模板与使用指南。2024 年，她主导设计侧 v4 → v5 与 Design Tokens 体系化升级，支持多业务主题。持续的资产维护、团队指导和使用反馈，又帮助组件、主题与规则继续改进。\n\n今年，她进一步尝试让 AI 使用这些积累，分别探索 Figma MCP、Make 与 React 的工作方式。这轮实验没有达到她期待的稳定程度；相关过程和对设计债的担忧，在《我把设计规范交给 AI 之后》中展开。",
      "sources": [
        {
          "title": "Infra Design System · 资产体系",
          "href": "projects/infrad.html#foundation",
          "description": "组件、模式、模板与指南如何相互配合"
        },
        {
          "title": "Infra Design System · 进入日常工作",
          "href": "projects/infrad.html#adoption",
          "description": "团队使用、指导与质量检查"
        },
        {
          "title": "我把设计规范交给 AI 之后",
          "href": "projects/ai-design-infrastructure.html#assets",
          "description": "让规则被 AI 使用之后，仍需继续判断的问题"
        }
      ],
      "suggestions": [
        {
          "label": "看看业务定制",
          "query": "微微在 Smart 中负责什么"
        },
        {
          "label": "看看 AI 设计探索",
          "query": "她的 Design Skill 探索遇到了哪些问题"
        }
      ]
    },
    {
      "id": "leadership",
      "title": "带队与一线设计并行",
      "keywords": [
        "带队",
        "带团队",
        "团队管理",
        "管理经验",
        "管理",
        "leader",
        "pic",
        "主管",
        "领导力",
        "团队协作",
        "培养",
        "带教",
        "新人",
        "交接",
        "带过团队",
        "管理过团队",
        "带人"
      ],
      "answer": "她有不同阶段的管理与专业领导经验：在华讯投资担任 UI 设计部主管，带领 4 人团队；2020 年初成为 App Infra 首位设计师后，以虚线 Leader 身份带队，早期团队扩展至 5 人，同时承担重点产品设计、跨团队沟通和专业指导。2021 年工作记录保留了每周收需、Q4 排期、分阶段协作与项目交付跟踪。\n\n后来 App Infra 与 STO、TechOps 合为 Engineering Infrastructure，设计团队与支持范围扩大。2022 年专职 Manager 到岗后，她转为 PIC，曾与另一位 PIC 分别负责两个小组。之后随业务交接逐步聚焦设计系统、业务定制支持、专业指导与重点项目。",
      "sources": [
        {
          "title": "简历 · Shopee",
          "href": "career.html#shopee",
          "description": "一线设计、团队职责与专业建设"
        },
        {
          "title": "团队的工作方式",
          "href": "projects/team-operating-model.html#ownership",
          "description": "固定主责产品线与灵活调度的协作方式"
        }
      ],
      "suggestions": [
        {
          "label": "她怎样招聘设计师",
          "query": "微微有什么招聘面试经验"
        },
        {
          "label": "看看平台中的实践",
          "query": "介绍一下 Space 的平台设计"
        }
      ]
    },
    {
      "id": "hiring",
      "title": "招聘中的判断",
      "keywords": [
        "招聘",
        "面试",
        "校招",
        "社招",
        "150",
        "选人",
        "候选人",
        "招聘标准",
        "junior",
        "senior",
        "人才"
      ],
      "answer": "微微累计参与 150 场校招与社招面试，覆盖不同职级。她会追问候选人的真实贡献、领域理解与方案取舍，并结合具体任务判断能力与岗位是否匹配。150 场指面试场次，不是录用人数。\n\n一次面试中，她认可候选人的细节体验处理，但对其复杂业务能力仍有疑问。后续笔试中的领域学习、方案比较和主动求证提供了新证据，让她修正判断。文章也以服务管理页题目说明，如何观察信息组织、边界处理与设计推理。",
      "sources": [
        {
          "title": "招聘中的判断 · 从新证据修正初判",
          "href": "projects/hiring-designers.html#transfer",
          "description": "笔试与主动求证提供新的判断依据"
        },
        {
          "title": "招聘中的判断 · 服务管理页题目",
          "href": "projects/hiring-designers.html#exercise",
          "description": "通过具体任务观察复杂产品设计能力"
        }
      ],
      "suggestions": [
        {
          "label": "了解团队协作",
          "query": "微微有哪些团队管理经验"
        },
        {
          "label": "看看方法实践",
          "query": "微微怎样做用户研究和设计方法"
        }
      ]
    },
    {
      "id": "methods",
      "title": "从研究到设计判断",
      "keywords": [
        "用户研究",
        "用研",
        "设计方法",
        "研究方法",
        "方法实践",
        "体验度量",
        "质量",
        "评审",
        "prephase",
        "工作流",
        "需求整理",
        "设计定义",
        "研究经验",
        "用户访谈",
        "访谈方法",
        "最佳实践",
        "团队共建"
      ],
      "answer": "微微主导设计系统官网研究，与同事共同完成 12 位参与者的访谈与分析，分别理解前端、TPM 和设计师的真实任务，再将发现转为有优先级的改进任务。问卷设计与定性研究分别呈现，建议任务的形成不等于已经取得上线成效。\n\nDesign Prephase 是团队公认的设计最佳实践，微微参与其建设，将需求整理、参考调研、设计定义与 AI 输入组织为可复用工作方式。体验度量、自查与质量评审材料也由团队共同建设，她是参与者之一。",
      "sources": [
        {
          "title": "研究与设计方法",
          "href": "projects/design-practice.html#method",
          "description": "从近期真实任务中发现问题"
        },
        {
          "title": "Design Prephase",
          "href": "projects/design-practice.html#prephase",
          "description": "团队共同建设的设计前期最佳实践"
        }
      ],
      "suggestions": [
        {
          "label": "看看设计系统",
          "query": "微微如何建设 Infra Design System"
        },
        {
          "label": "她怎样理解复杂度",
          "query": "查找复杂产品设计判断相关的文章"
        }
      ]
    },
    {
      "id": "creative",
      "title": "AI 创作与实验",
      "keywords": [
        "ai 创作",
        "ai-native",
        "ai native builds",
        "AI 协作",
        "开源实践",
        "工作之外的创作",
        "个人创作",
        "创作",
        "独立作品",
        "个人项目",
        "allsome",
        "有点东西",
        "饼交所",
        "将进酒",
        "诗歌",
        "卷了个卷",
        "小游戏",
        "请假去公园",
        "山野漫游",
        "国家公园",
        "national parks",
        "手势粒子星球",
        "粒子星球",
        "gemini",
        "gemini canvas",
        "three.js",
        "mediapipe",
        "手势",
        "视频演示",
        "AI 协作开发"
      ],
      "answer": "这里有五项 AI 创作：山野漫游源于被国家公园项目的初心打动，海南场景可以探索，但质感、音效与动物效果仍未达到设想；《将进酒》受同事制作教辅工具启发，尝试四幕声画阅读；Allsome 希望给同事的创作一个被看见的地方，目前是交互原型，未正式上线；《卷了个卷》基于开源三消项目，借助 Codex 改造，视频展示个人版本手机实玩；手势粒子星球借助 Gemini Canvas、Three.js 与 MediaPipe 实现视觉交互实验。\n\n前三项提供外部体验入口，后两项直接播放演示视频。微微从没有编程基础开始，亲自决定做什么、怎样体验，也检查结果和不足，再借助 AI 与开源工具把构想推进到实现与调试。",
      "sources": [
        {
          "title": "AI 创作与实验总览",
          "href": "projects.html#creative",
          "description": "五项作品与直接体验入口"
        },
        {
          "title": "AI 创作记录",
          "href": "projects/independent.html",
          "description": "创作动机、制作过程与真实不足"
        }
      ],
      "suggestions": [
        {
          "label": "看看职业中的 AI 实践",
          "query": "介绍一下微微的 AI 经验"
        },
        {
          "label": "联系微微",
          "query": "如何联系微微"
        }
      ]
    },
    {
      "id": "smart",
      "title": "Smart 中的主题与组件支持",
      "keywords": [
        "smart",
        "agent平台",
        "agent 平台",
        "节点",
        "资源挂载",
        "业务组件",
        "主题指导",
        "配置区",
        "agent编排"
      ],
      "answer": "Smart 是支持 Agent 配置、工作流编排、测试与发布的平台，起步时参考了 Coze 的工作流模式。微微从设计系统侧指导主题定制，与项目设计师共建业务组件并参与专业评审；产品一线需求和页面设计由负责同事推进。\n\n她的工作围绕节点、资源与配置，区分对象类型、运行状态和可用操作。项目后来没有继续推进，她在文章中回看当时工程拆步的背景，并讨论模型能力变化后，哪些工作仍值得投入。",
      "sources": [
        {
          "title": "Smart · AI 应用构建与编排平台",
          "href": "projects/smart.html#product",
          "description": "从完整页面了解 Single Agent、Multi-Agent 与 Workflow"
        },
        {
          "title": "Smart · 挂载资源与可用状态",
          "href": "projects/smart.html#assets",
          "description": "说明资源已挂载后仍不可用的原因与可执行操作"
        },
        {
          "title": "Smart · 主题与共用基础",
          "href": "projects/smart.html#theme",
          "description": "在共同语义上保留业务差异"
        },
        {
          "title": "当模型自己会规划，哪些工作还值得我们设计？",
          "href": "projects/when-models-plan.html#workflow-value",
          "description": "从参与 Smart 的经历重新审视工作流与长期选择"
        }
      ],
      "suggestions": [
        {
          "label": "看看 Ask 的主设计职责",
          "query": "Ask 中微微具体负责什么，如何交付"
        },
        {
          "label": "读读工作流的反思",
          "query": "她怎么看 Smart 和 Coze 的变化"
        }
      ]
    },
    {
      "id": "think-tank",
      "title": "腾讯大湘网期间的智库网站设计",
      "keywords": [
        "智库",
        "智库网站",
        "国务院发展研究中心",
        "中国智库网",
        "腾讯大湘网",
        "大湘网"
      ],
      "answer": "在腾讯大湘网任职期间，微微为国务院发展研究中心相关智库网站提供设计支持，设计方案沿用多年。这项工作归属于她在腾讯大湘网的任职经历，与门户网站、专题及新功能设计一起呈现。",
      "sources": [
        {
          "title": "腾讯大湘网 · 智库网站设计支持",
          "href": "career.html#career-3",
          "description": "任职期间的网站设计支持与方案沿用"
        }
      ],
      "suggestions": [
        {
          "label": "查看完整简历",
          "query": "介绍微微的职业经历"
        },
        {
          "label": "看看复杂平台项目",
          "query": "介绍 Space 的平台设计"
        }
      ]
    },
    {
      "id": "contact",
      "title": "联系微微本人",
      "keywords": [
        "联系",
        "微信",
        "邮箱",
        "邮件",
        "联系方式",
        "合作",
        "岗位",
        "机会",
        "约聊",
        "沟通",
        "薪酬",
        "薪资",
        "到岗",
        "入职时间"
      ],
      "answer": "可以通过网站右上角的「联系」查看微信、邮箱与电话。岗位、合作方式、薪酬和可到岗时间等，需要由微微本人与你沟通。\n\n你可以带上正在关注的岗位或项目，以及最想了解的问题，方便她直接回应。这个助手不会代你发送消息，也不会替本人确认任何安排。",
      "sources": [
        {
          "title": "联系微微",
          "href": "career.html#contact",
          "description": "打开顶部联系卡"
        },
        {
          "title": "查看简历",
          "href": "career.html",
          "description": "带着具体经历与职责继续交流"
        }
      ],
      "suggestions": [
        {
          "label": "先了解她的经历",
          "query": "用 30 秒介绍一下微微"
        },
        {
          "label": "看看代表项目",
          "query": "推荐一个复杂平台设计案例"
        }
      ]
    }
  ],
  "routes": [
    {
      "title": "首页",
      "href": "index.html",
      "keywords": [
        "首页",
        "主页",
        "微微",
        "介绍",
        "工牌"
      ],
      "description": "认识段微微的专业领域、代表项目与思考。"
    },
    {
      "title": "项目概览",
      "href": "projects.html",
      "keywords": [
        "项目",
        "作品",
        "案例",
        "项目目录",
        "全部项目"
      ],
      "description": "按 AI 产品、工程与数据平台、系统方法和 AI 创作浏览。"
    },
    {
      "title": "思考",
      "href": "insights.html",
      "keywords": [
        "思考",
        "文章",
        "观点",
        "全部文章",
        "设计思考",
        "AI 与时代",
        "产品与判断",
        "团队与方法"
      ],
      "description": "七篇思考，依次围绕 AI 与时代、产品与判断、团队与方法，记录经历如何改变选择。"
    },
    {
      "title": "简历与专业能力",
      "href": "career.html",
      "keywords": [
        "职业",
        "经历",
        "履历",
        "简历",
        "PDF",
        "下载简历",
        "下载 PDF",
        "教育",
        "学校",
        "中南大学",
        "Shopee",
        "华讯",
        "竹马",
        "潇湘晨报",
        "腾讯",
        "毕业",
        "学历",
        "本科",
        "智库",
        "国务院发展研究中心",
        "腾讯大湘网",
        "关于",
        "个人信息",
        "联系",
        "微信",
        "邮箱",
        "个人介绍"
      ],
      "description": "专业能力、职业与教育经历、团队实践，以及 PDF 简历下载入口。"
    },
    {
      "title": "让 AI 逐步承接值班工作，让人掌握关键判断。",
      "href": "projects/ask.html",
      "keywords": [
        "Ask",
        "AI",
        "人机协作",
        "运维",
        "值班",
        "故障",
        "授权",
        "纠正",
        "接管",
        "SOP"
      ],
      "description": "Ask 是 AI 运维值班与故障处置平台，以 AI 逐步承接一线值班工作为目标。从问题受理、诊断到处置与复盘，设计把专家的授权、纠正和接管落实到具体任务中。"
    },
    {
      "title": "从具体产品深入全局，建立工程平台的设计基础。",
      "href": "projects/space.html",
      "keywords": [
        "Space",
        "工程平台",
        "基础设施",
        "复杂平台",
        "全局理解",
        "TOC",
        "CMDB",
        "日志",
        "资源",
        "监控"
      ],
      "description": "Space 是 Shopee Engineering Infrastructure 建设的工程基础设施平台，覆盖 100+ 子产品，连接服务归属、资源管理、工程交付、运行观测与治理等能力，为工程团队提供跨产品协作的工作环境。"
    },
    {
      "title": "让不同产品，共用一套可持续演进的设计基础。",
      "href": "projects/infrad.html",
      "keywords": [
        "InfraD",
        "Infra Design System",
        "设计系统",
        "组件",
        "Design Tokens",
        "主题",
        "Patterns",
        "Templates"
      ],
      "description": "Infra Design System 是面向企业级产品的设计系统，连接组件、业务模式、页面模板与使用指南。通过体系化的 Design Tokens 支持跨产品复用和多业务主题，让设计、产品与前端能够在共同基础上持续工作。"
    },
    {
      "title": "为 AI 应用构建平台，共建可复用的业务组件。",
      "href": "projects/smart.html",
      "keywords": [
        "Smart",
        "Agent",
        "编排",
        "节点",
        "资源",
        "主题指导",
        "业务组件"
      ],
      "description": "Smart 将模型、知识与工具组合成可配置、调试和发布的 AI 应用，支持 Single Agent、Multi-Agent 与 Workflow。微微从设计系统侧指导主题定制、共建业务组件并参与评审。"
    },
    {
      "title": "在成熟数据平台上，建立专业设计支持。",
      "href": "projects/data-suite.html",
      "keywords": [
        "DataSuite",
        "Data Suite",
        "Data Infra",
        "数据平台",
        "DataGo",
        "Flink",
        "Dashboard",
        "Data Service",
        "数据治理",
        "数据开发"
      ],
      "description": "DataSuite 是 Shopee Data Infrastructure 建设的数据开发、分析与治理平台，包含 20+ 产品与平台模块，连接数据接入、加工、运行保障、资产发现与消费等工作，为数据工程师、分析人员和业务团队提供协作环境。"
    },
    {
      "title": "把好奇，做成可以体验的作品。",
      "href": "projects/independent.html",
      "keywords": [
        "个人创作",
        "独立作品",
        "Allsome",
        "有点东西",
        "将进酒",
        "卷了个卷",
        "游戏",
        "诗歌",
        "国家公园",
        "national parks",
        "AI 协作开发",
        "AI 创作",
        "AI-Native Builds",
        "手势粒子星球",
        "Gemini",
        "Three.js",
        "MediaPipe",
        "视频演示"
      ],
      "description": "五件 AI 创作的起因、实现过程与不足：自然漫游、古诗体验、社区原型、微信小游戏和手势粒子星球。"
    },
    {
      "href": "projects/when-models-plan.html",
      "keywords": [
        "AI 与时代",
        "AI",
        "Coze",
        "扣子",
        "Smart",
        "DeepSeek",
        "梁文锋",
        "工作流",
        "模型规划",
        "追赶",
        "长期选择"
      ],
      "title": "当模型自己会规划，哪些工作还值得我们设计？",
      "description": "从 Smart 追赶 Coze 的经历，到读到 DeepSeek 报道后的触动，重新想想有限的时间应该投向哪里。"
    },
    {
      "title": "我把设计规范交给 AI 之后",
      "href": "projects/ai-design-infrastructure.html",
      "keywords": [
        "AI",
        "设计责任",
        "AI工作流",
        "AI 工作流",
        "规则",
        "上下文",
        "Skill",
        "MCP",
        "原型",
        "代码",
        "人机协作",
        "AI 与时代",
        "Design MD",
        "Figma Make",
        "React",
        "设计债",
        "非标",
        "生成成本",
        "AI 设计探索"
      ],
      "description": "试过 Figma MCP、Make 和 React 三条路径，仍没有得到期待的自动化方案。那些没能交出去的取舍，让我开始担心设计债。"
    },
    {
      "title": "专业工具的复杂度，究竟藏在哪里？",
      "href": "projects/complex-product-decisions.html",
      "keywords": [
        "复杂度",
        "复杂产品",
        "设计判断",
        "产品判断",
        "对象关系",
        "筛选",
        "Filter",
        "Table",
        "Side Menu",
        "导航",
        "产品与判断"
      ],
      "description": "从 DataGo 的角色划分到 TOC 的操作范围，沿着人的工作理解页面为什么复杂。"
    },
    {
      "title": "Design System 与 Infrastructure，都在为上层工作建立基础。",
      "href": "projects/systems-and-infrastructure.html",
      "keywords": [
        "结构",
        "复用",
        "系统",
        "分层",
        "基础",
        "Infrastructure",
        "Design System",
        "抽象",
        "治理",
        "产品与判断"
      ],
      "description": "公共组件应该承接多少差异？从 InfraD 与 DataSuite 的实践，讨论共用、迁移和持续维护。"
    },
    {
      "title": "团队的工作方式，也要随业务阶段改变。",
      "href": "projects/team-operating-model.html",
      "keywords": [
        "团队",
        "协作",
        "带队",
        "PIC",
        "Leader",
        "排期",
        "评审",
        "培养",
        "带教",
        "公共人力池",
        "管理",
        "团队与方法"
      ],
      "description": "从早期五人团队的收需与排期，到后来的分组支持，记录任务怎样安排、知识怎样交接。"
    },
    {
      "title": "招聘时，怎样识别复杂产品设计能力？",
      "href": "projects/hiring-designers.html",
      "keywords": [
        "招聘",
        "面试",
        "校招",
        "社招",
        "候选人",
        "选人",
        "培养",
        "150",
        "职级",
        "团队与方法"
      ],
      "description": "两类笔试曾改变我的面谈判断。沿着候选人的实际做法，重新理解能力与岗位的匹配。"
    },
    {
      "title": "从用户的真实任务，走到有依据的设计判断。",
      "href": "projects/design-practice.html",
      "keywords": [
        "研究",
        "用研",
        "用户研究",
        "访谈",
        "体验度量",
        "自查",
        "Design Prephase",
        "设计定义",
        "需求整理",
        "工作流",
        "团队与方法"
      ],
      "description": "一次官网研究，为什么最后走进了 Figma？从具体任务出发，把发现变成下一轮设计的输入。"
    }
  ]
};
