import React from 'react'
import {Download, Github, Instagram, Mail, Twitter} from "lucide-react";

const AppFooter = () => {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h4 className="text-xl mb-6">Links</h4>
                        <div className="flex flex-col gap-3">
                            <a href="https://github.com"
                               className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                                <Github className="w-4 h-4"/>
                                GitHub
                            </a>
                            <a href="https://instagram.com"
                               className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                                <Instagram className="w-4 h-4"/>
                                Instagram
                            </a>
                            <a href="https://twitter.com"
                               className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                                <Twitter className="w-4 h-4"/>
                                Twitter
                            </a>
                            <a href="mailto:contact@example.com"
                               className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                                <Mail className="w-4 h-4"/>
                                Email
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl mb-6">Resume</h4>
                        <button
                            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors group">
                            <span>Download Resume</span>
                            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"/>
                        </button>
                    </div>
                </div>
                <div className="mt-12 pt-8 text-center text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Mogau Mokgabudi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default AppFooter
