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
  portfolio,
  port,
  farveztech,
  ecom,
  isro,

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
    title: "Mern Stack Developer",
    icon: web,
  },
  {
    title: "Computer Engineer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Internship at AMTDC",
    company_name: "Advanced Manufucturing Technology Dev Centre",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2025 - Augest 2025",
    points: [
      "Student intern at AMTDC, IIT Madras Research Park for 1 month ",
    ],
  },
  {
    title: "Infosys Springboard",
    company_name: "Front-End Developer Certification",
    icon: tesla,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Completed Front-End Developer Certification from Infosys Springboard.",
    ],
  },
  {
    title: "Nptel Certification",
    company_name: "Joy of Computing using Python",
    icon: shopify,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Completed NPTEL Certification in Joy of Computing using Python with Elite grade",
    ],
  },
  {
    title: "Udemy",
    company_name: "Python Pro Bootcamp",
    icon: meta,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Completed Udemy Certification in Python Pro Bootcamp.",
    ],
  },
    {
    title: "ISRO",
    company_name: "Student Volunteer",
    icon: isro,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Served as a Student Volunteer at World Space Expo 2023 - isro",
    ],
  }
  
];

const testimonials = [
  {
    testimonial:
      "Click on the logo to Navigate and Connect With me on LinkedIn There You Get my Professtional Updates of Career.",
    name: "Mohammed Farves",
    company: "Linked IN",
    image: "linkedin.png",
    source_code_link: "https://www.linkedin.com/in/mohammed-f-8a3074244/",
  },
  {
    testimonial:
      "Click on the logo to Navigate and subscribe my Youtube Channel There i upload tech videos, reviews, unboxings.",
    name: "Farvez Tech",
    company: "YouTube",
    image: "yt.png",
    source_code_link: "https://youtube.com/@farveztech",
  },
  {
    testimonial:
      "Click on the logo to Navigate and follow me on instagram if you want personally contact with!",
    name: "mr_alien_30_",
    company: "Instagram",
    image: "insta.png",
    source_code_link: "https://www.instagram.com/mr_alien_30_/",
  },
];

const projects = [
  {
    name: "Goldora.in",
    description:
      "Web-based e-commerce platform that have a seperate admin panel for the client which live now .",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "woocommerce",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://goldora.in/",
  },
  {
    name: "Luxury Henna",
    description:
      "website for my Client that showcases there products and purchase option for the products.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://luxuryhenna.netlify.app/",
  },
  {
    name: "Typing Speed Tester ",
    description:
      "A web-based typing speed tester game that allows users to test and improve their typing skills with real-time.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://tstminiproject.netlify.app/",
  },
   {
    name: "1st Portfolio",
    description:
      "personal portfolio website that showcases my skills, projects, and experiences, designed to highlight my work as a developer.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "elementor",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://farveztech.in",
  },
   {
    name: "E Commerce - MERN",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/",
  },
   {
    name: "Website for my Channel",
    description:
      "A personal website designed to showcase my YouTube channel, featuring sections for videos for my subscribers",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: farveztech,
    source_code_link: "https://github.com/",
  }
];

export { services, technologies, experiences, testimonials, projects };
