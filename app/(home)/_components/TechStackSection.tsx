import React from 'react'
import {TechGroup, TechStackGroup} from "@/app/(home)/_components/TechStackGroup";

const TechStackSection = () => {
    const techStack = [
        {
            name: 'Core Languages',
            items: [
                {name: 'C#', icon: 'logos:c-sharp'},
                {name: 'JavaScript', icon: 'logos:javascript'},
                {name: 'TypeScript', icon: 'logos:typescript-icon'},
                {name: 'Python', icon: 'logos:python'},
                {name: 'Swift', icon: 'logos:swift'},
            ]
        },
        {
            name: 'Frameworks & Platforms',
            items: [
                {name: '.NET Core', icon: 'logos:dotnet'},
                {name: 'MAUI', icon: 'logos:dotnet'},
                {name: 'Angular', icon: 'logos:angular-icon'},
                {name: 'Nextjs', icon: 'logos:nextjs-icon'},
                {name: 'Nestjs', icon: 'logos:nestjs-icon'},
            ]
        },
        {
            name: 'Cloud & Infrastructure',
            items: [
                {name: 'Azure', icon: 'logos:microsoft-azure'},
                {name: 'AWS', icon: 'logos:aws'},
                {name: 'Docker', icon: 'logos:docker-icon'},
                {name: 'Supabase', icon: 'logos:supabase-icon'},
                {name: 'Firebase', icon: 'logos:firebase-icon'},
            ]
        },
        {
            name: 'Data & Tooling',
            items: [
                {name: 'Azure DevOps', icon: 'logos:azure-icon'},
                {name: 'Github', icon: 'logos:github-icon'},
                {name: 'SQL Server', icon: 'logos:microsoft-icon'},
                {name: 'PostgreSQL', icon: 'logos:postgresql'},
                {name: 'Oracle', icon: 'logos:oracle'},
            ]
        }
    ] as TechGroup[];

    return (
        <>
            {/* Tech Stack Section */}
            <section className="py-10">
                <div className="max-w-7xl mx-auto px-6 py-10 md:py-12 bg-white dark:bg-gray-900 shadow-lg border dark:border-gray-700 rounded">
                    <header className="mb-12">
                        <h3 className="text-3xl md:text-4xl mb-4">Tech Stack</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                            Technologies and tools I work with to build robust solutions
                        </p>
                    </header>

                    <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {techStack.map((group, index) => (
                            <TechStackGroup key={index} group={group}/>
                        ))}
                    </div>

                    <p className="mt-10 text-center text-gray-600 dark:text-gray-400 font-inter italic">
                        Tools evolve — strong system design, clear trade-offs, and long-term thinking do not.
                    </p>
                </div>
            </section>
        </>
    )
}
export default TechStackSection
