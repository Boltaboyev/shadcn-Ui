"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"
import React from "react"

const LeftSidebar = () => {
    const pathname = usePathname()

    return (
        <aside className="w-[270px] border-r border-dashed h-[100vh] sticky top-[57px] p-[15px] flex flex-col gap-[5px] max-[720px]:hidden">
            <Link
                href="/pagination"
                className={`w-full text-start p-[7px_10px] cursor-pointer rounded-lg hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 ${
                    pathname === "/pagination"
                        ? "bg-accent text-accent-foreground hover:bg-accent/50"
                        : ""
                }`}>
                Pagination
            </Link>

            <Link
                href="/progress"
                className={`w-full text-start p-[7px_10px] cursor-pointer rounded-lg hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 ${
                    pathname === "/progress"
                        ? "bg-accent text-accent-foreground dark:bg-accent/50"
                        : ""
                }`}>
                Progress
            </Link>

            <button className="w-full text-start p-[7px_10px] cursor-pointer rounded-lg hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50">
                Popover
            </button>
            <button className="w-full text-start p-[7px_10px] cursor-pointer rounded-lg hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50">
                Radio Group
            </button>
            <button className="w-full text-start p-[7px_10px] cursor-pointer rounded-lg hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50">
                Resizable
            </button>
            <button className="w-full text-start p-[7px_10px] cursor-pointer rounded-lg hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50">
                Scroll Area
            </button>
            <button className="w-full text-start p-[7px_10px] cursor-pointer rounded-lg hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50">
                Select
            </button>
            <button className="w-full text-start p-[7px_10px] cursor-pointer rounded-lg hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50">
                Separator
            </button>
            <button className="w-full text-start p-[7px_10px] cursor-pointer rounded-lg hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50">
                Sheet
            </button>
            <button className="w-full text-start p-[7px_10px] cursor-pointer rounded-lg hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50">
                Sidebar
            </button>
            <button className="w-full text-start p-[7px_10px] cursor-pointer rounded-lg hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50">
                Skeleton
            </button>
            <button className="w-full text-start p-[7px_10px] cursor-pointer rounded-lg hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50">
                Slider
            </button>
        </aside>
    )
}

export default LeftSidebar
