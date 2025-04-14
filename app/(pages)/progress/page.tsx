"use client"

import React, {useState} from "react"

import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Button} from "@/components/ui/button"
import {IoClipboardOutline} from "react-icons/io5"
import {Progress} from "@/components/ui/progress"

const ProgressPage = () => {
    const [activeTab, setActiveTab] = useState("preview")
    return (
        <section className="p-[20px] w-[58vw] max-[980px]:w-full">
            <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>Docs</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink>Progress</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>

                <h1 className="text-[30px] font-bold">Progress</h1>

                <p className="opacity-80">
                    Displays an indicator showing the completion progress{" "}
                    <br className="max-[470px]:hidden" /> of a task, typically
                    displayed as a progress bar.
                </p>
            </div>

            <div className="mt-[45px]">
                <div className="w-full border-b border-gray-700">
                    <div className="flex space-x-6">
                        <button
                            className={`pb-2 text-sm font-medium ${
                                activeTab === "preview"
                                    ? " border-b-2 border-white"
                                    : "text-gray-400 hover:text-white"
                            }`}
                            onClick={() => setActiveTab("preview")}>
                            Preview
                        </button>

                        <button
                            className={`pb-2 text-sm font-medium ${
                                activeTab === "code"
                                    ? "border-b-2 border-white"
                                    : "text-gray-400"
                            }`}
                            onClick={() => setActiveTab("code")}>
                            Code
                        </button>
                    </div>
                </div>
            </div>

            <div className="border mt-5 rounded-lg p-[15px] h-[300px] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <div className="max-[350px]:hidden">
                        <Select>
                            <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Style" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="n">New York</SelectItem>
                                    <SelectItem value="d">Default</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex justify-center items-center gap-[10px]">
                        <Button>Open in</Button>
                        <Button variant="outline">
                            <IoClipboardOutline />
                        </Button>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center">
                    <Progress value={80} className="w-[60%]" />
                </div>

                <p> </p>
            </div>

            <div className="mt-[50px]">
                <h1 className="text-[30px] font-bold border-b pb-[10px]">
                    Installation
                </h1>
            </div>

            <div className="w-full border-b border-gray-700 mt-[20px]">
                <div className="flex space-x-6">
                    <button
                        className={`pb-2 text-sm font-medium 
                            border-b-2 border-white
                        }`}
                        onClick={() => setActiveTab("cli")}>
                        CLI
                    </button>

                    <button
                        className={`pb-2 text-sm font-medium
                                text-gray-400 hover:text-white
                        }`}
                        onClick={() => setActiveTab("manual")}>
                        Manual
                    </button>
                </div>
            </div>

            <div className="mt-[15px] p-[15px] rounded-lg bg-accent hover:text-accent-foreground dark:bg-accent/50 flex justify-between items-center gap-[10px]">
                <p className=" max-[550px]:overflow-scroll text-nowrap">
                    npx shadcn@latest add progress
                </p>
                <IoClipboardOutline className="cursor-pointer" />
            </div>

            <div className="mt-[50px]">
                <h1 className="text-[30px] font-bold border-b pb-[10px]">
                    Usage
                </h1>
            </div>

            <div className="max-[550px]:overflow-scroll mt-[15px] p-[15px] rounded-lg bg-accent hover:text-accent-foreground dark:bg-accent/50 flex justify-between items-center">
                <pre>{`import { Progress } from "@/components/ui/progress"`}</pre>
                <IoClipboardOutline className="cursor-pointer" />
            </div>

            <div className="max-[550px]:overflow-scroll mt-[15px] p-[15px] rounded-lg bg-accent hover:text-accent-foreground dark:bg-accent/50 flex justify-between items-center">
                <pre>{`<Progress value={33} />`}</pre>
                <IoClipboardOutline className="cursor-pointer" />
            </div>
        </section>
    )
}

export default ProgressPage
