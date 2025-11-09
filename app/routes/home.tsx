import type { Route } from "./+types/home";
import {
  Award,
  Briefcase,
  ChevronDown,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedBackground from "~/components/AnimatedBackground";
import Footer from "~/components/Footer";
import GitHubAnalytics from "~/components/GithubAnalytics";
import Navbar from "~/components/Navbar";
import { experience } from "~/data/experience";
import { projects } from "~/data/projects";
import { skills } from "~/data/skills";
import { useIntersectionFade } from "~/hooks/useIntersectionFade";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "David's Portfolio" },
    { name: "description", content: "Get to know me!" },
  ];
}

export default function Home() {
  interface GithubStats {
    public_repos: number;
    followers: number;
  }

  const [githubStats, setGithubStats] = useState<GithubStats | null>(null);

  // Fetch GitHub stats
  useEffect(() => {
    fetch("https://api.github.com/users/Dayveed021")
      .then((res) => res.json())
      .then((data) => setGithubStats(data))
      .catch((err) => console.log("GitHub API error:", err));
  }, []);

  useIntersectionFade();



  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="scroll-animate opacity-0">
            <div className="mb-8 inline-block">
              <div className="w-40 h-40 rounded-full bg-linear-to-br from-purple-500 to-pink-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                David Udoh
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 mb-4">
              Frontend Developer | UX Enthusiast | Creative Problem Solver
            </p>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
              Crafting responsive, user-centered interfaces that bridge design
              and code. Passionate about building accessible, high-performance
              web experiences.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="https://github.com/Dayveed021"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center gap-2 transition-all hover:scale-105"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="mailto:udohdavid021@gmail.com"
                className="px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg flex items-center gap-2 transition-all hover:scale-105"
              >
                <Mail size={20} />
                Contact Me
              </a>
            </div>

            <div className="flex justify-center gap-6 text-slate-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  {githubStats?.public_repos || "..."}
                </div>
                <div className="text-sm">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  {githubStats?.followers || "..."}
                </div>
                <div className="text-sm">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3+</div>
                <div className="text-sm">Years Exp</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate opacity-0">
            <h2 className="text-4xl font-bold mb-12 text-center">
              About{" "}
              <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  I'm a creative and detail-oriented Frontend Developer based in
                  Dallas, TX, with expertise in modern frameworks like React,
                  Angular, and Next.js. I specialize in translating design
                  visions into pixel-perfect, accessible web experiences.
                </p>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  With a strong foundation in both development and design tools
                  like Figma and Adobe Creative Suite, I bridge the gap between
                  aesthetics and functionality, ensuring every project is both
                  beautiful and performant.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    "React",
                    "TypeScript",
                    "Next.js",
                    "Tailwind",
                    "AWS",
                    "Figma",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-slate-800 rounded-full text-sm hover:bg-linear-to-r hover:from-purple-600 hover:to-pink-600 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Award className="text-purple-400" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Certifications</h3>
                    <ul className="text-slate-400 space-y-1">
                      <li>• AWS Certified Solutions Architect</li>
                      <li>• Frontend Development Track (OctaFx)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="scroll-animate opacity-0"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="flex items-center gap-2">
                        <span>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Analytics Section */}
      <section id="github" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate opacity-0">
            <h2 className="text-4xl font-bold mb-4 text-center">
              GitHub{" "}
              <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Analytics
              </span>
            </h2>
            <p className="text-slate-400 text-center mb-12">
              A comprehensive view of my open source contributions and coding activity
            </p>

            <GitHubAnalytics />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate opacity-0">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Featured{" "}
              <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="scroll-animate opacity-0 group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {project.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full">
                        {project.badge}
                      </span>
                    </div>
                  )}

                  <div className={`h-2 bg-linear-to-r ${project.gradient}`} />

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors relative z-20 pointer-events-auto"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>

                  <div
                    className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate opacity-0">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Work{" "}
              <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-linear-to-b from-purple-500 to-pink-500" />

              {experience.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`scroll-animate opacity-0 relative mb-12 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"} md:w-1/2`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-950" />

                  <div className="ml-8 md:ml-0 bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all">
                    <div className="flex items-center gap-2 mb-2 text-purple-400">
                      <Briefcase size={20} />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-slate-400 mb-4">
                      {exp.company} • {exp.location}
                    </p>

                    <ul className="space-y-2 text-slate-300">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="scroll-animate opacity-0 mt-16 text-center">
              <div className="inline-block bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
                <GraduationCap
                  className="mx-auto mb-4 text-purple-400"
                  size={48}
                />
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-slate-300">
                  AAS in Information Systems Cybersecurity
                </p>
                <p className="text-slate-400">Collin College, Plano, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate opacity-0">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Get In{" "}
              <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-slate-400 text-center mb-12">
              Have a project in mind or want to collaborate? Let's connect!
            </p>

            <div className="grid md:grid-cols-1 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <Mail className="text-purple-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:udohdavid021@gmail.com"
                      className="text-slate-400 hover:text-purple-400"
                    >
                      udohdavid021@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <Github className="text-purple-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">GitHub</h3>
                    <a
                      href="https://github.com/Dayveed021"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-purple-400"
                    >
                      @Dayveed021
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="text-purple-400 mt-1 text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-slate-400">Dallas, Texas</p>
                  </div>
                </div>
              </div>

              {/* <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "sending" ? (
                    "Sending..."
                  ) : formStatus === "success" ? (
                    "✓ Message Sent!"
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {formStatus === "success" && (
                  <p className="text-green-400 text-center text-sm">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                )}
              </form> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .scroll-animate {
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
