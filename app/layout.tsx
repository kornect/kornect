import type {Metadata} from "next";
import {Inter, Poppins} from "next/font/google";
import "./globals.css";
import AppFooter from "@/app/_components/AppFooter";
import React from "react";
import {CircuitBackground} from "@/app/(home)/_components/CircuitBackground";
import {ThemeToggle} from "@/app/(home)/_components/ThemeToggle";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ['100']
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://quillqode.com";
const siteTitle = "Mogau Mokgabudi | Senior Software Architect";
const siteDescription =
    "Portfolio of Mogau Mokgabudi, Senior Software Architect specializing in scalable web, mobile, and cloud solutions.";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: siteTitle,
        template: "Mogau Mokgabudi | %s",
    },
    description: siteDescription,
    keywords: [
        "Mogau Mokgabudi",
        "Software Architect",
        "Full-stack Developer",
        "Next.js",
        "TypeScript",
        "Cloud Solutions",
        "Portfolio",
        "Mobile Developer",
        "Dotnet MAUI"
    ],
    authors: [{name: "Mogau Mokgabudi"}],
    creator: "Mogau Mokgabudi",
    publisher: "Mogau Mokgabudi",
    alternates: {
        canonical: "/",
    },
    manifest: "/site.webmanifest",
    icons: {
        icon: [
            {url: "/favicon.ico"},
            {url: "/favicon-16x16.png", sizes: "16x16", type: "image/png"},
            {url: "/favicon-32x32.png", sizes: "32x32", type: "image/png"},
        ],
        shortcut: "/favicon.ico",
        apple: [{url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png"}],
        other: [
            {rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png"},
            {rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png"},
        ],
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: "/",
        siteName: "Mogau Mokgabudi Portfolio",
        locale: "en_ZA",
        type: "website",
        images: [
            {
                url: "/images/mogau_im_portrait.png",
                width: 1200,
                height: 1200,
                alt: "Mogau Mokgabudi portrait",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteTitle,
        description: siteDescription,
        images: ["/images/mogau_im_portrait.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    category: "technology",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <script dangerouslySetInnerHTML={{
                __html: `(function(){try{var s=localStorage.getItem('theme');if(s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`
            }}/>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Mogau Mokgabudi",
                        url: siteUrl,
                        jobTitle: "Senior Software Architect",
                        image: `${siteUrl}/images/mogau_im_portrait.png`,
                        sameAs: [
                            "https://github.com/kornect",
                            "https://twitter.com/mogausocial",
                        ],
                    }),
                }}
            />
        </head>
        <body className={`${inter.variable} ${poppins.variable} antialiased min-h-screen relative`}>
        {/* CPU Background */}
        <CircuitBackground/>
        {/* Floating Boxes */}
        <div className="fixed inset-0 -z-10 bg-cover bg-center">
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="font-semibold text-2xl">mogau_im.</h1>
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#home"
                       className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Home</a>
                    <a href="#about"
                       className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">About</a>
                    <a href="#stack"
                       className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Tech
                        Stack</a>
                    <a href="#experience"
                       className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Experience</a>
                </nav>
                <div className="flex items-center gap-3">
                    <ThemeToggle/>
                </div>
            </div>
        </header>

        {children}

        <AppFooter/>
        </body>
        </html>
    );
}
