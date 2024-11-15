import type {
  ICertification,
  IEducation,
  IExperience,
  ILanguage,
  IPersonalInfo,
  IProject,
  ISkill,
  IVolunteer
} from "../../packages/cv-astro";

const info: IPersonalInfo = {
  name: "John Doe",
  title: "Full Stack Developer",
  email: "john.doe@example.com",
  phone: "+123 456 7890",
  website: "https://johndoe.dev",
  linkedin: "johndoe",
  github: "johndoe",
  twitter: "j_doe",
  address: "City, Country",
  addressUrl: "https://maps.app.goo.gl/example",
  timezone: "EST (UTC-5)",
  summary: 'Passionate Full-stack Developer with extensive experience in creating dynamic, high-performance web applications. Skilled in a variety of programming languages and tools, with a strong focus on user experience and efficient coding practices. Adept at working in fast-paced environments and delivering projects on time. Committed to continuous learning and adopting new technologies.',
  image: "images/john-doe.webp",
};

const experience: Array<IExperience> = [
  {
    company: {
      name: "Tech Innovations Inc.",
      url: "https://www.techinnovations.com/",
      city: "Innovacity",
      country: "Techland",
      remarks: "An innovative startup with 50+ employees focused on developing cutting-edge AI solutions.",
    },
    current: true,
    positions: [
      {
        title: "Senior Full Stack Developer",
        startDate: "2018-01",
        description: "Leading the development and maintenance of various web applications.",
        tasks: [
          {
            description: "Developed and maintained a suite of internal tools and applications.",
            output: "Improved operational efficiency by 30%."
          },
          {
            description: "Coordinated with cross-functional teams to ensure seamless integration.",
            output: "Enhanced team collaboration and project delivery times."
          }
        ],
        projects: [
          {
            name: "Enterprise Resource Planning System",
            description: "Developed a comprehensive ERP system for internal use.",
            technologies: [
              { name: "JavaScript" },
              { name: "Python" },
              { name: "React" }
            ]
          },
          {
            name: "Customer Relationship Management Tool",
            description: "Implemented a CRM tool to enhance customer engagement.",
            technologies: [
              { name: "Vue.js" },
              { name: "Node.js" },
              { name: "MongoDB" }
            ]
          },
          {
            name: "E-commerce Platform",
            description: "Built a scalable e-commerce platform supporting thousands of transactions daily.",
            technologies: [
              { name: "Angular" },
              { name: "Django" },
              { name: "PostgreSQL" }
            ]
          },
        ],
      }
    ],
  },
  {
    company: {
      name: "Global Tech Solutions",
      url: "https://www.globaltechsolutions.com/",
      city: "Techville",
      country: "Techland",
    },
    positions: [
      {
        title: "Full Stack Developer",
        startDate: "2015-02",
        endDate: "2017-12",
        description: "Developed and optimized web-based applications for diverse clients.",
        tasks: [
          {
            description: "Led front-end development for client projects.",
            output: "Enhanced user interface and user experience for 10+ applications."
          },
          {
            description: "Managed backend APIs and database integrations.",
            output: "Improved data processing speed and efficiency."
          }
        ],
        projects: [
          {
            name: "Real Estate Management System",
            description: "Created a system for real estate agents to manage properties and client interactions.",
            technologies: [
              { name: "React" },
              { name: "Node.js" },
              { name: "MySQL" }
            ]
          },
          {
            name: "Educational Learning Platform",
            description: "Developed an online learning platform with interactive features.",
            technologies: [
              { name: "Angular" },
              { name: "Express" },
              { name: "MongoDB" }
            ]
          },
        ],
      }
    ],
  },
  {
    company: {
      name: "Innovative StartUp Inc.",
      city: "Startup City",
      country: "Techland",
    },
    positions: [
      {
        title: "Junior Full Stack Developer",
        startDate: "2012-06",
        endDate: "2015-01",
        description: "Participated in the development of innovative software solutions for startups.",
        tasks: [
          {
            description: "Assisted in developing web applications from concept to deployment.",
            output: "Contributed to 5 successful project launches."
          },
          {
            description: "Collaborated in a team environment to design and develop user interfaces.",
            output: "Enhanced usability and accessibility in several projects."
          }
        ],
        projects: [
          {
            name: "Social Media Analytics Tool",
            description: "Worked on a tool for analyzing and presenting social media metrics.",
            technologies: [
              { name: "Ruby on Rails" },
              { name: "JavaScript" }
            ]
          },
          {
            name: "Online Marketplace",
            description: "Contributed to the development of a platform for local artisans to sell their products.",
            technologies: [
              { name: "PHP" },
              { name: "Laravel" },
              { name: "Vue.js" }
            ]
          },
        ],
      }
    ],
  }
];

const volunteering: Array<IVolunteer> = [
  {
    organization: {
      name: "Code for Good",
      url: "https://www.codeforgood.org/",
      country: "Techland",
      remarks: "Community of 200+ developers"
    },
    isActiveMember: true,
    positions: [
      {
        title: "Volunteer Developer",
        startDate: "2019-01",
      },
    ],
    tasks: [
      "Contributed to various open-source projects aimed at social impact.",
      "Developed features for educational software benefiting underprivileged communities.",
      "Participated in hackathons focusing on environmental sustainability."
    ]
  },
  {
    organization: {
      name: "Tech Mentorship Program",
      url: "https://www.techmentorship.org/",
      city: "Techville",
      country: "Techland",
      remarks: "Program mentoring young tech enthusiasts"
    },
    isActiveMember: true,
    positions: [
      {
        title: "Mentor",
        startDate: "2020-09",
      }
    ],
    tasks: [
      "Guided aspiring developers in learning programming languages and development practices.",
      "Conducted regular webinars on JavaScript and Python.",
      "Provided one-on-one mentorship to 15+ mentees, enhancing their coding skills."
    ]
  }
];

const education: Array<IEducation> = [
  {
    institution: {
      name: "Prestigious University",
      remarks: "Top-ranked university known for its engineering programs",
      city: "City",
      country: "Country",
      url: "https://www.prestigious-university.edu/"
    },
    degree: "Bachelor of Science in Computer Science",
    major: "Major in Software Engineering",
    startDate: "2010-09",
    endDate: "2014-06",
    achievements: [
      "Graduated with honors.",
      "Active member of the computer science club."
    ]
  },
  {
    institution: {
      name: "Techland Community College",
      remarks: "Well-known for its intensive programming courses",
      city: "Techville",
      country: "Techland",
      url: "https://www.techlandcc.edu/"
    },
    degree: "Associate Degree in Web Development",
    major: "Major in Frontend Technologies",
    startDate: "2008-08",
    endDate: "2010-05",
    achievements: [
      "Completed with a 4.0 GPA.",
      "Led a student project that won the college's annual tech competition."
    ]
  }
];

const certifications: Array<ICertification> = [
  {
    authority: "Linux Foundation",
    name: "Linux Foundation Certified System Administrator",
    code: "LFCS",
    description: "Certified in Linux administration and engineering at the enterprise level.",
    license: "LFCS-1234",
    issueDate: "2023-12",
    image: "images/lfcs-300x300.webp",
  },
  {
    name: "AWS Certified Solutions Architect - Associate",
    authority: "Amazon Web Services",
    issueDate: "2021-03",
    expirationDate: "2024-03",
    url: "https://www.youracclaim.com/badges/12345678-1234-1234-1234-1234567890ab"
  },
];

const languages: Array<ILanguage> = [
  {
    name: "🇪🇸 Spanish",
    proficiency: "Native"
  },
  {
    name: "🇺🇸 English",
    proficiency: "Professional"
  },
  {
    name: "🇩🇪 German",
    proficiency: "Basic"
  },
];

const skills: Array<ISkill> = [
  {
    name: "JavaScript",
    proficiency: 5,
    // url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "TypeScript",
    proficiency: 5,
    url: "https://www.typescriptlang.org/"
  },
  {
    name: "Node.js",
    proficiency: 5,
    url: "https://nodejs.org/"
  },
  {
    name: "React",
    proficiency: 5,
    url: "https://reactjs.org/"
  },
  {
    name: "React Native",
    proficiency: 1,
    url: "https://reactnative.dev/"
  },
  {
    name: "Next.js",
    proficiency: 2,
    url: "https://nextjs.org/"
  },
  {
    name: "GraphQL",
    proficiency: 2,
    url: "https://graphql.org/"
  },
  {
    name: "Apollo",
    proficiency: 3,
    url: "https://www.apollographql.com/"
  },
  {
    name: "Prisma",
    proficiency: 3,
    url: "https://www.prisma.io/"
  },
  {
    name: "PostgreSQL",
    proficiency: 3,
    url: "https://www.postgresql.org/"
  },
  {
    name: "MongoDB",
    proficiency: 4,
    url: "https://www.mongodb.com/"
  },
  {
    name: "Redis",
    proficiency: 4,
    url: "https://redis.io/"
  },
  {
    name: "Docker",
    proficiency: 5,
    url: "https://www.docker.com/"
  },
  {
    name: "Kubernetes",
    proficiency: 2,
    url: "https://kubernetes.io/"
  },
  {
    name: "AWS",
    proficiency: 3,
    url: "https://aws.amazon.com/"
  },
  {
    name: "Google Cloud",
    proficiency: 5,
    url: "https://cloud.google.com/"
  },
  {
    name: "Azure",
    proficiency: 5,
    url: "https://azure.microsoft.com/"
  },
  {
    name: "Linux",
    proficiency: 4,
    url: "https://www.linux.org/"
  },
  {
    name: "Git",
    proficiency: 5,
    url: "https://git-scm.com/"
  },
  {
    name: "HTML",
    proficiency: 5,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    name: "CSS",
    proficiency: 5,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "SASS",
    proficiency: 5,
    url: "https://sass-lang.com/"
  },
  {
    name: "Tailwind CSS",
    proficiency: 5,
    url: "https://tailwindcss.com/"
  },
  {
    name: "Bootstrap",
    proficiency: 5,
    url: "https://getbootstrap.com/"
  },
  {
    name: "Material UI",
    proficiency: 5,
    url: "https://mui.com/"
  },
  {
    name: "Ant Design",
    proficiency: 5,
    url: "https://ant.design/"
  },
  {
    name: "Jest",
    proficiency: 5,
    url: "https://jestjs.io/"
  },
  {
    name: "Cypress",
    proficiency: 5,
    url: "https://www.cypress.io/"
  },
  {
    name: "Testing Library",
    proficiency: 5,
    url: "https://testing-library.com/"
  },
];

const interests: Array<string> = [
  "🏃 Running",
  "🏋️‍♂️ Weightlifting",
  "🧘‍♂️ Meditation",
  "📚 Reading",
  "🎮 Video Games",
  "🎲 Board Games",
  "🎧 Music",
  "🎸 Guitar",
  "🎹 Piano",
  "🎤 Singing",
  "🎥 Movies",
  "📺 TV Shows",
  "📷 Photography",
  "🎨 Drawing",
  "🎭 Theater",
  "🎤 Singing",
  "🎨 Drawing",
  "🎭 Theater",
  "🎤 Singing",
  "🎨 Drawing",
  "🎭 Theater",
  "🎤 Singing",
];

const projects: IProject[] = [
  {
    name: "DevConnector",
    url: "https://devconnector.com/",
    description: "A social network platform for developers to connect, share ideas, and collaborate on projects.",
    technologies: [
      { name: "React" },
      { name: "Node.js", url: "https://nodejs.org/" },
      { name: "Express", url: "https://expressjs.com/" },
      { name: "MongoDB", url: "https://www.mongodb.com/" },
      { name: "Redux", url: "https://redux.js.org/" }
    ],
  },
  {
    name: "E-Shop",
    url: "https://eshop.com/",
    description: "An e-commerce application designed for small businesses to set up their online stores effortlessly.",
    technologies: [
      { name: "Vue.js" },
      { name: "Firebase" },
      { name: "Vuetify" },
      { name: "Stripe API" }
    ],
  },
  {
    name: "TaskManager",
    url: "https://taskmanager.com/",
    description: "A task management tool providing teams with the ability to track progress on various projects.",
    technologies: [
      { name: "Angular" },
      { name: "Spring Boot" },
      { name: "MySQL" },
      { name: "JWT" }
    ],
  },
  {
    name: "HealthTracker",
    url: "https://healthtracker.com/",
    description: "A health and fitness application that allows users to track their diet, exercise, and wellness goals.",
    technologies: [
      { name: "React Native" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" }
    ],
  },
  {
    name: "Blogify",
    url: "https://blogify.com/",
    description: "A blogging platform where users can create, publish, and share their content with a wide audience.",
    technologies: [
      { name: "Gatsby" },
      { name: "GraphQL" },
      { name: "Strapi" },
      { name: "Tailwind CSS" }
    ],
  },
  {
    name: "RecipeFinder",
    url: "https://recipefinder.com/",
    description: "A web app for finding recipes based on ingredients you have, focusing on reducing food waste.",
    technologies: [
      { name: "Svelte" },
      { name: "Django" },
      { name: "PostgreSQL" },
      { name: "Docker" }
    ],
  },
  {
    name: "PortfolioBuilder",
    url: "https://portfoliobuilder.com/",
    description: "An online tool that assists professionals in creating their own portfolio websites quickly and easily.",
    technologies: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Vercel" },
      { name: "Contentful" }
    ],
  },
  {
    name: "WeatherNow",
    url: "https://weathernow.com/",
    description: "A weather forecasting application providing real-time weather updates and alerts.",
    technologies: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "Firebase" },
      { name: "OpenWeatherMap API" }
    ],
  },
  {
    name: "TravelBuddy",
    url: "https://travelbuddy.com/",
    description: "A travel planning application that offers personalized itinerary suggestions and booking services.",
    technologies: [
      { name: "React" },
      { name: "Redux" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" }
    ],
  }
];

export default {
	info,
	experience,
	projects,
	volunteering,
	education,
	certifications,
	skills,
};
