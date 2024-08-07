export const Data = {
  profile: {
    name: "PRASANTH M",
    role: "Fullstack Developer",
    location: "Tiruppur",
    email: "prasanthjohn35@gmail.com",
    telephone: "+91 7904111678",
    image: "images/me.webp",
  },
  aboutMe: {
    label: "Summary",
    description: "Todo",

  },
  skills: [
    {
      header: "Skills",
      content: [
        {
          label: "Language",
          value: "JavaScript, TypeScript, SQL"
        },
        {
          label: "Front-end",
          value: "React.js, Next.js, Capacitor.js, React Native, Kotlin, HTML, CSS, PWA, Redux"
        },
        {
          label: "Back-end",
          value: "Node.js, Express, PostgreSQL, Redis, Frappe, Hasura GraphQL,AWS"
        },
        {
          label: "Tools & Technologies",
          value: "Git, Postman, VS Code , Android Studio, Jest"
        }
      ]
    }
  ],
  socialMedia: {
    label: "Social",
    social: [
      {
        label: "Mail",
        name: "mail",
        url: "mailto:prasanthjohn35@gmail.com",
        className: "bx-envelope"
      },
      {
        label: "Call",
        name: "Call",
        url: "tel:+917904111678",
        className: "bx-phone",
      },
      {
        label: "LinkedIn",
        name: "linkedin",
        url: "https://www.linkedin.com/in/prasanth-m-674819178",
        className: "bxl-linkedin-square",
      },
      {
        label: "Github",
        name: "github",
        url: "https://github.com/prasanth35",
        className: "bxl-github"
      },
    ],
  },
  experience: {
    works: [
      {
        company: "FR8",
        title: "Full Stack Developer",
        period: "Dec. 2022 - Present",
        description: [
          "Implemented features like multi-language support (i18next) and direct customer interaction to improve user satisfaction across various FR8 products (Loads, Grow, OpenFR8, Parlo)",
          "Designed and built advanced responsive layouts, screens/components using adverse front-end technology (ReactJS, Next.js, Kotlin, React Native)",
          "Contributed to the development of mobile-centric applications using PWA, React Native, Ionic, and Capacitor.js, enabling functionalities like push notifications (OneSignal)",
          "Utilized Node.js for building backend functionalities and integrations with external APIs. Additionally, developed features like in-app chat (Rocket.chat) and custom user authentication",
          "Optimized search functionality with Redis Cache resulting in a 70% performance increase and reduced database load. Ensured the quality and responsiveness of applications",
          "Bridged communication between React.js/Next.js and Android using Capacitor.js for native API access",
          "Implemented custom hooks with React and developed reusable common components for efficient development",
          "Worked with cross-functional teams UX/UI, QA, and teammates to deliver high-quality software",
          "Utilized Git for version control, collaboration, and code review within a Scrum framework for sprint-based development",
          "Attended Open Source Conferences held in Mumbai and Chennai"
        ],
      },
      {
        title: "Machine Learning Intern",
        period: "Sep. 2020 - Dec. 2020",
        company: "Redpyx Technologies ",
        description: [
          "Developed a predictive model for Hepatitis B Virus Disease using Python and machine learning techniques",
          "Designed a user-friendly interface with HTML and CSS to visualize and interpret model results"
        ],
      },
    ],
    academic: [
      {
        career: "Master of Science in Software Systems",
        date: "2017 - 2022",
        institution: "PSG College of Arts and Science - Coimbatore",
        percentage : "81%"
      },
    ],
    projects: [
      {
        name: "Loads",
        company: "FR8",
        period: "",
        description: [
          "Contributed to the development of a truck brokerage application (React.js, Capacitor.js with Ionic).Key contributions include UI components, custom hooks, authentication flow, deep linking, custom React-Android bridges, and functionalities like Kafka-based event processing",
        ],
        link : 'https://play.google.com/store/apps/details?id=in.fr8.partner&hl=en'
      },
      {
        name: "Grow (FR8)",
        company: "FR8",
        period: "",
        description: [
          "Contributed to the development of an internal software (Next.js) used to manage loads and users.Major contributions include UI components and screen rewrites (React Native to Next.js). Dynamic PDF generation with Node JS and React Pdf Render, File upload to S3 Bucket"
        ],
        link : null
      },
      {
        name: "OpenFR8",
        company: "FR8",
        period: "",
        description: [
          "Developed UI components and contributed to minor database designs for a cross-border load board software facilitating freight movement between MENA, US, and Canada (built with React.js). Successfully showcased it in Frappe Verse Mumbai and in Frappe marketplace and Play Store",
        ],
        link : 'https://www.openfr8.com/'
      },
      {
        name: "Parlo",
        company: "FR8",
        period: "",
        description: [
          "Contributed to the UI development of a part-load management software using React.js with Frappe as the backend",
        ],
        link : 'https://frappecloud.com/marketplace/apps/parlo'
      },
      {
        name: "Link",
        company: "FR8",
        period: "",
        description: [
          "Developed a native Android application (Kotlin) similar to True-caller, displaying caller information for FR8 customers"
        ],
        link : null
      },
    ],
  },
};
