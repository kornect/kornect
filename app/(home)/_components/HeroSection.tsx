import React from 'react'
import {Image} from "next/dist/client/image-component";

const HeroSection = () => {
    return (
        <>
            {/* Hero Section */}
            <section id="home" className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-gray-600 mb-4">Hi! I'm</p>
                            <h2 className="text-6xl md:text-7xl mb-8">Mogau.</h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Software Developer with 10+ years of experience delivering
                                enterprise solutions across energy, retail, and finance.
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <div
                                className="w-64 relative h-64 md:w-80 md:h-80 bg-linear-to-br from-amber-100 to-amber-200 rounded-lg overflow-hidden">
                                <Image
                                    fill
                                    src="/images/mogau_im.png"
                                    alt="Mogau Mokgabudi Portrait"
                                    className=" w-72 h-72 object-cover"
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
