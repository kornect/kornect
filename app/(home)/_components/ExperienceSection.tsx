import React from "react";
import Link from "next/link";

type ExperienceItem = {
    role: string;
    company: string;
    period: string;
    subTasks: string[];
    summary: string;
    highlights: string[];
    stack: string[];
};

const experiences: ExperienceItem[] = [
    {
        role: "Senior Software Developer",
        company: "Enerweb",
        period: "Current",
        subTasks: ["Frontend", "Backend", "Mobile", "Cloud"],
        summary:
            "Delivered enterprise software across energy, retail, and finance, with a focus on trading systems and cloud-native modernization.",
        highlights: [
            "Built electricity trading capabilities for Southern African Power Pool (SAPP) market participants.",
            "Implemented planning, forecasting, and reporting workflows for national energy operations.",
            "Shipped AWS Lambda, Python, and Airflow-based reporting pipelines connected to Excel-driven workflows.",
            "Contributed to mobile trading features and improved cross-team delivery in a shared mono-repository setup.",
        ],
        stack: ["dotnet", "aws", "airflow", "maui", 'angular', "abpframework", "nx-workspaces"],
    },
    {
        role: "Software Developer / Consultant",
        company: "Decision Inc",
        period: "01/2020 – 01/2022",
        subTasks: ["Frontend", "Backend", "Architecture", "Integration"],
        summary:
            "Designed and built business-critical systems across mining, pharmaceuticals, loyalty platforms, and ERP integration projects.",
        highlights: [
            "Delivered customer rewards and digital wallet capabilities.",
            "Built mining operations tooling for maintenance planning and contractor workflows.",
            "Implemented microservices to support trading-book compliance with FRTB requirements."
        ],
        stack: ["C#", "Microservices", "SOAP", "REST", "SQL"],
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto py-6 py-12 md:py-16">
                <div className="mb-12 px-6">
                    <h3 className="text-3xl md:text-4xl mb-4">Work Experience</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                        Experience highlights extracted from my resume and focused on production software delivery.
                    </p>
                </div>

                <div className="grid gap-6 md:gap-8">
                    {experiences.map((item, index) => (
                        <article
                            key={index}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                                <div>
                                    <h4 className="text-xl font-semibold">{item.role}</h4>
                                    <div className="flex flex-wrap gap-2 mt-2 mb-2">
                                        {item.subTasks.map((subTask) => (
                                            <span
                                                key={subTask}
                                                className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200 px-2.5 py-1 rounded-full text-xs font-medium"
                                            >
                                                {subTask}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300">{item.company}</p>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{item.summary}</p>

                            <ul className="space-y-2 mb-5">
                                {item.highlights.map((highlight, hIndex) => (
                                    <li
                                        key={hIndex}
                                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                    >
                                        - {highlight}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="mt-8">
                    <Link
                        href="/documents/Mogau Mokgabudi - Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded transition-colors"
                    >
                        View Full Resume
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
