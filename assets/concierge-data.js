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
      },
      {
        "label": "她怎么看 AI 时代的设计",
        "query": "她怎么看 AI 对设计的影响"
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
      "answer": "微微的 AI 实践包括三部分：在 Ask 中设计人与 AI 怎样共同完成任务——AI 提建议、执行，人在关键节点授权、纠正、接管；尝试让 AI 使用设计系统，走过 Figma MCP、Make 和 React 三条路径——经 MCP 操作画布偏慢，Make 或直接生成很快，在已有 React 组件的工程里生成时间可以接受，但只擅长标准界面；工作之外，借助 AI 制作自然漫游、古诗体验、社区原型、小游戏和手势实验。可以从你感兴趣的一类开始看。",
      "sources": [
        {
          "title": "Ask · AI 产品设计",
          "href": "projects/ask.html#decisions",
          "description": "专家怎样理解、授权、纠正和接管处理过程"
        },
        {
          "title": "2025 年末，规则都在我脑子里",
          "href": "projects/ai-design-infrastructure.html#phase-one",
          "description": "Ask 的早实践、蒸馏失败与 CTO 约见"
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
      "title": "我试着把自己蒸馏给 AI，只成功了一部分。",
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
      "answer": "2025 年末，微微用 Figma Make 做出了 Ask 的可运行高保真方案——那时大家还没开始用 AI 直接生成产品页面，完整的大型产品更没有先例。她算实践得比较早的一批：当时没有 Design MD 约束，所有规则都在她脑子里，哪些地方拆成 Biz Component 也是先在脑子里成了体系。之后团队 Design Manager 安排专人，把她上千轮对话交给 AI 总结，想复制这条路，没有成功；后来 CTO 专门约见她，问怎么用 AI 做设计；Figma 的产品负责人也来问她怎么用 Make 做大型产品，还邀请她分享案例——涉及内部信息，只能拒绝。\n\n她后来的一系列尝试，本质上是试图把一个专家设计师「蒸馏」成 AI 能理解的规范：Codex 经 MCP 操作 Figma、用 Design MD 约束 Figma Make、让 Codex 在 React 工程里按组件生成。三条路有快有慢，但只擅长标准界面。蒸馏到最后，能写出来的只有标准规范；最有价值的判断——为什么拆组件、哪种差异必须保留、什么风险不能放行——没法蒸馏。",
      "sources": [
        {
          "title": "2025 年末，规则都在我脑子里",
          "href": "projects/ai-design-infrastructure.html#phase-one",
          "description": "Ask 的早实践、蒸馏失败与 CTO 约见"
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
      "title": "当模型自己会规划，哪些判断还值得人做？",
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
      "answer": "微微读到扣子企业套餐调整的公告，想起参与过的两个产品：Smart 的工作流模式与 Coze 类似——不是追赶谁，企业内部考虑信息安全一般选择自建；Ask 的可执行 SOP 也是同一种模式。两个产品做的时候都是公司级重点项目，现在都安静了下来。\n\n她的判断：给模型补短板的中间层，寿命等于短板的寿命。行业把 AGI 当作主线，梁文锋在 2026 年 5 月与投资人的闭门交流里说，C 端和 B 端都是做 AGI 路上的副产物、中间的产出——工作流、SOP 平台就是这类形态，让事情跑起来，也会在补上短板后退场；设计系统不在这个类别里，它沉淀判断，只是会换使用者。形态会退场，但留下了一条分界：被吸收的是执行，接不走的四件事是定义问题、承担后果、模糊取舍、说服与交接。Ask 的经历就是把这条分界产品化：让 AI 承接任务，人在关键节点授权、纠正、接管。",
      "sources": [
        {
          "title": "两个风风火火的产品，安静下来之后",
          "href": "projects/when-models-plan.html#workflow-value",
          "description": "Coze 公告与 Smart、Ask 的兴衰"
        },
        {
          "title": "被吸收的是执行，接不走的是判断",
          "href": "projects/when-models-plan.html#long-term-choices",
          "description": "四件事与 Ask 的产品化"
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
      "answer": "在 Ask 中，微微以主设计师身份，在接手时只剩三天的筹备期里协同多位 TPM 梳理角色、任务与核心流程，开展专家访谈，并设计人的授权、纠正和接管方式。从 2025 年末开始，她使用 Figma Make 制作可运行、可交互的高保真方案；三天内做出首版，与 Figma Make 的对话累计约一千轮——当时公司里还没有设计师用这种方式做出过可运行的大型产品方案。\n\nMake 生成的是 Figma 自己的前端实现，不符合公司生产环境要求，当时无法直接采用。基本定稿后，她把方案整理为设计文件、业务组件与主题，用于持续修改、组件复用和团队协作。",
      "sources": [
        {
          "title": "Ask · 接手与首版",
          "href": "projects/ask.html#definition",
          "description": "三天拼出产品全貌，可运行方案通过评审"
        },
        {
          "title": "Ask · SOP 与交付",
          "href": "projects/ask.html#assets",
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
        "service cmdb",
        "server cmdb",
        "基础设施"
      ],
      "answer": "Space 是工程基础设施平台，覆盖资源、服务、观测与治理等相互关联的领域。微微从具体工具进入业务，梳理对象、状态、角色和上下游，逐步建立产品全貌与团队设计基础；工作包括产品初建、改版、持续迭代和已有产品承接。\n\n可以先看 Service CMDB 怎么理清多层结构，再看 Server CMDB 怎么支持专业查询。它们是代表案例，并不等于她全部工作的范围。",
      "sources": [
        {
          "title": "Space · 先看整个工程世界",
          "href": "projects/space.html#context",
          "description": "平台范围、两种角色与九领域全景"
        },
        {
          "title": "Space · 日志平台",
          "href": "projects/space.html#log",
          "description": "搭建设计基础、指导后续设计与质量责任"
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
        "数据平台",
        "数据开发",
        "数据治理",
        "datago",
        "flink",
        "dashboard",
        "data service",
        "api testing",
        "取数",
        "看板",
        "接口测试",
        "权限"
      ],
      "answer": "DataSuite 面向数据开发、分析与治理。微微接手时，平台已经有成体系的产品与界面；她补充的是专业、系统的设计支持，梳理复杂任务、跨产品流程、权限边界与操作反馈。\n\n按四个产品看她的工作：DataGo 讲一次查询怎样说清数据来源、取数与权限；Dashboard 讲编辑看板时配置与图表的对应关系；Flink 讲触发流水线后怎样追到具体失败步骤；Data Service 讲怎样读懂接口并发起调用。优化在既有工程约束下推进，不能概括为从零创建平台，也没有完成全量统一或全面采用设计系统。",
      "sources": [
        {
          "title": "DataSuite · 一次查询的起点与权限边界",
          "href": "projects/data-suite.html#go",
          "description": "模型发现、查询配置与权限变化"
        },
        {
          "title": "DataSuite · 存量条件与渐进支持",
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
      "answer": "Infra Design System 由微微主导从 0 到 1 建设，并在之后持续升级迭代：设计侧建设、Design Tokens 体系化升级、UI Kit 维护与全组件指南。实现部分与前端共同维护。\n\n2024 年她推动 v4 → v5 设计侧升级，把 Token 机制转成设计资产；以新增文字颜色层级这类调整为例，连同设计与工程落地的完整改动，从 2–3 周缩短到最快半小时。2023 年她休产假期间，产品团队主导了 Space 的 UI/UX Standards，返岗后她接手把已落地资产整理到 Space Biz Component。团队使用上，部分常规需求由 TPM 基于模板搭建，设计师参与关键判断与质量检查。",
      "sources": [
        {
          "title": "InfraD · 从分散工具到共同基础",
          "href": "projects/infrad.html#context",
          "description": "0 到 1 的建设与 Space Standards 时间线"
        },
        {
          "title": "InfraD · Space 升级后改变了什么",
          "href": "projects/infrad.html#benefits",
          "description": "取值依据与完整改动时间"
        },
        {
          "title": "InfraD · 让资产进入团队日常工作",
          "href": "projects/infrad.html#adoption",
          "description": "指南、Patterns、TPM 与质量检查"
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
      "answer": "她有不同阶段的管理与专业领导经验：在华讯投资担任 UI 设计部主管，带领 4 人团队；2020 年初成为 App Infra 首位设计师后，作为虚线 Leader 服务 Infra 期间，团队从 1 人扩展到 5 人，同时承担重点产品设计、跨团队沟通和专业指导。2021 年工作记录保留了每周收需、Q4 排期、分阶段协作与项目交付跟踪。\n\n后来 App Infra 与 STO、TechOps 合为 Engineering Infrastructure，设计团队与支持范围扩大。2022 年团队划入 Infra、专职 Manager 同期到岗后，她卸下管理职能、转为分组 PIC，曾与另一位 PIC 分别负责两个小组。之后随业务交接逐步聚焦设计系统、业务定制支持、专业指导与重点项目。文章记录的是她作为管理者那段时期用到的方式。",
      "sources": [
        {
          "title": "简历 · Shopee",
          "href": "career.html#shopee",
          "description": "一线设计、团队职责与专业建设"
        },
        {
          "title": "带团队",
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
      "answer": "微微累计参与 150 场校招与社招面试，覆盖不同职级；150 场指面试场次，不是录用人数。她还带教过 Infra 设计团队的每一位新成员。她的招聘判断是逐步形成的：做虚线 Leader 时，招人不归她管，招来什么人、她用什么人；团队并入 Infra 后，她以专家身份负责招聘的专业面试轮，才真正参与人选判断。面试里她追问候选人的真实贡献、领域理解与方案取舍，并结合具体任务判断能力与岗位是否匹配。\n\n一次面试中，她认可候选人的细节体验处理，但对其复杂业务能力仍有疑问。后续笔试中的领域学习、方案比较和主动求证提供了新证据，让她修正判断。文章也以服务管理页题目说明，如何观察信息组织、边界处理与设计推理。",
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
      "answer": "微微有三套让设计判断有依据的专业手法。第一，用研：主导设计系统官网研究，与同事共同完成 12 位参与者的访谈，请他们重走真实任务路径、观察停顿与思考出声，再用分角色问卷补充覆盖面，把发现转为有优先级的改进任务。第二，体验度量：团队共建的度量模型（有效性、易用度、接受度）、设计自查表与质量评价规则三件工具，把「体验好坏」变成可衡量的标准。第三，Design Prephase：她参与建设的前期设计方法，包含需求整理、参考调研、设计定义、AI 设计输入、用户反馈分析、交付审计与流程编排七项能力，后来封装成插件，插件只是形式。体验度量、自查与质量评审材料也由团队共同建设，她是参与者之一。",
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
      "title": "Smart 与 Ask 的可执行 SOP",
      "keywords": [
        "smart",
        "agent平台",
        "agent 平台",
        "节点",
        "资源挂载",
        "业务组件",
        "主题指导",
        "工作流",
        "workflow",
        "中间态"
      ],
      "answer": "Smart 是支持 Agent 配置、工作流编排、测试与发布的平台。Ask 的可执行 SOP 就是用它的工作流模式搭出来的——把处理步骤编排成节点流程，配上参数与人工确认，再由 Ask 调用。微微从设计系统侧指导主题定制，与项目设计师共建业务组件并参与专业评审；产品一线需求和页面设计由负责同事推进。她在 Ask 篇中回看：Ask 与 Smart 都是模型还不够强时的中间形态，等模型自己会规划，这一层会被吸收或重组。",
      "sources": [
        {
          "title": "Ask · 可执行 SOP 背后的工作流平台",
          "href": "projects/ask.html#smart",
          "description": "Smart 的编排、参数与主题，以及中间态判断"
        },
        {
          "title": "Ask · 处理经验要能调用，也要能维护",
          "href": "projects/ask.html#assets",
          "description": "可执行 SOP 与人工文档两条路径"
        }
      ],
      "suggestions": [
        {
          "label": "Ask 的 SOP 怎么执行",
          "query": "Ask 如何设计人机协作"
        },
        {
          "label": "什么是中间态",
          "query": "当模型自己会规划，哪些工作还值得我们设计"
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
      "description": "六篇思考，依次围绕 AI 与时代、产品与判断、团队与方法：每一篇回答一个复杂系统里的判断问题，并给出成立的条件。"
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
      "description": "Infra Design System 是面向企业级产品的设计系统，连接组件、业务模式、页面模板与使用指南。通过体系化的 Design Tokens 和业务主题，让不同产品可以共用基础，也能保留各自需要的表达。"
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
      "description": "模型还不擅长自己规划的时代，工作流是必要的中间态。模型自己会规划之后，这层中间态正在失去前提——被吸收的是执行，接不走的是判断。"
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
      "description": "把规范写得再全，还是有些判断我没能交给 AI。我担心的不是 AI 的速度，而是被省掉的思考会变成设计债。"
    },
    {
      "title": "把体系的复杂度，组织成页面上的秩序",
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
      "description": "工程基础设施这类产品的复杂度有两个来源：页面背后的技术体系，和使用它工作的人。设计不能消灭复杂度，只能把它组织成页面上的秩序。"
    },
    {
      "title": "带团队，就是让工作有人接得住",
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
      "description": "我作为虚线 Leader 服务 Infra 期间，团队从 1 人到 5 人。这篇文章讲的是我作为管理者的那段时期用到的方式。"
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
      "description": "我参与过 150 场校招与社招面试，也带教过 Infra 设计团队的每一位新成员。值得追问的不是他做过什么，而是他怎样工作。"
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
      "description": "设计判断不能只靠感觉。用研、体验度量与前期设计方法，三套手法让判断有依据。"
    }
  ]
};
