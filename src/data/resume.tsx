import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, CodeIcon } from "lucide-react";

export const DATA = {
  name: "Kazymir Rabier",
  initials: "KR",
  url: "https://flikkr.github.io",
  location: "Singapore",
  locationLink: "https://www.google.com/maps/place/singapore",
  description:
    "A software engineer that loves to build cool stuff on web and mobile",
  summary:
    "Started working in tech since 2020 after completing my degree in [Computer Science](/#education). " +
    "Joined [Grab](https://grab.com)—Southeast Asia's leading superapp—as an Android engineer on the [GrabDefence](https://defence.grab.com) team " +
    "where I worked on strengthening Grab's ecosystem against fraud 💪🏻",
  avatarUrl: "/me.jpeg",
  skills: [
    "Flutter",
    "Android",
    "React",
    "Next.js",
    "Node.js",
    "Firebase",
    "Postgres",
    "Docker",
    "Typescript",
    "Python",
    "Java",
    "Kotlin",
    "C++",
    "Java Native Interface (JNI)",
    "OutSystems",
  ],
  navbar: [
    // { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "/projects", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    email: "kazymir.rabier@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/kaz-github",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/kaz-linkedin",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/kaz-x",
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "#contact",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Grab",
      href: "https://grab.com",
      badges: ["C++", "Java", "Kotlin", "Android", "Python", "SQL", "JNI"],
      location: "Singapore",
      title: "Senior Software Engineer",
      logoUrl: "/grab.jpeg",
      start: "April 2022",
      end: "Present",
      description:
        "Joined the [GrabDefence](https://defence.grab.com) team to ideate, design, and implement cutting edge solutions for Guardian, a device intelligence SDK capable of detecting risk signals to convert into actionable measures.",
    },
    {
      company: "RIMM",
      href: "https://rimm.io/",
      badges: ["OutSystems", "Javascript", "MSSQL"],
      location: "Singapore",
      title: "Software Engineer",
      logoUrl: "/rimm.jpeg",
      start: "October 2020",
      end: "March 2022",
      description:
        "I was hired as the first developer and developed the MVP and first version of RIMM, a sustainability reporting platform, from the ground up." +
        "I led the hiring of several key staff members and was responsible for establishing early engineering guidelines and best practices." +
        "",
    },
  ],
  education: [
    {
      school: "Newcastle University",
      href: "https://www.ncl.ac.uk/",
      degree: "Bachelor's Degree of Computer Science (BSc)",
      logoUrl: "/newcastle.jpeg",
      start: "2017",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "ScamHunt Admin Dashboard",
      href: "https://admin.scamhunt.sg",
      dates: "Sep 2024 - Dec 2024",
      active: true,
      description:
        "To complement the ScamHunt Telegram bot, I built an admin dashboard to allow authorities to view reports and insights.",
      technologies: ["Typescript", "Next.js", "Supabase", "Refine.dev"],
      links: [
        {
          type: "Website",
          href: "https://admin.scamhunt.sg",
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: "/scamhunt-admin.png",
      video: "",
    },
    {
      title: "ScamHunt Telegram Bot",
      href: "https://scamhunt.sg",
      dates: "Sep 2024 - Dec 2024",
      active: true,
      description:
        "ScamHunt is a Telegram bot that allows users to report scams and help authorities get insights into the latest scams using AI. " +
        "It is built with Python and uses the Telegram API to send and receive messages.",
      technologies: ["Python", "OpenAI", "Postgres"],
      links: [
        {
          type: "Website",
          href: "https://scamhunt.sg",
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: "Telegram",
          href: "https://telegram.scamhunt.sg",
          icon: <Icons.telegram className='size-3' />,
        },
        {
          type: "About",
          href: "https://www.build.gov.sg/scamhunt/",
          icon: <Icons.externalLink className='size-3' />,
        },
      ],
      image: "/scamhunt-site.jpeg",
      video: "",
    },
    {
      title: "Ivan Polunin Archives",
      href: "https://ivanpolunin.com",
      dates: "January 2023 - Present",
      active: true,
      description:
        "Although not a tech-heavy project, I build a website and social media presence for my late grandgather, Ivan Polunin, " +
        "a medical doctor who moved to Singapore in the 1940s and dedicated his life to perserving Southeast Asian history through photography and film.",
      technologies: ["Wix", "Javascript", "CSS", "Social Media"],
      links: [
        {
          type: "Website",
          href: "https://ivanpolunin.com",
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: "Instagram",
          href: "https://www.instagram.com/ivanpoluninarchives/",
          icon: <Icons.instagram />,
        },
        {
          type: "Facebook",
          href: "https://www.facebook.com/profile.php?id=100090217056500&notif_id=1737959999291976&notif_t=page_user_activity",
          icon: <Icons.facebook />,
        },
      ],
      image: "/ivan-polunin-site.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Build For Good Hackathon",
      dates: "August 28th - September 28th, 2024",
      location: "Singapore",
      description:
        "Developed a Telegram bot and admin dashboard to help people detect scams and provide authorities with insights.",
      image: "https://www.tech.gov.sg/images/technews/BFG_600x300.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className='h-4 w-4' />,
          href: "https://www.build.gov.sg/",
        },
      ],
    },
  ],
} as const;
