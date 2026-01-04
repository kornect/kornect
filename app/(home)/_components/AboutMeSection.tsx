import React from 'react'
import Link from "next/dist/client/link";


const AboutMeSection = () => {
    return (
        <div id="about" className="relative overflow-hidden">
            <div
                className="grid md:grid-cols-2 gap-12 items-start p-10 z-10 bg-white max-w-7xl mx-auto px-6 border rounded">
                <div>
                    <h2 className="text-3xl font-bold mb-4 font-poppins">About Me</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        I'm a Senior Software Developer with over 10 years of experience in energy, retail, and
                        financial systems.
                        I specialize in building scalable cloud-native systems and mission-critical platforms. I’m
                        passionate about clean architecture,
                        elegant code, and mentoring development teams.
                    </p>
                    <p className="text-sm italic text-gray-500 border-l-4 border-black pl-4">
                        “Designing custom solutions that create real value and solve real problems.”
                    </p>
                </div>

                <div className="p-6 rounded-lg relative bg-gray-100">
                    <h2 className="text-2xl inline font-semibold mb-3 font-poppins">
                        QuillQode | Studio
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Quill Qode is my development studio where I craft tailored web, mobile, and cloud applications
                        for startups and enterprises alike.
                        From MVPs to full-stack solutions, I bring strategic insight and technical excellence to every
                        engagement.
                    </p>
                    <Link
                        href="#contact"
                        className="inline-block mt-2 px-5 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default AboutMeSection
