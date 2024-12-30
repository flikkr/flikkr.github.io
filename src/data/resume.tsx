import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, CodeIcon } from "lucide-react";

export const DATA = {
  name: "Kazymir Rabier",
  initials: "KR",
  url: "https://dillion.io",
  location: "Singapore",
  locationLink: "https://www.google.com/maps/place/singapore",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. " +
    "In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons).\n" +
    "I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
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
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Grab",
      href: "https://grab.com",
      badges: [],
      location: "Singapore",
      title: "Senior Software Engineer",
      logoUrl: "/grab.jpeg",
      start: "April 2022",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "RIMM Sustainability",
      href: "https://rimm.io/",
      badges: [],
      location: "Singapore",
      title: "Software Engineer",
      logoUrl: "/rimm.jpeg",
      start: "October 2020",
      end: "March 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
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
      image: "/scamhunt-site.png",
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
