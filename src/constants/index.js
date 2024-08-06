import { meta, OneStop, shopify, starbucks, tesla } from "../assets/images";
import {
    flipkart,
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
    vitalvoice,
    skillSync
} from "../assets/icons";
import { OneStopPics } from "../assets/images/projects/OneStop";
import { QuillerPics } from "../assets/images/projects/Quiller";
import { SkillSyncPics } from "../assets/images/projects/SkillSync";

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
        theme: 'btn-back-blue',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/MdKaifSardar',
        theme: 'btn-back-black',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/md-kaif-sardar-12aab4290',
        theme: 'btn-back-blue',
    }
];

export const projects = [
    {
        id: 1,
        iconUrl: OneStop,
        color: "red",
        theme: 'btn-back-red',
        name: 'OneStop',
        description: 'A full stack Ecommerce website Using the MERN stack',
        github: 'https://github.com/MdKaifSardar/one-stop-frontend',
        link: 'https://one-stop-gules.vercel.app/',
        projectPics: OneStopPics
    },
    {
        id: 2,
        iconUrl: skillSync,
        color: "grey",
        theme: 'btn-back-black',
        name: 'SkillSync',
        description: 'A web application for resume enhancement',
        github: 'https://github.com/MdKaifSardar/skill-sync',
        link: 'https://skill-sync-jet.vercel.app/',
        projectPics: SkillSyncPics
    },
    {
        id: 3,
        iconUrl: quiller,
        color: "pink",
        theme: 'btn-back-violet',
        name: 'Quiller',
        description: 'Developed a full stack web application that helps users write downloadable notes and save them on the mongoDB cloud database.',
        github: 'https://github.com/MdKaifSardar/Quiller',
        link: 'https://github.com/MdKaifSardar/Quiller',
        projectPics: QuillerPics
    },
    {
        id: 4,
        iconUrl: vitalvoice,
        color: "violet",
        theme: 'btn-back-black',
        name: 'VitalVoice',
        description: 'Created a NEWS web application that displays latest news from from different countries using the NEWS API.',
        github: 'https://github.com/MdKaifSardar/news-app',
        link: 'https://github.com/MdKaifSardar/news-app',
        projectPics: QuillerPics
    },
    {
        id: 5,
        iconUrl: textutils,
        color: "black",
        theme: 'btn-back-grey',
        name: 'TextUtils',
        description: 'Developed a text utility web application taht lets you perform certain tasks on a block of text that you need help with.',
        github: 'https://github.com/MdKaifSardar/TextUtils',
        link: 'https://mdkaifsardar.github.io/TextUtils',
        projectPics: QuillerPics
    },
];