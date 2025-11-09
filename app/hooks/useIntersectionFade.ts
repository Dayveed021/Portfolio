import { useEffect } from "react";


export const useIntersectionFade = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate-fade-in")),
            { threshold: 0.1 }
        );
        document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
};