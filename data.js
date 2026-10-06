/*
  All site content lives here.
  To add a real image: put the file in the /images folder and set the path,
  e.g.  cover: "images/spindle-cover.jpg"
  Any image left as "" shows a placeholder box instead.
*/

const SITE = {
  person: {
    name: "Rohan Manchanda",
    first: "Rohan",
    location: "Gurugram, Haryana, India",
    email: "manchanda.rohan09@gmail.com",
    linkedin: "#", // TODO: add LinkedIn profile URL
    resume: "Resume%20-%20Rohan%20Manchanda%20-%20Final.docx",
    heroImage: "",   // e.g. "images/rohan-hero.jpg"
    aboutImage: "",  // e.g. "images/rohan-about.jpg"
  },

  /* ---------- Sections with sub-pages (these get dropdowns) ---------- */
  sections: {
    research: {
      label: "Research",
      eyebrow: "Research & Fellowships",
      heading: "Where I've done my research",
      intro: "Fellowships and fieldwork where I've investigated real problems, from AI in healthcare to safety in India's coal mines.",
      items: [
        {
          slug: "mit-media-lab",
          title: "AI Summer Fellowship at MIT Media Lab",
          short: "MIT Media Lab Fellowship",
          role: "Research Fellow",
          org: "MIT Media Lab",
          date: "Jun – Jul 2025",
          tags: ["Artificial Intelligence", "Healthcare"],
          summary: "I spent the summer as a research fellow at MIT Media Lab, where I built CarePal, an AI medical assistant, under the mentorship of Prof. Ramesh Raskar.",
          body: [
            "I was selected for the AI Summer Fellowship at MIT Media Lab, where I worked under the mentorship of MIT Prof. Ramesh Raskar. I wanted to explore how AI could make the very first step of a hospital visit (explaining your symptoms) clearer, faster and more reliable.",
            "The result was CarePal, an AI medical assistant that collects patient symptoms, detects contradictions in what patients report, and generates structured clinical reports. Since the fellowship, I've been leading efforts to pilot CarePal in hospitals across the Delhi NCR and Kolkata regions.",
          ],
          highlights: [
            "Built CarePal, an AI medical assistant, during the fellowship.",
            "Worked under the mentorship of MIT Prof. Ramesh Raskar.",
            "Currently leading efforts to pilot CarePal in hospitals across Delhi NCR and Kolkata.",
          ],
          related: { label: "See the CarePal project", href: "#/projects/carepal" },
          cover: "",
          gallery: ["", "", ""],
        },
        {
          slug: "jharia-mine-safety",
          title: "Mine Safety Investigation in the Jharia Coal Belt",
          short: "Jharia Mine Safety Investigation",
          role: "Research Investigator",
          org: "National Centre for Coal and Energy Research",
          date: "Jun 2024 – Jun 2025",
          tags: ["Mine Safety", "Fieldwork", "Policy"],
          summary: "I investigated safety gaps at 15+ collieries in the Jharia coal belt and authored an investigative memorandum submitted to the Ministry of Coal.",
          body: [
            "I was selected as the programme's only high-school intern, across two consecutive summer fieldwork assignments. My work took me to the Jharia coal belt, a region affected by 68 active underground fires, where I investigated safety gaps and operational risks at more than 15 collieries.",
            "I analysed ventilation failures, methane accumulation, fire-suppression systems and emergency preparedness, and brought my findings together in an investigative memorandum submitted to the Ministry of Coal.",
            "Along the way, I worked alongside geological-survey teams and disaster-response personnel during live rescue drills and emergency simulations.",
          ],
          highlights: [
            "The programme's only high-school intern, selected for two consecutive summers.",
            "Investigated safety gaps and operational risks at 15+ collieries.",
            "Authored an investigative memorandum submitted to the Ministry of Coal.",
            "Took part in live rescue drills and emergency simulations.",
          ],
          stats: [
            { n: "15+", l: "Collieries investigated" },
            { n: "68", l: "Active underground fires in the region" },
            { n: "2", l: "Summer fieldwork assignments" },
          ],
          cover: "",
          gallery: ["", "", ""],
        },
      ],
    },

    projects: {
      label: "Projects",
      eyebrow: "Technical Projects",
      heading: "Things I've built",
      intro: "Hardware and software I've designed to solve problems I saw first-hand.",
      items: [
        {
          slug: "spindle",
          title: "SPINDLE: Hybrid Legged-Wheeled Mine-Rescue Robot",
          short: "SPINDLE Rescue Robot",
          role: "Inventor & Patent Holder",
          org: "Robotics · Mine Safety",
          date: "2025",
          tags: ["Robotics", "LiDAR", "Thermal Imaging", "Patent"],
          summary: "I designed and built a hybrid legged-wheeled robot for rescue and inspection in collapsed, hazardous mines, and secured an Indian patent for it.",
          body: [
            "Collapsed mines are among the most dangerous places a rescuer can enter. I designed SPINDLE, a hybrid legged-wheeled rescue-and-inspection robot built for exactly those environments. It integrates methane detection, oxygen sensing, LiDAR, thermal imaging and structural-integrity assessment.",
            "I built the prototype at roughly 85% below the cost of comparable commercial rescue robots, and field-tested it in an active Jharia colliery under disaster-response supervision.",
            "SPINDLE has secured an Indian patent (publication pending). I presented it at the Sigma Xi International Research Conference, and it is currently under evaluation for field-deployment trials.",
          ],
          highlights: [
            "Integrated methane detection, oxygen sensing, LiDAR, thermal imaging and structural-integrity assessment.",
            "Built the prototype at ~85% below the cost of comparable commercial rescue robots.",
            "Field-tested in an active Jharia colliery under disaster-response supervision.",
            "Presented at the Sigma Xi International Research Conference.",
            "Recognised with the BSA CREST Gold Award and the Youth Changemaker Award.",
          ],
          stats: [
            { n: "~85%", l: "Lower cost than commercial robots" },
            { n: "5", l: "Integrated sensing systems" },
            { n: "1", l: "Indian patent secured" },
          ],
          cover: "",
          gallery: ["", "", ""],
        },
        {
          slug: "carepal",
          title: "CarePal: AI Medical Assistant",
          short: "CarePal AI Assistant",
          role: "Builder & Pilot Lead",
          org: "MIT Media Lab AI Summer Fellowship",
          date: "2025 – Present",
          tags: ["Artificial Intelligence", "Healthcare"],
          summary: "An AI assistant I built that collects patient symptoms, catches contradictions, and turns them into structured clinical reports.",
          body: [
            "I built CarePal during my AI Summer Fellowship at MIT Media Lab, under the mentorship of Prof. Ramesh Raskar. It talks to patients to collect their symptoms, detects contradictions in what they report, and generates a structured clinical report that a doctor can read at a glance.",
            "I'm now leading efforts to pilot CarePal in hospitals across the Delhi NCR and Kolkata regions.",
          ],
          highlights: [
            "Collects patient symptoms through a guided conversation.",
            "Detects contradictions in what patients report.",
            "Generates structured clinical reports for doctors.",
            "Pilot efforts underway with hospitals in Delhi NCR and Kolkata.",
          ],
          related: { label: "Read about the MIT fellowship", href: "#/research/mit-media-lab" },
          cover: "",
          gallery: ["", "", ""],
        },
      ],
    },

    papers: {
      label: "Papers",
      eyebrow: "Papers & Publications",
      heading: "What I've written",
      intro: "Econometric and financial research on India's economy: published, presented and in progress.",
      items: [
        {
          slug: "exchange-rate-dynamics",
          title: "Exchange Rate Dynamics & Recent Shocks in India",
          short: "Exchange Rate Dynamics in India",
          role: "Author",
          org: "With Prof. Colin Constantine, University of Cambridge",
          date: "Published",
          tags: ["Econometrics", "Macroeconomics"],
          summary: "An econometric study of how demonetization, COVID-19 and the global financial crisis affected INR/USD exchange-rate dynamics.",
          body: [
            "Working with Prof. Colin Constantine of the University of Cambridge, I conducted an econometric study of how three major shocks (demonetization, COVID-19 and the global financial crisis) affected INR/USD exchange-rate dynamics.",
            "The research was published in the Academic Journal of Health Sciences and Research, and I presented the methodology at a virtual Cambridge economics research symposium.",
          ],
          highlights: [
            "Studied the impact of demonetization, COVID-19 and the global financial crisis on the INR/USD rate.",
            "Published in the Academic Journal of Health Sciences and Research.",
            "Presented the methodology at a virtual Cambridge economics research symposium.",
          ],
          link: { label: "Read the paper", href: "#" }, // TODO: add paper URL
          cover: "",
          gallery: ["", ""],
        },
        {
          slug: "bse-volatility",
          title: "Impact of Institutional Investors and Mutual Funds on BSE Volatility",
          short: "Institutional Investors & BSE Volatility",
          role: "Author",
          org: "S.T. Yau High School Science Award (Asia)",
          date: "2024",
          tags: ["Finance", "Statistics"],
          summary: "Statistical analysis linking institutional trading activity to volatility and liquidity on the Bombay Stock Exchange.",
          body: [
            "I ran advanced statistical analyses linking investor trading activity to market volatility and liquidity, surfacing patterns in institutional behaviour that shape capital flows in emerging markets.",
            "The paper earned an Honourable Mention in Economics & Financial Modeling at the Pan-Asia S.T. Yau High School Science Award, where I was a Top 24 finalist. I also presented it at SBMIT 2025, receiving an Honourable Mention in the Youngest Researcher category.",
          ],
          highlights: [
            "Linked institutional and mutual-fund trading activity to market volatility and liquidity.",
            "Top 24 Finalist & Honourable Mention, Pan-Asia S.T. Yau Award (Economics & Financial Modeling).",
            "Presented at SBMIT 2025: Honourable Mention, Youngest Researcher category.",
          ],
          link: { label: "View DOI", href: "#" }, // TODO: add DOI link
          cover: "",
          gallery: ["", ""],
        },
        {
          slug: "extended-essay",
          title: "Econometric Analysis of Coal-Industry Labour Productivity and the Impact of Safety Regulation in India, 2000–2025",
          short: "IB Extended Essay: Coal Productivity",
          role: "Author",
          org: "IB Extended Essay in Economics",
          date: "IB Diploma Programme",
          tags: ["Econometrics", "Labour Economics"],
          summary: "My IB Extended Essay, studying labour productivity in India's coal industry and how safety regulation has shaped it from 2000 to 2025.",
          body: [
            "For my IB Extended Essay in Economics, I'm studying labour productivity in India's coal industry between 2000 and 2025, and the impact safety regulation has had on it.",
            "It brings together two things I care about: quantitative economics, and the safety of the coal workers I've met through my fieldwork and advocacy.",
          ],
          highlights: [
            "Econometric analysis covering 2000–2025.",
            "Focus on labour productivity and the impact of safety regulation.",
          ],
          cover: "",
          gallery: ["", ""],
        },
      ],
    },

    leadership: {
      label: "Leadership",
      eyebrow: "Leadership & Impact",
      heading: "Things I've started and led",
      intro: "Ventures, internships and community work, from startups and non-profits to coal-worker advocacy.",
      items: [
        {
          slug: "harvard-ventures",
          title: "Harvard Ventures Technology Scholars Program",
          short: "Harvard Ventures Scholars",
          role: "Business Strategy Intern",
          org: "Harvard Ventures · DocuBridge.ai",
          date: "Jul – Aug 2025",
          tags: ["Strategy", "Startups"],
          summary: "I was placed at DocuBridge.ai to lead a go-to-market, competitor-landscape and customer-discovery project.",
          body: [
            "I was selected into a competitive SEAS-TECH and Harvard Undergraduate Ventures program that pairs students with VC-backed startups, with seminars from founders, investors and faculty. Past speakers include several Forbes 30 Under 30 honorees.",
            "I was placed at DocuBridge.ai, where I led a go-to-market, competitor-landscape and customer-discovery project for their AI Excel add-in, which automates financial modeling for private-equity and growth-equity teams.",
          ],
          highlights: [
            "Selected into a competitive SEAS-TECH × Harvard Undergraduate Ventures program.",
            "Led go-to-market, competitor-landscape and customer-discovery work at DocuBridge.ai.",
            "Attended seminars with founders, investors and faculty.",
          ],
          cover: "",
          gallery: ["", ""],
        },
        {
          slug: "coal-worker-welfare",
          title: "Coal-Worker Welfare & Safety Advocacy",
          short: "Coal-Worker Welfare Advocate",
          role: "Welfare & Safety Advocate",
          org: "All India Coal and Mines Workers Federation",
          date: "Sep 2024 – Present",
          tags: ["Advocacy", "Worker Safety", "Policy"],
          summary: "I support coal workers and their families with claims, and built a worker-led safety-reporting system across five collieries.",
          body: [
            "I've supported 120 pension claims, 53 workplace-injury compensation cases and 29 widow-entitlement claims for coal workers and their families.",
            "I built a worker-led safety-reporting system across five collieries in the Jharia and Bokaro regions. It has documented more than 500 hazards, around 73% of which have been resolved by site management.",
            "I also conducted field interviews across 12 mines and submitted policy recommendations to the Ministry of Coal on pension delays, workplace safety and protocol enforcement.",
          ],
          highlights: [
            "Supported 120 pension claims, 53 injury-compensation cases and 29 widow-entitlement claims.",
            "Built a worker-led safety-reporting system across five collieries.",
            "Conducted field interviews across 12 mines.",
            "Submitted policy recommendations to the Ministry of Coal.",
          ],
          stats: [
            { n: "500+", l: "Hazards documented" },
            { n: "~73%", l: "Resolved by site management" },
            { n: "200+", l: "Claims supported" },
          ],
          cover: "",
          gallery: ["", "", ""],
        },
        {
          slug: "lokgharana",
          title: "LokGharana",
          short: "LokGharana",
          role: "Founder",
          org: "Non-profit · Music",
          date: "Oct 2023 – Present",
          tags: ["Non-profit", "Music", "Education"],
          summary: "I founded a non-profit reviving lesser-known and dying Indian musical instruments, reaching a 35k+ audience.",
          body: [
            "I founded LokGharana to revive lesser-known and dying musical instruments. Today it reaches an audience of more than 35,000 people, online and in person.",
            "We've enabled 52+ musicians across 6+ Indian states to stage 30+ events, generating ₹280k (~$3,140) in ticket sales. We've also partnered with government schools and orphanages to deliver free music education.",
          ],
          highlights: [
            "Reached a 35k+ audience online and in person.",
            "Enabled 52+ musicians across 6+ states to stage 30+ events.",
            "Generated ₹280k (~$3,140) in ticket sales.",
            "Partnered with government schools and orphanages for free music education.",
          ],
          stats: [
            { n: "35k+", l: "Audience reached" },
            { n: "52+", l: "Musicians supported" },
            { n: "30+", l: "Events staged" },
          ],
          cover: "",
          gallery: ["", "", ""],
        },
        {
          slug: "infonet",
          title: "Optimization Internship at Infonet Technologies",
          short: "Infonet Technologies Internship",
          role: "Optimization Intern",
          org: "Infonet Technologies Pvt. Ltd., Gurugram",
          date: "Jan – Mar 2024",
          tags: ["Operations Research", "Python"],
          summary: "I built linear-optimization algorithms that improved delivery scheduling and routing efficiency.",
          body: [
            "I modeled real-world delivery constraints (time, demand and vehicle capacity) and built linear-optimization algorithms that improved delivery scheduling and routing efficiency.",
          ],
          highlights: [
            "Modeled time, demand and vehicle-capacity constraints.",
            "Built linear-optimization algorithms for scheduling and routing.",
          ],
          cover: "",
          gallery: ["", ""],
        },
        {
          slug: "bake-to-educate",
          title: "Bake to Educate",
          short: "Bake to Educate",
          role: "Co-Founder",
          org: "Philanthropic venture · India",
          date: "Oct 2021 – Oct 2023",
          tags: ["Philanthropy", "Education"],
          summary: "I co-founded a venture that raised ₹80,000+ through bake sales to fund education for underprivileged children.",
          body: [
            "I co-founded Bake to Educate, a philanthropic venture funding education for underprivileged children. We raised more than ₹80,000 through large-scale bake sales, and I managed operations, pricing and outreach.",
          ],
          highlights: [
            "Raised ₹80,000+ for children's education.",
            "Managed operations, pricing and outreach.",
          ],
          cover: "",
          gallery: ["", ""],
        },
        {
          slug: "basketball-league",
          title: "Founding My School's Basketball League",
          short: "Basketball League",
          role: "Founder & Athlete",
          org: "Heritage International Xperiential School",
          date: "Aug 2024 – Present",
          tags: ["Athletics", "Community"],
          summary: "I founded my school's inaugural basketball league with 60+ participants.",
          body: [
            "I founded my school's inaugural basketball league, which now has more than 60 participants. I run training clinics and secured equipment sponsorships to keep it going.",
          ],
          highlights: [
            "Founded the school's first basketball league (60+ participants).",
            "Ran training clinics.",
            "Secured equipment sponsorships.",
          ],
          cover: "",
          gallery: ["", ""],
        },
      ],
    },
  },

  /* ---------- Awards ---------- */
  awards: [
    { title: "CREST Gold Award (Robotics)", note: "Top 1% globally", year: "2025" },
    { title: "Indian Patent Holder", note: "SPINDLE Hybrid Legged-Wheeled Rescue Robot", year: "2025" },
    { title: "International Research Olympiad", note: "Semifinalist, Top 100 of 45,000+ registrants", year: "2025" },
    { title: "Youth Changemaker Award", note: "Mine-Safety Innovation", year: "2025" },
    { title: "Youngest Researcher Award", note: "SBMIT Conference", year: "2025" },
    { title: "Australian Mathematics Competition", note: "Distinction, Top 20% globally", year: "2025" },
    { title: "S.T. Yau High School Science Award (Asia)", note: "Top 24 Finalist & Honourable Mention, Economics & Financial Modeling", year: "2024" },
    { title: "Academic Excellence Award", note: "Top 1% of 250+ students, Lancers International School", year: "Grade 10" },
  ],

  /* ---------- Education ---------- */
  education: [
    {
      school: "Heritage International Xperiential School, Gurugram",
      date: "May 2025 – Present",
      program: "IB Diploma Programme",
      details: [
        "HL: Economics, Mathematics AA, Physics, Spanish Ab Initio",
        "SL: Business Management, English",
        "Grade 11: Top 1%",
      ],
    },
    {
      school: "Lancers International School, Gurugram",
      date: "Jul 2019 – May 2025",
      program: "IGCSE",
      details: [
        "Grade 10: 8 A*, 1 A",
        "Academic Excellence Award: Top 1% of 250+ students",
      ],
    },
  ],

  scores: [
    { n: "1560", l: "SAT", sub: "Math 800 · EBRW 760" },
    { n: "5", l: "AP Physics C: Mechanics" },
    { n: "5", l: "AP Physics C: E&M" },
    { n: "5", l: "AP Calculus BC" },
    { n: "5", l: "AP Microeconomics" },
  ],

  /* ---------- Skills ---------- */
  skills: [
    { group: "Programming", items: ["Python", "SQL", "C", "C++", "JavaScript", "HTML", "CSS"] },
    { group: "AI & Development", items: ["LangChain", "LangGraph", "OpenAI APIs", "Streamlit", "Flutter", "Git", "GitHub"] },
    { group: "Data & Quantitative Tools", items: ["Jupyter", "Advanced Excel", "MATLAB", "Wolfram Alpha", "PuLP", "Gurobi"] },
    { group: "Robotics & Simulation", items: ["Arduino IDE", "PyBullet", "ROS"] },
    { group: "Quantitative Methods", items: ["Linear optimisation", "OLS", "ARDL", "ECM", "Johansen cointegration", "Granger causality", "ARIMA", "VAR", "Time-series analysis", "Hypothesis testing"] },
    { group: "Data Visualisation", items: ["Matplotlib", "Seaborn", "Plotly"] },
  ],

  languages: [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" },
    { name: "Spanish", level: "Conversational" },
    { name: "German", level: "Advanced academic" },
  ],

  coursework: [
    "Harvard CS50W: Web Programming with Python and JavaScript",
    "IB Extended Essay in Economics",
  ],
};
