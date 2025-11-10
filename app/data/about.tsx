import { Cloud, Code, Database, Palette, TestTube, Wrench } from "lucide-react";

export const technicalSkills = [
    {
        category: "🎨 Frontend",
        icon: <Code className="text-purple-400" size={24} />,
        color: "from-purple-500 to-pink-500",
        skills: [
            "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript",
            "React.js", "Next.js", "React Native", "Angular",
            "Vue", "Tailwind CSS", "SCSS/SASS", "Flutter"
        ]
    },
    {
        category: "🔧 Backend",
        icon: <Database className="text-green-400" size={24} />,
        color: "from-green-500 to-teal-500",
        skills: [
            "Node.js", "Express.js", "Django",
            "RESTful APIs", "JWT", "OAuth"
        ]
    },
    {
        category: "☁️ Database & Cloud",
        icon: <Cloud className="text-blue-400" size={24} />,
        color: "from-blue-500 to-cyan-500",
        skills: [
            "MongoDB", "Supabase", "AWS (S3, EC2, Lambda)",
            "Netlify", "Docker", "CI/CD Pipelines"
        ]
    },
    {
        category: "🧪 Testing & Debugging",
        icon: <TestTube className="text-orange-400" size={24} />,
        color: "from-orange-500 to-red-500",
        skills: [
            "Jest", "Unit Testing", "QA Collaboration",
            "Sentry", "Postman"
        ]
    },
    {
        category: "🛠️ Software & Tools",
        icon: <Wrench className="text-yellow-400" size={24} />,
        color: "from-yellow-500 to-orange-500",
        skills: [
            "Git", "GitHub", "Git Bash", "VS Code",
            "Figma", "Canva", "Jira", "Trello",
            "Agile/Scrum", "Kali Linux"
        ]
    },
    {
        category: "🎭 Design & UX",
        icon: <Palette className="text-pink-400" size={24} />,
        color: "from-pink-500 to-rose-500",
        skills: [
            "Figma", "Adobe XD", "Photoshop", "Illustrator",
            "Responsive Design", "Accessibility (WCAG)"
        ]
    }
];