import React from 'react'
import Image from "next/image";

const HeroSection = () => {
    return (
        <>
            {/* Hero Section */}
            <section id="home" className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
                    <div className="grid gap-10 md:grid-cols-2 items-center">
                        <div className="flex flex-col gap-1 order-2 md:order-1 text-center md:text-left">
                            <p className="text-gray-600 dark:text-gray-400 mb-4">👋🏿 Hello — I'm</p>
                            <h2 className="text-4xl sm:text-5xl md:text-7xl mb-6 font-bold">Mogau.</h2>
                            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">Senior software architect with 10+
                                years worth of experience</p>
                            <p className="text-sm italic text-gray-500 dark:text-gray-400 border-l-4 border-black dark:border-yellow-300 pl-4">
                                “Good software isn’t just built — it’s designing scalable systems for
                                real-world complexity.”
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-end order-1 md:order-2">
                            <div
                                className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 relative bg-linear-to-br from-amber-100 to-amber-200 dark:from-amber-200 dark:to-amber-300 rounded-full overflow-hidden">
                                <Image
                                    fill
                                    src="/images/mogau_im_portrait.png"
                                    alt="Mogau Mokgabudi Portrait"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HeroSection
