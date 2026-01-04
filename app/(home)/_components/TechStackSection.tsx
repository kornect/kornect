import React from 'react'
import {TechStackItem} from "@/app/(home)/_components/TechStackItem";

const TechStackSection = () => {
    const techStack = [
        {name: 'C#', icon: 'logos:c-sharp'},
        {name: 'JavaScript', icon: 'logos:javascript'},
        {name: 'TypeScript', icon: 'logos:typescript-icon'},
        {name: 'Python', icon: 'logos:python'},
        {name: 'Swift', icon: 'logos:swift'},
        {name: 'Angular', icon: 'logos:angular-icon'},
        {name: '.NET Core', icon: 'logos:dotnet'},
        {name: 'MAUI', icon: null},
        {name: 'Azure', icon: 'logos:microsoft-azure'},
        {name: 'AWS', icon: 'logos:aws'},
        {name: 'SQL Server', icon: 'logos:microsoft-icon'},
        {name: 'PostgreSQL', icon: 'logos:postgresql'},
        {name: 'Oracle', icon: 'logos:oracle'},
        {name: 'Git', icon: 'logos:git-icon'},
        {name: 'Docker', icon: 'logos:docker-icon'},
        {name: 'Apache Airflow', icon: 'logos:apache'},
        {name: 'Azure DevOps', icon: 'logos:azure-icon'},
        {name: 'Nuxt', icon: 'logos:nuxt-icon'},
        {name: 'Supabase', icon: 'logos:supabase-icon'},
    ];

    return (
        <>
            {/* Tech Stack Section */}
            <section id="stack" className="">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="mb-12">
                        <h3 className="text-4xl mb-4">Tech Stack</h3>
                        <p className="text-gray-600 text-lg">
                            Technologies and tools I work with to build robust solutions
                        </p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {techStack.map((tech, index) => (
                            <TechStackItem key={index} name={tech.name} icon={tech.icon}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default TechStackSection
