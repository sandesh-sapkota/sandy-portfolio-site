export const myProjects = [
  {
    id: 1,
    title: "Payment Receiving System (PRS)",
    description:
      "A secure payment recording and visualization platform with RESTful API integration, schema validation, and persistent client state.",
    subDescription: [
      "Integrated RESTful API services, schema validation using Zod, and global state persistence with Zustand.",
      "Built a secure web system for recording and visualizing payments with real-time form validation.",
      "Implemented React Hook Form + Zod pipelines to enforce data integrity across payment workflows.",
      "Designed a responsive UI with Next.js, TypeScript, and Tailwind CSS for production readiness.",
    ],
    href: "",
    githubLink: "",
    logo: "",
    image: "/assets/projects/prs.jpg",
    isInternal: true,
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Axios",
        path: "/assets/logos/axios.svg",
      },
      {
        id: 5,
        name: "Zustand",
        path: "/assets/logos/zustand.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Spylt - Immersive Landing Page",
    description:
      "A high-performance marketing experience engineered around GSAP animation architecture and scroll-driven UI mechanics.",
    subDescription: [
      "Architected complex scroll-driven animations and parallax sequences with GSAP timelines.",
      "Built with React 19 and Tailwind CSS v4 for a performant, modern client foundation.",
      "Engineered interactive UI mechanics including custom cursors and seamless video integration.",
      "Fully responsive layout optimized for fluid motion across devices.",
    ],
    href: "https://spylt-site.vercel.app/",
    githubLink: "https://github.com/sandesh-sapkota/spylt-site",
    logo: "",
    image: "/assets/projects/spylt-banner.jpg",
    tags: [
      {
        id: 1,
        name: "React 19",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Tailwind CSS v4",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "GSAP",
        path: "/assets/logos/gsap.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "Displays real-time weather updates with a responsive and user-friendly interface.",
    subDescription: [
      "Built a real-time weather application using React.js for dynamic UI updates.",
      "Integrated OpenWeather API for accurate and current weather data.",
      "Designed a responsive interface with Tailwind CSS for seamless mobile and desktop experience.",
      "Implemented location-based weather fetching with error handling.",
    ],
    href: "https://sandesh-sapkota.github.io/weatherApp/",
    githubLink: "https://github.com/sandesh-sapkota/weatherApp",
    logo: "",
    image: "/assets/projects/weather.jpg",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 4,
    title: "CRUD App",
    description:
      "Implemented full CRUD operations with reusable components and optimized responsive layouts.",
    subDescription: [
      "Developed a full CRUD application using React.js with reusable components.",
      "Implemented Create, Read, Update, and Delete operations with intuitive UI.",
      "Integrated Mock API for backend simulation and data management.",
      "Designed optimized responsive layouts with Tailwind CSS for all screen sizes.",
    ],
    href: "https://sandesh-sapkota.github.io/add-to-cart/",
    githubLink: "https://github.com/sandesh-sapkota/add-to-cart",
    logo: "",
    image: "/assets/projects/crud.jpg",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 5,
    title: "EduHub",
    description:
      "Educational platform with responsive design and admin support for managing content.",
    subDescription: [
      "Developed an educational platform using HTML and CSS for a solid foundation.",
      "Implemented responsive design ensuring optimal viewing across all devices.",
      "Built admin panel for content management and user administration.",
      "Created an intuitive interface for students and educators to interact seamlessly.",
    ],
    href: "https://sandyeduhub.netlify.app/",
    githubLink: "https://github.com/sandesh-sapkota/sandy-eduhub",
    logo: "",
    image: "/assets/projects/sandy-eduhub.jpg",
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/9779749392634",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sandesh-sapkota-dev",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sandesh.sapkota.471533/",
    icon: "/assets/socials/fb.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sandy_sapkota/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Freelance Front-End Developer",
    job: "Remote",
    date: "Nov 2024 – May 2025",
    contents: [
      "Developed responsive web apps using React.js, Tailwind CSS, and JavaScript.",
      "Integrated REST APIs and optimized browser performance to enhance user experience.",
      "Utilized modern tooling and AI-assisted workflows to streamline development.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    job: "Brahma Byte Lab, Kathmandu",
    date: "Aug 2025 – Nov 2025",
    contents: [
      "Built production-ready interfaces using Next.js, TypeScript, and Tailwind CSS, improving load times and responsiveness.",
      "Enhanced the Payment Receiving System (PRS) with API integrations (Axios) and validations using React Hook Form + Zod.",
      "Collaborated in Agile sprints, reviewed pull requests, and maintained clean version control with Git and GitHub.",
    ],
  },
  {
    title: "Freelance Fullstack AI Software Engineer",
    job: "Remote",
    date: "Jan 2026 – Present",
    contents: [
      "Building and shipping full-stack web applications for clients using TypeScript, Next.js, Node.js, and modern UI systems.",
      "Owning features end-to-end — from API design and validation to responsive, production-ready interfaces.",
      "Collaborating remotely with clear delivery timelines, version control discipline, and maintainable code practices.",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree:
      "Bachelor of Science in Computer Science and Information Technology (BSc.CSIT)",
    institution: "Patan Multiple Campus, Tribhuvan University",
    location: "Lalitpur, Nepal",
    year: "2023 – 2026 (Expected)",
    isCurrent: true,
    highlights: [
      "Specializing in web development and software engineering",
      "Focus on modern technologies and full-stack development",
      "Maintaining strong academic performance",
    ],
  },
  {
    id: 2,
    degree: "+2 Science (Computer Science)",
    institution: "Orchid Science College",
    location: "Bharatpur, Nepal",
    year: "2021 – 2023",
    isCurrent: false,
    highlights: [
      "Foundation in computer science and mathematics",
      "Strong fundamentals in programming and algorithms",
      "Competitive academic achievements",
    ],
  },
];

export const focusAreas = [
  {
    title: "End-to-End Ownership",
    description:
      "Ship features across the stack — from schema design and APIs to polished, responsive interfaces.",
  },
  {
    title: "Reliable Systems",
    description:
      "Prioritize validation, type safety, and clean architecture so software stays maintainable under growth.",
  },
  {
    title: "Performance & UX",
    description:
      "Balance snappy interactions with thoughtful motion, accessibility, and real-world device constraints.",
  },
  {
    title: "Domain Depth",
    description:
      "Especially drawn to SaaS platforms, financial technology, and real-time data systems.",
  },
];
