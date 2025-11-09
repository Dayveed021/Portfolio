import React, { useState, useEffect } from 'react';
import { Home, Github, Mail, Coffee } from 'lucide-react';

const NotFoundPage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const funnyMessages = [
        "Well, this is awkward... 😅",
        "Houston, we have a problem 🚀",
        "404: Page went to get milk 🥛",
        "This page is on vacation 🏖️",
        "Page not found. But you found me! 👋",
        "Oops! Wrong turn at Albuquerque 🗺️"
    ];

    const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];


    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative flex items-center justify-center px-4">
            {/* Simple Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                    style={{
                        left: `${mousePosition.x / 50}px`,
                        top: `${mousePosition.y / 50}px`,
                        transition: 'all 0.3s ease-out'
                    }}
                />
            </div>

            <div className="relative z-10 text-center max-w-2xl">
                {/* Big 404 */}
                <h1 className="text-[180px] md:text-[250px] font-bold leading-none bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-8">
                    404
                </h1>

                {/* Simple Message */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {randomMessage}
                </h2>

                <p className="text-xl text-slate-400 mb-8">
                    The page you're looking for doesn't exist. <br />
                    Maybe it never did... 🤔
                </p>

                {/* Fun Note */}
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-8">
                    <div className="flex items-center justify-center gap-2 text-slate-300">
                        <Coffee className="text-purple-400" size={24} />
                        <p>
                            Even developers get lost sometimes. <br />
                            <span className="text-slate-500 text-sm">It's probably my fault, not yours.</span>
                        </p>
                    </div>
                </div>

                {/* Simple Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="/"
                        className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg flex items-center gap-2 transition-all hover:scale-105 font-semibold"
                    >
                        <Home size={20} />
                        Go Home
                    </a>
                    <a
                        href="mailto:udohdavid021@gmail.com"
                        className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center gap-2 transition-all hover:scale-105 font-semibold"
                    >
                        <Mail size={20} />
                        Tell Me About It
                    </a>
                </div>

                {/* Simple Footer */}
                <p className="text-slate-600 text-sm mt-12">
                    Lost? Confused? Same. Let's get you back on track.
                </p>
            </div>
        </div>
    );
};

export default NotFoundPage;