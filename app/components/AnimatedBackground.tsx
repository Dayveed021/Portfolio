import React, { useEffect, useState } from "react";

type Props = {};

const AnimatedBackground = (props: Props) => {
    const [activeSection, setActiveSection] = useState("home");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Mouse tracking for parallax effects
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent): void => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div
                className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                style={{
                    left: `${mousePosition.x / 50}px`,
                    top: `${mousePosition.y / 50}px`,
                    transition: "all 0.3s ease-out",
                }}
            />
            <div
                className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl right-0 bottom-0"
                style={{
                    right: `${mousePosition.x / 80}px`,
                    bottom: `${mousePosition.y / 80}px`,
                    transition: "all 0.5s ease-out",
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
