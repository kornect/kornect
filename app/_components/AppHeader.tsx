import React from 'react'
import Link from "next/dist/client/link";
import {Image} from "next/dist/client/image-component";

const AppHeader = () => {
    return (
        <header className={`fixed top-0 shadow bg-transparent left-0 w-full z-100 transition-transform duration-300`}>
            <div className="flex border bg-white items-center justify-between content-wrapper px-5 py-3">


                <div className="flex items-center gap-3">
                    <h1 className="font-bold text-black text-2xl">mogau_im.</h1>
                </div>


                <nav className="hidden md:flex gap-8 text-sm text-gray-700">
                    <Link href="/" className="hover:text-black transition">Home</Link>
                    <Link href="#about" className="hover:text-black transition">About</Link>
                    <Link href="#tech" className="hover:text-black transition">Tech Stack</Link>
                    <Link href="#experience" className="hover:text-black transition">Experience</Link>
                    <Link href="/studio" className="hover:text-black transition">Studio</Link>
                </nav>


                <div>
                    <Link className="bg-yellow-300 text-black" href="#contact">
                        <Image className="rounded-full inline" src="images/quillqode.png" height={50} width={50}
                               alt="Quill Qode Logo"/>
                        Work with me</Link>
                </div>
            </div>
        </header>
    )
}
export default AppHeader
