"use client"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import React, {useEffect, useState} from "react"
import {BsGithub} from "react-icons/bs"
import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"

// icons
import {SiShadcnui} from "react-icons/si"

const Header = () => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <header className="py-[10px] border-b border-dashed backdrop-blur-[7px] sticky top-0 z-10">
            <div className="w-[95%] m-auto flex justify-between items-center gap-[10px]">
                <div className="flex justify-start items-center gap-[20px]">
                    <div className="flex justify-start items-center gap-[10px]">
                        <SiShadcnui />
                        <p className="font-bold">shadcn/ui</p>
                    </div>

                    <div className="*:font-medium *:cursor-pointer *:opacity-80 flex justify-start items-center gap-[15px]">
                        <p>Docs</p>
                        <p>Components</p>
                        <p>Blocks</p>
                        <p>Charts</p>
                        <p>Themes</p>
                        <p>Colors</p>
                    </div>
                </div>

                <div className="flex justify-end items-center gap-[15px]">
                    <Input
                        type="search"
                        placeholder="Search documentation..."
                    />

                    <Button
                        variant="outline"
                        size="icon"
                        className="cursor-pointer">
                        <BsGithub />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="cursor-pointer relative"
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }>
                        <Sun
                            className={`h-[1.2rem] w-[1.2rem] transition-all ${
                                theme === "dark"
                                    ? "rotate-0 scale-0"
                                    : "rotate-0 scale-100"
                            }`}
                        />
                        <Moon
                            className={`h-[1.2rem] w-[1.2rem] transition-all absolute ${
                                theme === "dark"
                                    ? "rotate-0 scale-100"
                                    : "rotate-90 scale-0"
                            }`}
                        />
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header
