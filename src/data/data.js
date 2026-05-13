import html from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import git from '../assets/projects/git.png';
import implevision_logo from '../assets/implevision_logo.jpg';
import nextjs from '../assets/nextjs.png';
import { instagram,linkedin,whatsapp } from '../assets/projects/index';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

// const mysql      = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg';
const typescript = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg';


export const skills = [
    {
        image:html,
        title:'HTML'
    },
    {
        image:CSS,
        title:'CSS'
    },
    {
        image:Javascript,
        title:'Javascript'
    },
    {
        image:react,
        title:'React'
    },
    {
        image:nextjs,
        title:'Next.js'
    },
    {
        image:tailwind,
        title:'Tailwind'
    },
    {
        image:git,
        title:'Git'
    },
    {
        image:typescript,
        title:'TypeScript'
    },
]

export const navlinks=[
    {
        name:'About',
        to:'about'
    },
    {
        name:'Work',
        to:'experience'
    },
    {
        name:'Skills',
        to:'skills'
    },
    {
        name:'Projects',
        to:'work'
    },
    {
        name:'Contact',
        to:'contact'
    }
]

export const experiences = [
  {
    title: "Software Developer",
    company_name: "Implevision Technologies",
    icon: implevision_logo,
    icon_width: "50px",
    iconBg: "#E6DEDD",
    date: `June 2021 - ${new Date().getFullYear()} (present)`,
    points: [
      "Designing, developing, and maintaining scalable web applications using React.js and modern JavaScript/TypeScript frameworks.",
      "Collaborating closely with UI/UX designers and frontend developers to deliver high-quality user experiences.",
      "Optimizing application performance and ensuring responsive design across various devices and platforms.",
      "Participating in code reviews, debugging, and continuous integration to ensure code quality and maintainability.",
    ],
  },
];

export const socialMedia = [
    {
      name:'Linkedin',
      icon:linkedin,
      svgIcon:<FaLinkedin size={30}/>,
      link:'https://www.linkedin.com/in/parth-patel-8b3807a2/'
    },
    {
      name:'Instagram',
      icon:instagram,
      svgIcon:<FaInstagram size={30}/>,
      link:'https://www.instagram.com/__patel.parth__/'
    },
    // {
    //   name:'Twitter',
    //   icon:twitter,
    //   svgIcon:<FaTwitter size={30}/>,
    //   link:'https://www.twitter.com/sktaukir04/'
    // },
    {
      name:'Whatsapp',
      icon:whatsapp,
      svgIcon:<FaWhatsapp size={30}/>,
      link:'https://wa.me/8898916680'
    },
    {
      name:'Github',
      icon:whatsapp,
      svgIcon:<FaGithub size={30}/>,
      link:'https://github.com/parth-106'
    }
    ]

export const data = [
    // {
    //     id: 1,
    //     name: "System Health & Business Analytics Dashboard",
    //     description:
    //         "Built an enterprise-grade analytics dashboard to visualize real-time system health metrics, KPIs, and business intelligence data. Developed robust backend APIs using PHP & Laravel, featuring interactive charts, customizable widgets, and drill-down reporting for data-driven decision making.",
    //     tags: [
    //         { name: "React" },
    //         { name: "TypeScript" },
    //         { name: "PHP" },
    //         { name: "Laravel" },
    //         { name: "Chakra UI" },
    //     ],
    //     gradient: "from-blue-600 via-cyan-500 to-blue-400",
    //     icon: "chart",
    // },
    // {
    //     id: 2,
    //     name: "Background Job Tracking Dashboard",
    //     description:
    //         "Developed a real-time monitoring dashboard to track and manage background jobs, task queues, and scheduled processes. Built scalable backend APIs with PHP & Laravel to handle job lifecycle management, providing live status updates, failure alerts, and retry mechanisms.",
    //     tags: [
    //         { name: "React" },
    //         { name: "TypeScript" },
    //         { name: "PHP" },
    //         { name: "Laravel" },
    //         { name: "Chakra UI" },
    //     ],
    //     gradient: "from-purple-600 via-violet-500 to-indigo-500",
    //     icon: "jobs",
    // },
    {
        id: 3,
        name: "Enterprise Policy Creation",
        description:
            "Engineered a comprehensive policy management system enabling organizations to create, manage, and enforce enterprise-wide policies. Features multi-step workflows, role-based access control, version history, and structured approval chains.",
        tags: [
            { name: "React" },
            { name: "TypeScript" },
            { name: "Redux" },
            { name: "Chakra UI" },
            { name: "REST API" },
        ],
        gradient: "from-amber-500 via-orange-500 to-yellow-400",
        icon: "jobs",
    },
    // {
    //     id: 4,
    //     name: "e-Signature Configuration",
    //     description:
    //         "Developed a configurable e-signature workflow system allowing enterprises to set up digital signature flows, manage signer roles, and configure signing sequences. Seamlessly integrates with document management systems for end-to-end digital signing.",
    //     tags: [
    //         { name: "React" },
    //         { name: "TypeScript" },
    //         { name: "DocuSign API" },
    //         { name: "Chakra UI" },
    //         { name: "REST API" },
    //     ],
    //     gradient: "from-emerald-500 via-teal-500 to-green-400",
    //     icon: "sign",
    // },
    {
        id: 5,
        name: "Aikido Security",
        description:
            "Worked on backend security by auditing and fixing raw SQL queries, converting them into Laravel Query Builder syntax to eliminate potential SQL injection vulnerabilities and security risks. Ensured data integrity and improved overall application security posture.",
        tags: [
            { name: "PHP" },
            { name: "Laravel" },
            { name: "Query Builder" },
            { name: "SQL" },
            { name: "Security" },
        ],
        gradient: "from-red-600 via-rose-500 to-pink-500",
        icon: "security",
    },
    {
        id: 6,
        name: "Web Accessibility",
        description:
            "Led web accessibility improvements across enterprise applications to meet WCAG 2.1 AA compliance standards. Implemented semantic HTML, ARIA attributes, keyboard navigation, focus management, and screen reader support for fully inclusive user experiences.",
        tags: [
            { name: "React" },
            { name: "WCAG 2.1" },
            { name: "ARIA" },
            { name: "TypeScript" },
        ],
        gradient: "from-violet-600 via-purple-500 to-fuchsia-400",
        icon: "access",
    },
];