import React from 'react'

const StatsSection = () => {
    return (
        <>
            {/* Stats Section */}
            <section className="">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl mb-2">10+</div>
                            <div className="text-gray-600">Years of Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl mb-2">15+</div>
                            <div className="text-gray-600">Production Systems Delivered</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl mb-2">3+</div>
                            <div className="text-gray-600">Industries Served</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl mb-2">100%</div>
                            <div className="text-gray-600">Ownership</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default StatsSection
