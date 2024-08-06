import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sinar Dyas",
  initials: "SD",
  location: "Tangerang, Indonesia",
  locationLink: "https://www.google.com/maps/place/Cikupa",
  about:
    "Software Engineer who loves to explore new things",
  summary:
    "As a Software Engineer, I have successfully taken multiple products from 0 to 1. I have 2 years experience leading a teams and over 6 years of experience in working both remotely and directly with companies based in South-east Asia, providing effective software solutions for various industries.",
  avatarUrl: "https://avatars.githubusercontent.com/u/40920618?v=4",
  personalWebsiteUrl: "https://sinardyas.xyz",
  contact: {
    email: "sinardyas96@gmail.com",
    tel: "+6282227777619",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sinardyas",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sinardyas/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/sinardyas",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Wrocław University of Technology",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "Soechi Group",
      link: "https://soechi.com",
      badges: ["Hybrid"],
      title: "Tech Lead",
      logo: ParabolLogo,
      start: "2024",
      end: "Present",
      description:
        "Led developer teams in designing and implementing software solutions. Created boilerplate to enable the rapid delivery of high-quality products in a fast-paced environment. ",
    },
    {
      company: "Meteor.id",
      link: "https://meteor.id",
      badges: ["Hybrid"],
      title: "Lead Software Engineer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Led developer teams in designing and implementing software solutions. Created boilerplate to enable the rapid delivery of high-quality products in a fast-paced environment. Created a drive thru' PoS system with Laravel, a metaverse backend system with micro-services architecture with NestJs, report generator with Golang.",
    },
    {
      company: "Meteor.id",
      link: "https://meteor.id",
      badges: ["Hybrid"],
      title: "Software Engineer",
      logo: ClevertechLogo,
      start: "2018",
      end: "2021",
      description:
        "Created a cross platform mobile apps with React Native, micro-services backend systems with NodeJs and back office dashboard with Angular.",
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Laravel",
    "Golang",
    "React Native",
    "Angular",
    "Docker",
    "MySQL/PostgreSQL",
    "Redis",
    "AWS",
    "Solidity",
    "EtherJs"
  ],
  projects: []
  // projects: [
  //   {
  //     title: "Olympichamp Website",
  //     techStack: ["Side Project", "Laravel", "PHP"],
  //     description:
  //       "Landing page for olympichamp",
  //     link: {
  //       label: "olympichamp.com",
  //       href: "https://helloolympichamp.wixstudio.io/my-site",
  //     },
  //   },
  //   {
  //     title: "Olympichamp Dashboard",
  //     techStack: ["Side Project", "Laravel", "PHP"],
  //     description:
  //       "A Dashboard for managing class schedule",
  //     link: {
  //       label: "dev-dashboard.olympichamp.com",
  //       href: "https://dev-dashboard.olympichamp.com",
  //     },
  //   }
  // ],
} as const;
