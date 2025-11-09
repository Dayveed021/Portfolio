import { Menu, X } from 'lucide-react';
import { useState } from 'react'
import { Link } from 'react-router';

type Props = {}

const Navbar = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        DU
                    </Link>

                    <div className="hidden md:flex space-x-8">
                        {["Home", "About", "Projects", "Experience", "Contact"].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="hover:text-purple-400 transition-colors cursor-pointer"
                                >
                                    {item}
                                </button>
                            )
                        )}
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-slate-900 border-t border-slate-800">
                    {["Home", "About", "Projects", "Experience", "Contact"].map(
                        (item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="block w-full text-left px-4 py-3 hover:bg-slate-800"
                            >
                                {item}
                            </button>
                        )
                    )}
                </div>
            )}
        </nav>
    )
}

export default Navbar