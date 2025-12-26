export const About = () => {

    const techStack = [
        { name: "Python", icon: "python", source : "simple" },
        { name: "Pandas", icon: "pandas", source : "simple" },
        { name: "NumPy", icon: "numpy", source : "simple" },
        {name:"Matplotlib", icon:"matplotlib", source : "devicon"},
        { name: "scikit-learn", icon: "scikitlearn", source : "simple" },
        { name: "PyTorch", icon: "pytorch", source : "simple" },
        { name: "OpenCV", icon: "opencv", source : "simple" },
        { name: "Java", icon: "java", source: "devicon" },
        { name: "JavaScript", icon: "javascript", source : "simple"},
        { name: "React", icon: "react", source : "simple"},
        {name: "C#", icon:"csharp", source : "devicon"},
        { name: "ASP.NET", icon: "dotnet", source : "simple" },
        { name: "SAP", icon: "sap", source : "simple" },
        { name: "R", icon: "r", source : "simple" },
        { name: "MySQL", icon: "mysql", source : "simple" },
        { name: "Power BI", icon: "power-bi", source: "icons8" },
        { name: "Tableau", icon: "tableau-software", source: "icons8" },
        { name: "Git", icon: "git" , source : "simple"},
        { name: "VSCode", icon: "vscode", source : "devicon" },
        {name: "Cursor", icon: "cursor", source : "simple"},
        {name: "Ollama", icon: "ollama", source : "simple" }
    ];

 const getIconUrl = (tech) => {
        if (tech.source === "simple") {
            return `https://cdn.simpleicons.org/${tech.icon}`;
        } else if (tech.source === "devicon") {
            return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.icon}-original.svg`;
        } else if (tech.source === "icons8") {
            return `https://img.icons8.com/color/96/${tech.icon}.png`;
        }
        return `https://cdn.simpleicons.org/${tech.icon}`;
    };

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-white/5 backdrop-blur-sm">
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        Software engineer with experience building production systems and AI applications. 
                        Currently pursuing a Masters in AI while working on machine learning and computer vision projects.
                    </p>
                    
                    <p className="text-center text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-8 italic">
                        "Building intelligent systems, one algorithm at a time"
                    </p>

                    {/* Tech Stack Slider */}
                    <div className="overflow-x-auto overflow-y-hidden relative mb-6 scrollbar-hide">
                        <div className="flex animate-scroll gap-6 hover:animation-pause">
                            {/* First set */}
                            {techStack.map((tech, index) => (
                                <div 
                                    key={`tech-1-${index}`}
                                    className="flex flex-col items-center justify-center min-w-[80px] p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-blue-500/50 group flex-shrink-0"
                                >
                                    <div className="w-12 h-12 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <img 
                                            src={getIconUrl(tech)}
                                            alt={tech.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs text-gray-400 whitespace-nowrap">{tech.name}</span>
                                </div>
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {techStack.map((tech, index) => (
                                <div 
                                    key={`tech-2-${index}`}
                                    className="flex flex-col items-center justify-center min-w-[80px] p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-blue-500/50 group flex-shrink-0"
                                >
                                    <div className="w-12 h-12 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <img 
                                            src={getIconUrl(tech)}
                                            alt={tech.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs text-gray-400 whitespace-nowrap">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-center text-gray-400 text-sm">
                        Specializing in <span className="text-blue-400 font-semibold">Machine Learning</span> • <span className="text-cyan-400 font-semibold">Software Development</span> • <span className="text-blue-400 font-semibold">Data Analytics</span>
                    </p>
                </div>

                {/* Icons8 Attribution - Required for free use */}
                <p className="text-center mt-4 text-xs text-gray-600">
                    Some icons by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 underline">Icons8</a>
                </p>
            </div>
        </section>
    );
};