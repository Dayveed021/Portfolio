import { Github, Mail } from 'lucide-react'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-center md:text-left">
                        © 2025 David Udoh. Built with React & Tailwind CSS
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="https://github.com/Dayveed021"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-purple-600 rounded-full transition-all hover:scale-110"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="mailto:udohdavid021@gmail.com"
                            className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-purple-600 rounded-full transition-all hover:scale-110"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer