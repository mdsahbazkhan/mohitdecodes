export const roadmaps = [
  {
    id: "frontend",
    title: "Frontend Developer",
    description: "Complete roadmap to become a modern frontend developer in 2024",
    icon: "🎨",
    category: "Frontend",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    steps: [
      {
        title: "HTML & CSS Fundamentals",
        description: "Master the building blocks of the web",
        resources: ["MDN HTML Docs", "MDN CSS Docs", "CSS Tricks"],
      },
      {
        title: "JavaScript Deep Dive",
        description: "Learn ES6+, async programming, DOM manipulation",
        resources: ["JavaScript.info", "You Don't Know JS", "Eloquent JavaScript"],
      },
      {
        title: "Version Control with Git",
        description: "Master Git for collaboration and version control",
        resources: ["Git Handbook", "Pro Git Book", "GitHub Learning Lab"],
      },
      {
        title: "React.js",
        description: "Build modern UIs with React ecosystem",
        resources: ["React Docs", "React Patterns", "React Router Docs"],
      },
      {
        title: "State Management",
        description: "Manage application state with Redux, Zustand, or Context",
        resources: ["Redux Toolkit", "Zustand Docs", "React Query"],
      },
      {
        title: "CSS Frameworks & Styling",
        description: "Master Tailwind CSS, styled-components, or Emotion",
        resources: ["Tailwind CSS Docs", "Styled Components", "CSS-in-JS"],
      },
      {
        title: "Testing",
        description: "Write tests with Jest, React Testing Library, Cypress",
        resources: ["Jest Docs", "Testing Library", "Cypress Docs"],
      },
      {
        title: "Build & Deploy",
        description: "Deploy applications with Vercel, Netlify, or AWS",
        resources: ["Vercel Docs", "Netlify Docs", "Docker for Frontend"],
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Developer",
    description: "Master server-side development with modern technologies",
    icon: "⚙️",
    category: "Backend",
    color: "from-green-500/20 to-emerald-500/20 border-green-500/30",
    steps: [
      {
        title: "Programming Fundamentals",
        description: "Master Node.js and server-side JavaScript",
        resources: ["Node.js Docs", "JavaScript.info", "MDN Web Docs"],
      },
      {
        title: "Databases",
        description: "Learn SQL and NoSQL databases",
        resources: ["PostgreSQL Docs", "MongoDB University", "Prisma Docs"],
      },
      {
        title: "API Design",
        description: "Design RESTful and GraphQL APIs",
        resources: ["REST API Tutorial", "GraphQL Docs", "OpenAPI Spec"],
      },
      {
        title: "Authentication & Security",
        description: "Implement JWT, OAuth, and security best practices",
        resources: ["OWASP Top 10", "JWT.io", "Auth0 Docs"],
      },
      {
        title: "Testing & Deployment",
        description: "Write tests and deploy to cloud platforms",
        resources: ["Jest", "Docker", "AWS/GCP/Azure Docs"],
      },
    ],
  },
  {
    id: "fullstack",
    title: "Full Stack Developer",
    description: "Become a complete full-stack developer",
    icon: "🚀",
    category: "Full Stack",
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
    steps: [
      {
        title: "Frontend Foundations",
        description: "HTML, CSS, JavaScript, and React",
        resources: ["Frontend Roadmap", "React Docs", "Tailwind CSS"],
      },
      {
        title: "Backend Fundamentals",
        description: "Node.js, Express, databases, and APIs",
        resources: ["Node.js Docs", "Express Guide", "MongoDB Docs"],
      },
      {
        title: "Full Stack Frameworks",
        description: "Master Next.js, Nuxt, or Remix",
        resources: ["Next.js Learn", "Remix Docs", "Nuxt Docs"],
      },
      {
        title: "Database Design",
        description: "SQL, NoSQL, and ORMs like Prisma",
        resources: ["PostgreSQL Tutorial", "MongoDB Guide", "Prisma Docs"],
      },
      {
        title: "DevOps & Deployment",
        description: "Docker, CI/CD, and cloud platforms",
        resources: ["Docker Docs", "GitHub Actions", "Vercel Docs"],
      },
    ],
  },
  {
    id: "react",
    title: "React Specialist",
    description: "Deep dive into React ecosystem and patterns",
    icon: "⚛️",
    category: "Frontend",
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
    steps: [
      {
        title: "React Fundamentals",
        description: "Components, props, state, and lifecycle",
        resources: ["React Docs", "Epic React", "React Patterns"],
      },
      {
        title: "Hooks Deep Dive",
        description: "useState, useEffect, useContext, and custom hooks",
        resources: ["React Hooks Guide", "useHooks.com", "Custom Hooks"],
      },
      {
        title: "State Management",
        description: "Context, Redux, Zustand, Jotai, and Recoil",
        resources: ["Redux Toolkit", "Zustand", "React Query"],
      },
      {
        title: "Performance",
        description: "Memoization, lazy loading, and optimization",
        resources: ["React Performance", "Web Vitals", "React.memo"],
      },
    ],
  },
  {
    id: "nextjs",
    title: "Next.js Specialist",
    description: "Master Next.js framework for production apps",
    icon: "▲",
    category: "Frontend",
    color: "from-slate-500/20 to-gray-500/20 border-slate-500/30",
    steps: [
      {
        title: "Next.js Fundamentals",
        description: "App Router, routing, and file conventions",
        resources: ["Next.js Docs", "App Router Guide", "Next.js Learn"],
      },
      {
        title: "Server & Client Components",
        description: "RSC patterns and data fetching",
        resources: ["RSC Docs", "Server Actions", "Server Components"],
      },
      {
        title: "API Routes & Middleware",
        description: "Build APIs and middleware with Next.js",
        resources: ["Route Handlers", "Middleware Docs", "Edge Runtime"],
      },
    ],
  },
  {
    id: "nodejs",
    title: "Node.js Specialist",
    description: "Master server-side JavaScript with Node.js",
    icon: "🟢",
    category: "Backend",
    color: "from-green-500/20 to-lime-500/20 border-green-500/30",
    steps: [
      {
        title: "Node.js Core",
        description: "Event loop, modules, streams, and buffers",
        resources: ["Node.js Docs", "Node.js Design", "Node Patterns"],
      },
      {
        title: "Express.js",
        description: "Build REST APIs with Express",
        resources: ["Express Guide", "Express Middleware", "Express Security"],
      },
      {
        title: "Databases",
        description: "PostgreSQL, MongoDB, Redis with Node.js",
        resources: ["PostgreSQL", "MongoDB", "Redis Docs"],
      },
    ],
  },
  {
    id: "python",
    title: "Python Developer",
    description: "Master Python for web, data science, and automation",
    icon: "🐍",
    category: "Languages",
    color: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30",
    steps: [
      {
        title: "Python Fundamentals",
        description: "Syntax, data structures, OOP, and modules",
        resources: ["Python Docs", "Automate the Boring Stuff", "Python Crash Course"],
      },
      {
        title: "Web with Python",
        description: "Django, Flask, or FastAPI",
        resources: ["Django Docs", "FastAPI Docs", "Flask Guide"],
      },
      {
        title: "Data & ML",
        description: "Pandas, NumPy, and basic ML",
        resources: ["Pandas Docs", "NumPy Guide", "Scikit-learn"],
      },
    ],
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    description: "Build AI-powered applications with modern tools",
    icon: "🤖",
    category: "AI/ML",
    color: "from-violet-500/20 to-indigo-500/20 border-violet-500/30",
    steps: [
      {
        title: "Python for AI",
        description: "Python, NumPy, Pandas, and data manipulation",
        resources: ["Python Docs", "NumPy Guide", "Pandas Tutorial"],
      },
      {
        title: "Machine Learning Basics",
        description: "Supervised, unsupervised, and deep learning",
        resources: ["Scikit-learn", "TensorFlow", "PyTorch"],
      },
      {
        title: "LLMs & Prompt Engineering",
        description: "OpenAI, LangChain, and AI application development",
        resources: ["OpenAI API", "LangChain Docs", "Prompt Engineering Guide"],
      },
    ],
  },
];
