import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Exploring New Web Technologies",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PWA(Progressive Web Application)",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux State Management",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Netlify",
    icon: docker,
  },
];

const projects = [
  {
    name: "GoTrainer-MERN Stack Application to schedule workouts",
    description:
      "The goTrainer web application is a secure and user-friendly fitness tracker built using the MERN stack. The application features JWT authentication for secure access to user data, with login, logout, and signup features. The frontend is designed with ReactJS, allowing users to easily add and delete workouts from their personal list. The backend uses Node.js and Express.js for efficient communication..",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "red-text-gradient",
      },
      {
        name: "express",
        color:
          "bg-gradient-to-r from-blue-100 via-green-800 to-indigo-500 text-transparent bg-clip-text",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "JWT Authentication",
        color:
          "bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Nitin-Sharma-coder/gotrainer",
    live_webapp_link: "https://gotrainer.netlify.app/",
  },
  {
    name: "EstateTrends - A Modern Real Estate Application",
    description:
      "EstateTrends is a modern full-stack real estate web application built using ReactJS, Next.js, Bayut-API, and Chakra-ui. The application offers renting and buying options to users, with advanced property filtering and detailed property pages that include an image carousel for a comprehensive view of available properties...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "pink-text-gradient",
      },
      {
        name: "bayut-api",
        color:
          "bg-gradient-to-r from-pink-500 via-red-600 to-yellow-500 text-transparent bg-clip-text",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Nitin-Sharma-coder/EstateTrend",
    live_webapp_link: "https://estate-trend.vercel.app/",
  },
  {
    name: "Crypto Haul - Cryptocurrency(Ethereum) transaction platform",
    description:
      "Crypto Haul is a cryptocurrency transaction platform developed using ReactJS, Solidity, Smart Contracts, Metamask, and Netlify. The platform enables secure and efficient cryptocurrency transactions by implementing blockchain metamask pairing and interaction with smart contracts..",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "metamask",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Nitin-Sharma-coder/cryptohaul",
    live_webapp_link: "https://cryptohaul.netlify.app/",
  },
];

export { services, technologies, projects };
