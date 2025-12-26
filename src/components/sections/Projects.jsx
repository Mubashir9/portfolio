import { useState } from "react";

export const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const categories = [
        { id: "all", label: "All" },
        { id: "ml", label: "ML/AI" },
        { id: "agents", label: "AI Agents" },
        { id: "web", label: "Web Dev" },
        { id: "mobile", label: "Mobile" },
        { id: "data", label: "Data Viz" }
    ];

    const projects = [
        {
            title: "COVID-19 Economic Forecasting",
            category: "ml",
            description: "Linear Regression and Random Forest model predicting unemployment trends from COVID-19 data.",
            tags: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
            image: "/projects/Covid_Fred.png", // You'll add these later
            links: {
                github: "https://github.com/Mubashir9/COVID-19-Economic-Forecasting-using-FRED-API",
                // demo: "https://demo-link.com"
            },
            metrics: "R² of 0.8"
        },
        {
            title: "Pong Reinforcement Learning Agent",
            category: "ml",
            description: "Reinforcement Learning agent trained with PPO to play Pong, achieving 70-80% win rate against AI opponents.",
            tags: ["Python", "PyTorch", "Reinforcement Learning", "PPO"],
            image: "/projects/pong_demo.gif",
            links: {
                github: "https://github.com/Mubashir9/pong_rl",
                // demo: "https://demo-link.com"
            },
            metrics: "70-80% win rate"
        }
        // Add more projects as you build them
        // {
        //     title: "AI-Powered Chrome Extension",
        //     category: "web",
        //     description: "Chrome extension that uses AI to...",
        //     tags: ["JavaScript", "OpenAI API", "Chrome API"],
        //     image: "/projects/chrome-ext.png",
        //     links: { github: "...", demo: "..." },
        //     metrics: "1000+ users"
        // },
    ];

    const filteredProjects = activeFilter === "all" 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Projects
                </h2>
                <p className="text-gray-400 text-center mb-12">
                    Building AI-powered solutions across multiple domains
                </p>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                activeFilter === category.id
                                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                                    : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                            }`}
                        >
                            {category.label}
                            <span className="ml-2 text-xs opacity-70">
                                ({projects.filter(p => category.id === "all" || p.category === category.id).length})
                            </span>
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:bg-white/10 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group"
                        >
                            {/* Project Image/Placeholder */}
                            <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center overflow-hidden">
                                {project.image ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                ) : (
                                    <div className="text-6xl opacity-50">
                                        {project.category === "ml" && "🤖"}
                                        {project.category === "agents" && "🔮"}
                                        {project.category === "web" && "🌐"}
                                        {project.category === "mobile" && "📱"}
                                        {project.category === "data" && "📊"}
                                    </div>
                                )}
                                
                                {/* Metrics Badge */}
                                {project.metrics && (
                                    <div className="absolute top-3 right-3 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs text-cyan-400 font-semibold border border-cyan-500/30">
                                        {project.metrics}
                                    </div>
                                )}
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    {project.links.github && (<a
                                        
                                             href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
                                        >
                                            <span>⚙️</span>
                                            GitHub
                                        </a>
                                    )}
                                    {project.links.demo && (<a
                                        
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            <span>🚀</span>
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg mb-2">No projects in this category yet</p>
                        <p className="text-gray-500 text-sm">Check back soon for updates!</p>
                    </div>
                )}
            </div>
        </section>
    );
};