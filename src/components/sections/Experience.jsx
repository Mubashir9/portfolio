export const Experience = () => {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Amreli Steels",
            location: "Pakistan",
            period: "Oct 2023 - July 2024",
            type: "Full-time",
            responsibilities: [
                "Developed and optimized SAP ABAP reports, function modules, and OData services, resulting in a 40% reduction in data retrieval times and enhanced system efficiency across multiple modules.",
                "Led the integration of End to End third-party vendor applications with SAP systems through robust API development, enabling seamless data exchange that improved transaction processing speed by 35%.",
                "Designed and maintained SharePoint applications using C# and ASP.NET, implementing new features and resolving issues which increased user adoption rates by 25% and reduced support tickets by 15%.",
                "Designed and implemented robust ETL workflows integrating SAP data sources to Power BI, automating data extraction and transformation procedures that reduced manual effort by 40% and improved data accuracy."
            ]
        },
        {
            title: "Data Analyst Intern",
            company: "Amreli Steels",
            location: "Pakistan",
            period: "Apr 2023 - Sept 2023",
            type: "Internship",
            responsibilities: [
                "Enhanced Power BI dashboards, improving reporting speed and clarity for business users, which led to a 30% reduction in manual reporting efforts.",
                "Assisted in SAP Master Data Management, contributing to the entry and validation of over 1,000 critical manufacturing records across multiple departments, increasing data accuracy by 20%."
            ]
        },
        {
            title: "Data Analyst Intern",
            company: "Systems Ltd",
            location: "Pakistan",
            period: "Nov 2021 - Feb 2022",
            type: "Internship",
            responsibilities: [
                "Improved the integration of Prometheus with Grafana, enabling real-time visualization of 200+ system metrics and improving monitoring efficiency by 40%.",
                "Supported the implementation of Prometheus Anomaly Detector integration using Python, enabling predictive alerts that improved issue resolution time by 35% and minimized disruptions in system workflows."
            ]
        }
    ];

    return (
        <section id="experience" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Experience
                </h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div 
                            key={index}
                            className="rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all"
                        >
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {exp.title}
                                    </h3>
                                    <p className="text-blue-400 font-medium text-lg">{exp.company}</p>
                                    <p className="text-gray-400 text-sm">{exp.location}</p>
                                </div>
                                <div className="md:text-right flex flex-col items-start md:items-end gap-2">
                                    <p className="text-gray-300 text-sm">{exp.period}</p>
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                        {exp.type}
                                    </span>
                                </div>
                            </div>

                            {/* Responsibilities */}
                            <div className="space-y-2">
                                {exp.responsibilities.map((responsibility, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1.5 flex-shrink-0">▹</span>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {responsibility}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};