import {
  YOUTUBE_GIT_URL,
  YOUTUBE_HOSTED_URL,
  SWIGGY_GIT_URL,
  TODO_GIT_URL,
  TODO_HOSTED_URL,
  MOVIE_GIT_URL,
  MOVIE_HOSTED_URL,
  GITHUB_LINK,
} from "./constants";

export const SKILLS = [
  { group: "Frontend", items: ["React.js", "JavaScript", "HTML/CSS", "Tailwind CSS", "Bootstrap"] },
  { group: "State Management", items: ["Redux", "Redux Thunk", "Redux Toolkit", "Context API"] },
  { group: "Backend & Databases", items: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Authentication", "Redis", "SQL"] },
  { group: "Tools & AI", items: ["Git", "GitHub", "Model Context Protocol (MCP)"] },
];

export const STATS = [
  { value: "1.5+", label: "Years of experience" },
  { value: "MERN", label: "Full-stack" },
  { value: "4+", label: "Projects built" },
];

export const PROJECTS = [
  {
    title: "Video Streaming App",
    subtitle: "YouTube Clone",
    description:
      "A clone of the popular video-sharing platform YouTube, built as part of Akshay Saini's Namaste React course using modern front-end tooling including React, Redux Toolkit and Tailwind CSS.",
    stack: ["React", "Redux Toolkit", "Tailwind CSS", "Shimmer UI"],
    source: YOUTUBE_GIT_URL,
    live: YOUTUBE_HOSTED_URL,
  },
  {
    title: "FoodiiFi",
    subtitle: "Food Ordering App (Swiggy Clone)",
    description:
      "A food ordering app powered by live Swiggy data. Implements dynamic routing, custom hooks and code splitting with Parcel for optimal performance, plus Shimmer UI for smooth async loading.",
    stack: ["React", "Redux", "Tailwind CSS", "React Router"],
    source: SWIGGY_GIT_URL || GITHUB_LINK,
    live: "",
  },
  {
    title: "Todo App",
    subtitle: "State management with Context API",
    description:
      "A todo manager where you can add, edit and delete tasks. State is managed through the Context API for a scalable, well-organised architecture that keeps components lean.",
    stack: ["React", "Context API", "Tailwind CSS"],
    source: TODO_GIT_URL,
    live: TODO_HOSTED_URL,
  },
  {
    title: "Movie Recommendation App",
    subtitle: "Powered by the TMDb API",
    description:
      "Search movies, view rich details and explore related titles using The Movie Database API. Redux provides a centralised data flow with actions and reducers handling user interactions and API requests.",
    stack: ["React", "Redux", "React Router", "Custom Hooks", "SCSS"],
    source: MOVIE_GIT_URL,
    live: MOVIE_HOSTED_URL,
  },
];
