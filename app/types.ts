export interface GithubStats { public_repos: number; followers: number }


export interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    gradient: string;
    badge?: string;
}


export interface Skill { name: string; level: number; icon: string }


export interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    period: string;
    achievements: string[];
}