import React from 'react'
import {Download, Github, Instagram, Mail, Twitter} from "lucide-react";

const AppFooter = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h4 className="text-xl mb-6">Links</h4>
                        <div className="flex flex-col gap-3">
                            <a href="https://github.com"
                               className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                <Github className="w-4 h-4"/>
                                GitHub
                            </a>
                            <a href="https://instagram.com"
                               className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                <Instagram className="w-4 h-4"/>
                                Instagram
                            </a>
                            <a href="https://twitter.com"
                               className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                <Twitter className="w-4 h-4"/>
                                Twitter
                            </a>
                            <a href="mailto:contact@example.com"
                               className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                <Mail className="w-4 h-4"/>
                                Email
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl mb-6">Resume</h4>
                        <button
                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group">
                            <span>Download Resume</span>
                            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"/>
                        </button>
                    </div>
                </div>
                <div className="mt-12 pt-8 text-center text-gray-600 dark:text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Mogau Mokgabudi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default AppFooter
