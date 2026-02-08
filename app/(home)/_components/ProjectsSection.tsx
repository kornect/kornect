import React from 'react'
import {ProjectCard} from "@/app/(home)/_components/ProjectCard";

const ProjectsSection = () => {
    const projects = [
        {
            title: "Energy Management Platform",
            description: "Enterprise-grade cloud platform for real-time energy monitoring and optimization across multiple facilities.",
            tags: ["React", "Node.js", "AWS", "PostgreSQL"],
            link: "#"
        },
        {
            title: "Retail Analytics Dashboard",
            description: "Advanced analytics solution providing actionable insights for retail operations and inventory management.",
            tags: ["Vue.js", "Python", "TensorFlow", "MongoDB"],
            link: "#"
        },
        {
            title: "Financial Trading System",
            description: "High-performance trading platform with real-time market data integration and algorithmic trading capabilities.",
            tags: ["Angular", "Java", "Kafka", "Redis"],
            link: "#"
        },
        {
            title: "Mobile Banking App",
            description: "Secure mobile banking solution with biometric authentication and seamless transaction processing.",
            tags: ["React Native", "GraphQL", "Microservices"],
            link: "#"
        },
        {
            title: "IoT Smart Grid",
            description: "IoT infrastructure for smart grid management with predictive maintenance and automated load balancing.",
            tags: ["Python", "MQTT", "Azure IoT", "TimescaleDB"],
            link: "#"
        },
        {
            title: "Healthcare Portal",
            description: "HIPAA-compliant patient management system with telemedicine capabilities and electronic health records.",
            tags: ["React", "Django", "Docker", "MySQL"],
            link: "#"
        }
    ];

    return (
        <>      {/* Completed Projects Section */}
            <section id="projects" className="bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="mb-12">
                        <h3 className="text-4xl mb-4">Completed Projects</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            A selection of enterprise solutions and platforms I&#39;ve built over the years
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProjectsSection
