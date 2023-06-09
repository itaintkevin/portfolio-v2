"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

const ThemeToggle = () => {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, systemTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const handleDarkMode = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
      }
    
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <button onClick={handleDarkMode} className="z-10 fixed -top-6 -right-14 transition ease-in-out duration:1000 bg-primary dark:bg-white text-white dark:text-primary text-xl flex justify-center items-end pb-3 w-[120px] h-[70px] rotate-45 mx-2">
        {currentTheme === "dark" ? <BsFillSunFill className="cursor-pointer"/> :<BsFillMoonStarsFill className="cursor-pointer -rotate-45"/>}
        </button>
    )
}

export default ThemeToggle