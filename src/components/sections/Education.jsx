export const Education = () => {
    const degrees = [
        {
            degree: "Master of Information Technology",
            specialization: "Artificial Intelligence",
            institution: "Macquarie University",
            location: "Sydney, AU",
            period: "Feb 2025 - Dec 2026",
            status: "In Progress"
        },
        {
            degree: "Bachelor of Computer Science",
            specialization: "Data Science",
            institution: "Monash University",
            location: "Kuala Lumpur, MY",
            period: "Oct 2019 - Dec 2022",
            status: "Completed"
        }
    ];

    const certifications = [
        // Add your certifications here as you complete them
        // { name: "AWS Certified Solutions Architect", provider: "Amazon", year: "2024" },
    ];

    return (
        <section id="education" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Education
                </h2>

                {/* Degrees Section */}
                <div className="space-y-6 mb-12">
                    {degrees.map((edu, index) => (
                        <div 
                            key={index}
                            className="rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-gray-300 font-medium">{edu.specialization}</p>
                                    <p className="text-gray-300 font-medium">{edu.institution}</p>
                                    <p className="text-gray-400 text-sm">{edu.location}</p>
                                </div>
                                <div className="mt-2 md:mt-0 md:text-right">
                                    <p className="text-gray-300 text-sm">{edu.period}</p>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${
                                        edu.status === "In Progress" 
                                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" 
                                            : "bg-green-500/20 text-green-400 border border-green-500/30"
                                    }`}>
                                        {edu.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Whenever You wanna add courses      */}
                {/* Certifications & Courses Section */}
                {/* <div className="rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            Certifications & Additional Courses
                        </span>
                    </h3>
                    
                    {certifications.length > 0 ? (
                        <div className="space-y-3">
                            {certifications.map((cert, index) => (
                                <div 
                                    key={index}
                                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <div>
                                        <p className="text-gray-200 font-medium">{cert.name}</p>
                                        <p className="text-gray-400 text-sm">{cert.provider}</p>
                                    </div>
                                    <span className="text-gray-400 text-sm">{cert.year}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-400 text-center py-4">
                            More certifications coming soon...
                        </p>
                    )}
                </div> */}
            </div>
        </section>
    );
};