export type LinkItem = {
  label: string;
  url: string;
  kind: "website" | "github" | "article" | "blog" | "video" | "demo" | "post" | "devpost" | "resume";
};

export type VentureItem = {
  name: string;
  role: string;
  headline: string;
  summary: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  links: LinkItem[];
};

export type ProjectItem = {
  hook: string;
  title: string;
  role: string;
  summary: string;
  highlight: string;
  tech: string[];
  image?: string;
  imageAlt?: string;
  links: LinkItem[];
  featured: boolean;
};

export type ProofItem = {
  label: string;
  source: string;
  url: string;
  kind: "article" | "blog" | "video" | "award" | "patent" | "post";
};

export type ThemePillar = {
  title: string;
  description: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

export type LegacyProjectItem = {
  title: string;
  summary: string;
  url: string;
  image: string;
  imageAlt: string;
};

export type ResearchItem = {
  label: string;
  title: string;
  context: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
};

export const profile = {
  name: "Mrunmayee Rane",
  title: "Gen AI/ML Engineer",
  location: "Santa Clara, California",
  email: "mrunmayeerane09@gmail.com",
  github: "https://github.com/mrunmayee17",
  linkedin: "https://www.linkedin.com/in/mrunmayeerane/",
  resume: "https://drive.google.com/file/d/1XLYxy5C8aVAjf5APIpbIc8vsVBy9A-qB/view?usp=sharing",
  profileImage: "/project-images/profile-img.jpg",
  heroTitle: "I build AI products that move from idea to real workflow fast.",
  heroSummary:
    "I build scalable systems across fullstack engineering, machine learning, and generative AI, with a focus on turning strong technical ideas into useful products.",
  closingStatement:
    "I like turning ambiguous AI ideas into crisp products with a reason to exist.",
};

export const proofRibbon = [
  "CTO at Krama, Inc",
  "Founding MLE at Flavor",
  "System Software Engineer at NVIDIA, Autonomous Vehicles",
  "Winner of the LLM x Law Stanford Hackathon",
  "Winner Agent2Agent Hackathon",
  "Winner of Gemini 3 Super Hacks",
  "2nd place winner Gemini 3 Super Hacks",
  "Patent accepted in GraphRAG for Autonomous Vehicles",
  "Software Engineer Intern at Marqeta",
  "Analyst Intern at Bank of India",
];

export const ventures: VentureItem[] = [
  {
    name: "Krama, Inc.",
    role: "CTO",
    headline: "Krama is a workflow-intelligence productivity app built on GraphRAG.",
    summary:
      "It captures and understands a user's workflow, then transforms that knowledge into actionable insights, skill files, and agents. At Krama, I have full stack ownership across product, engineering, and customers. My work spans product direction, workflow intelligence, and the technical execution needed to turn context into something genuinely useful.",
    tags: ["Product strategy", "AI systems", "Founder execution", "Workflow intelligence"],
    image: "/project-images/Krama.png",
    imageAlt: "Krama workflow analysis interface.",
    links: [
      { label: "Website", url: "https://www.krama-ai.com/", kind: "website" },
      { label: "Product demo", url: "https://www.youtube.com/watch?v=lxSqhRX97LE&feature=youtu.be", kind: "video" },
    ],
  },
  {
    name: "Flavor",
    role: "Founding MLE",
    headline: "Personalized food discovery over WhatsApp, built around real preferences instead of generic search.",
    summary:
      "Flavor started from a simple pain point: finding food that actually fits taste, dietary constraints, and context. I built the ML backbone around RAG, Yelp data, Twilio-based messaging, and retrieval that could turn vague cravings into useful recommendations.",
    tags: ["RAG", "WhatsApp", "FastAPI", "Recommendations"],
    image: "/project-images/Flavorapp.gif",
    imageAlt: "Flavor app interface for conversational food recommendations.",
    imagePosition: "top",
    links: [
      {
        label: "Technical write-up",
        url: "https://medium.com/@mrunmayeerane17/personalized-food-recommendation-rag-bot-on-whatsapp-8362c23076fb",
        kind: "blog",
      },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    hook: "Conflict checks should not depend on someone reading every line twice.",
    title: "JurisLink",
    role: "Builder - Knowledge graph conflict of interest engine",
    summary:
      "A legal AI system that maps entities, relationships, and arbitration context to surface conflicts of interest faster. Built in a high-pressure hackathon setting with a knowledge graph approach designed for practical legal review.",
    highlight: "Winner of Stanford LLMxLaw Hackathon #5.",
    tech: ["Knowledge graphs", "LLMs", "Legal AI", "Entity linking"],
    image: "/project-images/legacy-jurislink.png",
    imageAlt: "Interactive graph view from the JurisLink project.",
    links: [
      { label: "GitHub", url: "https://github.com/mrunmayee17/llmxlaw", kind: "github" },
      {
        label: "News coverage",
        url: "https://www.edtechinnovationhub.com/news/jus-mundi-and-stanford-codex-hackathon-team-creates-ai-tool-to-uncover-legal-conflicts-in-arbitration",
        kind: "article",
      },
      {
        label: "LinkedIn post",
        url: "https://www.linkedin.com/posts/mrunmayeerane_what-if-your-next-conflict-check-came-activity-7320897659181879298-p8rm/",
        kind: "post",
      },
    ],
    featured: true,
  },
  {
    hook: "When growth drops, the hard part is turning signals into shipped experiments.",
    title: "GrowthLabs",
    role: "Builder - Multi ambient agent platform",
    summary:
      "A closed-loop growth operations system that detects traffic drops, finds root-cause signals across the web, proposes experiments, and pushes human-approved actions into team workflows. Built to compress signal-to-shipping time from days to minutes.",
    highlight: "Winner for best use of Mixpanel at the A2A Agents Hackathon.",
    tech: ["Agent workflows", "Mixpanel", "Slack", "Jira", "Bright Data"],
    image: "/project-images/growthlabs.png",
    imageAlt: "GrowthLabs ambient agent control room interface.",
    links: [
      { label: "GitHub", url: "https://github.com/mrunmayee17/growthLabs", kind: "github" },
      { label: "Devpost", url: "https://devpost.com/software/growth-labs?ref_content=my-projects-tab&ref_feature=my_projects", kind: "devpost" },
    ],
    featured: true,
  },
  {
    hook: "Investment research gets more useful when forecasts and agent judgment are forced into the same room.",
    title: "AlphaEdge",
    role: "Builder - AI investment research platform",
    summary:
      "AlphaEdge is an AI investment research platform with two layers: a forecasting layer powered by foundation models like Chronos and FinCast LoRA, and a committee layer where five specialist agents across quant, fundamentals, sentiment, risk, and macro debate the evidence to produce a final investment memo. I fine-tuned FinCast with LoRA on 10 futures contracts - ES, NQ, RTY, YM, ZN, ZB, CL, NG, GC, and HG - improving holdout directional accuracy from 0.5263 to 0.5806 and rank IC from -0.0016 to 0.0692.",
    highlight: "FinCast LoRA fine-tuning improved holdout directional accuracy by +0.0543 and rank IC by +0.0707.",
    tech: ["FinCast LoRA", "FastAPI", "React", "Redis", "Agent systems", "Forecasting"],
    image: "/project-images/alphaedge-dashboard.png",
    imageAlt: "AlphaEdge dashboard showing alpha forecast results.",
    links: [
      { label: "GitHub", url: "https://github.com/mrunmayee17/AlphaEdge", kind: "github" },
      { label: "Live app", url: "https://alpha-edge-iota.vercel.app", kind: "website" },
    ],
    featured: true,
  },
  {
    hook: "Volumetric capture should feel more autonomous and less like a production bottleneck.",
    title: "SkyStudio",
    role: "Builder - Autonomous drone volumetric capture",
    summary:
      "A drone-focused capture concept exploring how autonomous systems can collect richer spatial data for volumetric workflows. The project frames autonomy as a creative tool, not just a robotics problem.",
    highlight: "2nd place winner at Gemini 3 Super Hacks.",
    tech: ["Autonomous drones", "3D capture", "Spatial systems", "Computer vision"],
    image: "/project-images/legacy-skystudio.png",
    imageAlt: "SkyStudio drone simulation and control interface.",
    links: [
      { label: "GitHub", url: "https://github.com/mrunmayee17/gemini3superhack_skystudio", kind: "github" },
      { label: "Video", url: "https://x.com/cerebral_valley/status/2021289272310149237?s=46&t=6U8W_LK5OXJ9MTMlmP7FHA", kind: "video" },
      { label: "Event page", url: "https://cerebralvalley.ai/e/gemini-3-superhack", kind: "article" },
    ],
    featured: true,
  },
  {
    hook: "Career support gets better when context follows you across tools and agents.",
    title: "Multi Agent Career Workplace Assistant",
    role: "Builder - Career and workplace assistant",
    summary:
      "A multi-agent assistant designed to help with workplace and career workflows by coordinating context, tasks, and guidance across a more realistic user journey than a single chat surface allows.",
    highlight: "Featured in the Milvus Project newsletter after the Stanford hackathon.",
    tech: ["Multi-agent systems", "Workflow automation", "RAG", "Career tooling"],
    image: "/project-images/legacy-career-worplace-assistant.png",
    imageAlt: "Career and Workplace Assistant interface.",
    links: [
      {
        label: "Blog",
        url: "https://medium.com/@mrunmayeerane17/building-a-multi-agent-career-and-workplace-assistant-at-stanford-hackathon-e1ef873c8e0d",
        kind: "blog",
      },
      {
        label: "Newsletter mention",
        url: "https://www.linkedin.com/pulse/hackathon-recap-rag-deepseek-milvus-more-the-milvus-project-dghyf/",
        kind: "article",
      },
      { label: "GitHub", url: "https://github.com/mrunmayee17/Career_and_Workplace_Assistant", kind: "github" },
    ],
    featured: true,
  },
  {
    hook: "Sensor failures are not just noisy logs. They are graph problems hiding in plain sight.",
    title: "Sensor Log Analysis using GraphRAG for Autonomous Vehicles",
    role: "Builder - Patent filed and accepted",
    summary:
      "Built during the NVIDIA + ArangoDB Hackathon, this GraphRAG-based sensor log analysis system for autonomous vehicles combines graph analytics, natural-language querying, and dependency tracing to make root-cause detection faster and more usable. The resulting work led to an accepted patent, later inspired my startup TensorSurf, and helped me secure interviews with YC and SPC.",
    highlight: "Built at the NVIDIA + ArangoDB Hackathon, with the work later leading to an accepted patent.",
    tech: ["GraphRAG", "ArangoDB", "cuGraph", "Streamlit", "LLMs"],
    image: "/project-images/legacy-sensorfailure-analysis.png",
    imageAlt: "Graph-based sensor failure visualization for autonomous vehicles.",
    links: [
      { label: "Devpost", url: "https://devpost.com/software/sensor-log-analysis-for-autonomous-vehicles", kind: "devpost" },
    ],
    featured: true,
  },
];

export const proofItems: ProofItem[] = [
  {
    label: "Krama product walkthrough",
    source: "YouTube",
    url: "https://www.youtube.com/watch?v=lxSqhRX97LE&feature=youtu.be",
    kind: "video",
  },
  {
    label: "Flavor technical write-up",
    source: "Medium",
    url: "https://medium.com/@mrunmayeerane17/personalized-food-recommendation-rag-bot-on-whatsapp-8362c23076fb",
    kind: "blog",
  },
  {
    label: "JurisLink coverage",
    source: "EdTech Innovation Hub",
    url: "https://www.edtechinnovationhub.com/news/jus-mundi-and-stanford-codex-hackathon-team-creates-ai-tool-to-uncover-legal-conflicts-in-arbitration",
    kind: "article",
  },
  {
    label: "JurisLink reflection",
    source: "LinkedIn",
    url: "https://www.linkedin.com/posts/mrunmayeerane_what-if-your-next-conflict-check-came-activity-7320897659181879298-p8rm/",
    kind: "post",
  },
  {
    label: "GrowthLabs launch",
    source: "Devpost",
    url: "https://devpost.com/software/growth-labs?ref_content=my-projects-tab&ref_feature=my_projects",
    kind: "award",
  },
  {
    label: "Career assistant write-up",
    source: "Medium",
    url: "https://medium.com/@mrunmayeerane17/building-a-multi-agent-career-and-workplace-assistant-at-stanford-hackathon-e1ef873c8e0d",
    kind: "blog",
  },
  {
    label: "Milvus newsletter feature",
    source: "LinkedIn",
    url: "https://www.linkedin.com/pulse/hackathon-recap-rag-deepseek-milvus-more-the-milvus-project-dghyf/",
    kind: "article",
  },
  {
    label: "SkyStudio demo clip",
    source: "X",
    url: "https://x.com/cerebral_valley/status/2021289272310149237?s=46&t=6U8W_LK5OXJ9MTMlmP7FHA",
    kind: "video",
  },
  {
    label: "GraphRAG AV patent-backed project",
    source: "Devpost",
    url: "https://devpost.com/software/sensor-log-analysis-for-autonomous-vehicles",
    kind: "patent",
  },
];

export const values: ThemePillar[] = [
  {
    title: "Agentic AI",
    description:
      "I care about systems that do more than answer. They should observe, reason, hand work off cleanly, and move toward action without becoming brittle.",
  },
  {
    title: "AI for real workflows",
    description:
      "The most interesting AI products are constrained by messy human processes. I like building where reliability, latency, and trust matter as much as model capability.",
  },
  {
    title: "Knowledge systems",
    description:
      "Graphs, retrieval, structured context, and memory are what make AI products feel grounded. I keep coming back to systems that turn scattered information into usable decisions.",
  },
  {
    title: "Human-centered product building",
    description:
      "I like ambitious technology, but I care even more about whether it helps someone do the job better. The product has to earn the right to exist.",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "NVIDIA, Autonomous Vehicles",
    role: "System Software Engineer",
    location: "Santa Clara, CA",
    summary:
      "Worked across AV performance, debugging, and validation workflows, with a focus on making internal systems more observable and much faster to reason about.",
    bullets: [
      "Developed a RAG-based performance app that delivered a 10x efficiency boost in CPU and GPU performance tracking for L2 driving.",
      "Built an agentic debugging system in Python and C++ that automatically triaged gating CLs for production, reducing manual review time while maintaining quality and performance standards.",
      "Collaborated with validation, software, and performance teams to productionize ML-assisted debugging workflows across Python, C++, and Jira inside internal AV infrastructure.",
    ],
    tags: ["RAG", "Python", "C++", "Autonomous vehicles", "Performance tooling"],
  },
];

export const aboutParagraphs = [
  "I am based in Santa Clara, California, and I love building systems that can move from concept to something genuinely useful.",
  "I love participating in hackathons and I am a serial hackathon winner, including the LLM x Law Stanford Hackathon, the Agent2Agent Hackathon for GrowthLabs, and Gemini 3 Super Hacks. My technical blog has also been featured in the Milvus Newsletter.",
  "Driven by a deep sense of gratitude for the opportunities I have had, I am committed to using my skills and resources to give back. Being born into a family that could feed and educate me was a privilege I never take for granted, and I plan to spend my life paying that forward, harnessing technology for social good. Welcome to my portfolio, where innovation and a genuine passion for active endeavors come together to define my journey.",
];

export const hobbies = ["Running", "Cycling", "Playing badminton"];

export const otherProjects: LegacyProjectItem[] = [
  {
    title: "AI Conversational Food Recommendation Chatbot",
    summary: "Food recommendation chatbot using Sentence Transformer and Dialog-GPT.",
    url: "https://github.com/mrunmayee17/AI-Conversational-Food-Recommendation-ChatBot",
    image: "/project-images/food recommendation chatbot.jpg",
    imageAlt: "Food recommendation chatbot interface with suggested restaurants.",
  },
  {
    title: "Sudoku Solving using Deep Learning",
    summary: "Sudoku solver using image detection, digit recognition, and deep learning.",
    url: "https://github.com/mrunmayee17/Solving-Sudoku-Using-DL",
    image: "/project-images/legacy-sudoku.jpg",
    imageAlt: "Sudoku app interface showing a solved board.",
  },
  {
    title: "Autonomous Vehicle Detection and Tracking using YOLOv3",
    summary:
      "Implemented vehicle detection and classification using OpenCV and YOLOv3 to analyze real-time video streams, count traffic, and classify vehicles.",
    url: "https://github.com/mrunmayee17/Vehicle-Detection-and-Tracking-using-YOLOv3",
    image: "/project-images/legacy-Autonomous Vehicle Detection and Tracking using YOLOv3.jpg",
    imageAlt: "Road scene with many cars detected by bounding boxes.",
  },
  {
    title: "Traffic Sign Detection using CNN and Data Augmentation",
    summary: "Implemented traffic sign detection using convolutional neural networks with an emphasis on data augmentation.",
    url: "https://github.com/mrunmayee17/Traffic_Sign_Detection_CNN_Data_Augmentation",
    image: "/project-images/legacy-traffic-signs.jpg",
    imageAlt: "Night street scene with traffic signs highlighted by overlays.",
  },
  {
    title: "Web Application for Predicting Higher Risk for Diabetes",
    summary: "Analyzed NHANES datasets to predict people at risk of developing diabetes and depression.",
    url: "https://github.com/mrunmayee17/Web-Application-for-Predicting-Higher-Risk-for-Diabetes",
    image: "/project-images/legacy-Predicting-Higher-Risk-for-Diabetes.jpg",
    imageAlt: "Prediction result modal over a browser-based form.",
  },
  {
    title: "Lane Detection with OpenCV",
    summary: "Lane detection in images and videos using Hough Lines.",
    url: "https://github.com/mrunmayee17/Lane_detection_using_OpenCv",
    image: "/project-images/legacy-lane-detection.jpg",
    imageAlt: "Lane and road detection overlay on a vehicle-driving scene.",
  },
  {
    title: "Panorama and Background Stiching",
    summary: "Stitched multiple images into one panoramic photo.",
    url: "https://github.com/mrunmayee17/Panorama-and-Background-Stiching",
    image: "/project-images/legacy-panoroma-stitching.jpg",
    imageAlt: "Panoramic building image stitched from multiple frames.",
  },
  {
    title: "Face Detection in the Wild",
    summary: "Face detection and clustering.",
    url: "https://github.com/mrunmayee17/Face-Detection-in-the-Wild/tree/main",
    image: "/project-images/legacy-face-detection.jpg",
    imageAlt: "Grid of clustered celebrity faces generated by a face detection pipeline.",
  },
  {
    title: "Crypto Newsfeed and Currency Converter",
    summary: "Crypto dashboard combining news feed and currency conversion.",
    url: "https://github.com/mrunmayee17/Crypto-Newsfeed-and-Currency-Converter",
    image: "/project-images/Cryptocurrency converter.jpg",
    imageAlt: "Simple crypto dashboard showing exchange rates and headlines.",
  },
];

export const researchItems: ResearchItem[] = [
  {
    label: "Research",
    title: "Face Morphing with Adversarial Networks",
    context:
      "During my Master's, I had the opportunity to work with Prof. David Doermann in the Artificial Intelligence and Innovation Lab at the University at Buffalo.",
    description:
      "Researched detection of fake images by creating morphed faces using generative adversarial networks with 80% accuracy using ArcFace. Generated 15,000 face-morphed images using single and differential images with StyleGAN and MIPGAN in TensorFlow and PyTorch. Quantified synthetic image quality with human-in-the-loop feedback, and compared StyleGAN and MIPGAN outputs using saliency-map-based localization and ghosted methods for comparative quality assessment.",
    url: "https://www.buffalo.edu/ai-data-science/research/organizations/innovation-lab/research/fmonet.html",
    image: "/project-images/research-face-morphing.jpg",
    imageAlt: "Grid of generated and clustered face images from morphing research.",
  },
  {
    label: "IEEE Publication",
    title: "Automated Timetabling System for University Course",
    context:
      "During my bachelor's, I had the opportunity to work with Prof. Mani Roja Edinburg on an automated university scheduling system for the University of Mumbai.",
    description:
      "This paper addresses complex timetabling environments with electives, tutorials, multiple student batches, practical subjects, and interdepartmental courses. The system accounts for both soft and hard constraints to generate faculty, classroom, laboratory, and student timetables. The implementation resulted in feasible timetables that were significantly more optimized and accurate than manual scheduling.",
    url: "https://ieeexplore.ieee.org/document/9396906",
    image: "/project-images/IEEEpublication.png",
    imageAlt: "Conference publication image for the automated timetabling system.",
  },
];
