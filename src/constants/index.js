import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    tailwindcss,
    threads,
    textutils,
    quiller,
    vitalvoice
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Full Stack Developer Intern",
        company_name: "Ardent",
        icon: 'ardent.png',
        iconBg: "#accbe1",
        date: "April 2024 - June 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Contributing in open source projects.",
        ],
    },
    {
        title: "KeyGenCoders Club Intern",
        company_name: "KeyGenCoders",
        icon: 'keygencoders.png',
        iconBg: "#0d2614",
        date: "May 2024 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: quiller,
        theme: 'btn-back-blue',
        name: 'Quiller',
        description: 'Developed a full stack web application that helps users write notes on the and save the notes on mongoDB cloud database.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: vitalvoice,
        theme: 'btn-back-black',
        name: 'VitalVoice',
        description: 'Created a new we application that displays letst news from froom different countries usig the NEWS API.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: textutils,
        theme: 'btn-back-grey',
        name: 'TextUtils',
        description: 'Developed a text utility web application taht lets you perform certain tasks on a block of text that you need help with.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: shopify,
        theme: 'btn-back-blue',
        name: 'Frontend clone of Flipkart website (under development)',
        description: 'Cloned the frontend aspects of the flipkart landing page.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
];