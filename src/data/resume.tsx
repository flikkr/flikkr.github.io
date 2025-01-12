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
    "Joined [Grab](https://grab.com)—Southeast Asia's leading superapp—as an Android engineer on the [GrabDefence](https:/defence.grab.com) team " +
    "where I worked on strengthening Grab's ecosystem against fraud 💪🏻",
  avatarUrl: "/me.jpeg",
  skills: [
    "Flutter",
    "Android",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Firebase",
    "Python",
    "Docker",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    email: "kazymir.rabier@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
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
      badges: ["C++", "Android", "Python", "SQL"],
      location: "Singapore",
      title: "Senior Software Engineer",
      logoUrl: "/grab.jpeg",
      start: "April 2022",
      end: "Present",
      description: "",
    },
    {
      company: "RIMM",
      href: "https://rimm.io/",
      badges: ["OutSystems", "Web", "SQL"],
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
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: ["Typescript", "Next.js", "Postgres", "Refine.dev"],
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
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: ["Python", "Telegram API", "OpenAI", "Postgres", "Docker"],
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
      ],
      image: "/scamhunt-site.jpeg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className='h-4 w-4' />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
  ],
} as const;
