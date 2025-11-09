import React, { useState, useEffect } from 'react';
import { Github, GitFork, Star, Eye, Code, Users, Calendar, TrendingUp, Activity } from 'lucide-react';

interface GitHubUser {
    login: string;
    name?: string;
    bio?: string;
    avatar_url: string;
    public_repos: number;
    followers: number;
    following: number;
    location?: string;
    company?: string;
    created_at: string;
}

const GitHubAnalytics = () => {
    const [userData, setUserData] = useState<GitHubUser | null>(null);
    const [repos, setRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    interface Repository {
        id: number;
        name: string;
        description: string | null;
        html_url: string;
        language: string | null;
        stargazers_count: number;
        forks_count: number;
        updated_at: string;
    }

    const [stats, setStats] = useState({
        totalStars: 0,
        totalForks: 0,
        totalWatchers: 0,
        languages: {} as { [key: string]: number },
        topRepos: [] as Repository[]
    });

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                // Fetch user data
                const userResponse = await fetch('https://api.github.com/users/Dayveed021');
                const user = await userResponse.json();
                setUserData(user);

                // Fetch repositories
                const reposResponse = await fetch('https://api.github.com/users/Dayveed021/repos?sort=updated&per_page=100');
                const reposData = await reposResponse.json();
                setRepos(reposData);

                // Calculate statistics
                let totalStars = 0;
                let totalForks = 0;
                let totalWatchers = 0;
                interface LanguageCount {
                    [key: string]: number;
                }
                const languageCount: LanguageCount = {};

                interface RepoStats {
                    stargazers_count: number;
                    forks_count: number;
                    watchers_count: number;
                    language: string | null;
                }

                reposData.forEach((repo: RepoStats) => {
                    totalStars += repo.stargazers_count || 0;
                    totalForks += repo.forks_count || 0;
                    totalWatchers += repo.watchers_count || 0;

                    if (repo.language) {
                        languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
                    }
                });

                // Get top 5 repos by stars
                const topRepos = [...reposData]
                    .filter(repo => !repo.fork)
                    .sort((a, b) => b.stargazers_count - a.stargazers_count)
                    .slice(0, 5);

                setStats({
                    totalStars,
                    totalForks,
                    totalWatchers,
                    languages: languageCount,
                    topRepos
                });

                setLoading(false);
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    // Get top languages
    const topLanguages: [string, number][] = Object.entries(stats.languages)
        .sort((a, b) => (b[1] as number) - (a[1] as number))
        .slice(0, 6);

    const languageColors: { [key: string]: string } = {
        JavaScript: '#f1e05a',
        TypeScript: '#3178c6',
        Python: '#3572A5',
        HTML: '#e34c26',
        CSS: '#563d7c',
        Java: '#b07219',
        React: '#61dafb',
        Vue: '#42b883',
        PHP: '#4F5D95',
        Ruby: '#701516',
        Go: '#00ADD8',
        Rust: '#dea584',
        Swift: '#F05138'
    };

    if (loading) {
        return (
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
                <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">

            {/* Language Distribution */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Code className="text-purple-400" size={24} />
                    Top Languages
                </h3>
                <div className="space-y-4">
                    {topLanguages.map(([language, count]) => {
                        const percentage = (count / repos.length * 100).toFixed(1);
                        return (
                            <div key={language}>
                                <div className="flex justify-between mb-2">
                                    <span className="flex items-center gap-2">
                                        <span
                                            className="w-3 h-3 rounded-full"
                                            style={{ backgroundColor: languageColors[language] || '#8b5cf6' }}
                                        />
                                        {language}
                                    </span>
                                    <span className="text-slate-400">{count} repos ({percentage}%)</span>
                                </div>
                                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-1000"
                                        style={{
                                            width: `${percentage}%`,
                                            backgroundColor: languageColors[language] || '#8b5cf6'
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* Contribution Stats */}
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800">
                    <Code className="text-green-400 mb-3" size={28} />
                    <div className="text-2xl font-bold text-white">{Object.keys(stats.languages).length}</div>
                    <div className="text-sm text-slate-400">Languages Used</div>
                </div>
            </div>

            {/* GitHub Profile Link */}
            <div className="text-center">
                <a
                    href={`https://github.com/${userData?.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all hover:scale-105"
                >
                    <Github size={20} />
                    View Full GitHub Profile
                </a>
            </div>
        </div>
    );
};

export default GitHubAnalytics;