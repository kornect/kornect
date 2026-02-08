'use client'

import {useEffect, useState} from 'react'
import {Moon, Sun} from 'lucide-react'

export function ThemeToggle() {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        setDark(document.documentElement.classList.contains('dark'))
    }, [])

    function toggle() {
        const next = !dark
        document.documentElement.classList.toggle('dark', next)
        localStorage.setItem('theme', next ? 'dark' : 'light')
        setDark(next)
    }

    return (
        <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
            {dark ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
        </button>
    )
}
