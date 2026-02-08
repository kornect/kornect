import React from 'react'
import Link from "next/dist/client/link";


const AboutMeSection = () => {
    return (
        <div id="about" className="relative overflow-hidden mb-10">
            <div
                className="grid md:grid-cols-2 gap-12 items-start p-10 z-10 bg-white dark:bg-gray-900 max-w-7xl mx-auto px-6 border dark:border-gray-700 shadow-lg rounded">
                <div>
                    <h2 className="text-3xl font-bold mb-4 font-poppins">About Me</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        My focus is on clean architecture, scalability, and long-term maintainability — not just getting
                        software shipped, but getting it right. I work closely with founders and engineering teams to
                        turn ambiguous problems into reliable, production-ready systems.
                    </p>
                </div>

                <div className="p-6 rounded relative bg-gray-50 dark:bg-gray-800">
                    <h2 className="text-2xl font-semibold mb-4 font-poppins">
                        Quill Qode | Studio
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Quill Qode is my development studio where I craft tailored web, mobile, and cloud applications
                        for startups and enterprises alike.
                        From MVPs to mission-critical systems.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"> I bring strategic insight and technical
                        excellence to
                        every
                        engagement.</p>
                    <Link
                        href="#contact"
                        className="inline-block text-right mt-2 px-5 py-3 bg-black text-white dark:bg-yellow-300 dark:text-black rounded hover:bg-gray-800 dark:hover:bg-yellow-400 transition"
                    >
                        Work with me through Quill Qode
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default AboutMeSection
