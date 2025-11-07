export const myProjects = [
  {
    id: 1,
    title: "Payment Receiving System (PRS)",
    description:
      "A secure web system for recording and visualizing payments with REST API integration and real-time form validation.",
    subDescription: [
      "Built a secure web system for recording and visualizing payments with REST API integration.",
      "Implemented real-time form validation using React Hook Form and Zod for data integrity.",
      "Integrated REST APIs with Axios for seamless backend communication.",
      "Designed responsive UI with Tailwind CSS and managed state efficiently using Zustand.",
    ],
    href: "",
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
        name: "React",
        path: "/assets/logos/react.svg",
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
        id: 4,
        name: "Zustand",
        path: "/assets/logos/zustand.svg",
      },
    ],
  },
  {
    id: 2,
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
    id: 3,
    title: "EduHub",
    description:
      "Educational platform with responsive design and admin support for managing content.",
    subDescription: [
      "Developed an educational platform using HTML and CSS for robust foundation.",
      "Implemented responsive design ensuring optimal viewing across all devices.",
      "Built admin panel for content management and user administration.",
      "Created intuitive interface for students and educators to interact seamlessly.",
    ],
    href: "https://sandyeduhub.netlify.app/",
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
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/9779749392634",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
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
      "Utilized GitHub Copilot and ChatGPT API to streamline development workflows.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    job: "Brahma Byte Lab, Kathmandu",
    date: "Aug 2025 – Present",
    contents: [
      "Built production-ready interfaces using Next.js, TypeScript, and Tailwind CSS, improving load times and responsiveness.",
      "Enhanced the Payment Receiving System (PRS) with API integrations (Axios) and validations using React Hook Form + Zod.",
      "Collaborated in Agile sprints, reviewed pull requests, and maintained clean version control with Git and GitHub.",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science and Information Technology (BSc.CSIT)",
    institution: "Patan Multiple Campus, Tribhuvan University",
    location: "Lalitpur, Nepal",
    year: "2023 – 2026 (Expected)",
    isCurrent: true,
    highlights: [
      "Specializing in web development and software engineering",
      "Focus on modern technologies and full-stack development",
      "Maintaining strong academic performance"
    ]
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
      "Competitive academic achievements"
    ]
  }
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
