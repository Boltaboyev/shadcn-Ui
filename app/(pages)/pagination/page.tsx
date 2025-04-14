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
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Button} from "@/components/ui/button"
import {IoClipboardOutline} from "react-icons/io5"

const PaginationPage = () => {
    const [activeTab, setActiveTab] = useState("preview")
    return (
        <section className="p-[20px] w-[58vw]">
            <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>Docs</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink>Pagination</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>

                <h1 className="text-[30px] font-bold">Pagination</h1>

                <p className="opacity-80">
                    Pagination with page navigation, next and previous links.
                </p>
            </div>

            <div className="mt-[45px]">
                <div className="w-full border-b border-gray-700">
                    <div className="flex space-x-6">
                        <button
                            className={`pb-2 text-sm font-medium ${
                                activeTab === "preview"
                                    ? "text-white border-b-2 border-white"
                                    : "text-gray-400 hover:text-white"
                            }`}
                            onClick={() => setActiveTab("preview")}>
                            Preview
                        </button>

                        <button
                            className={`pb-2 text-sm font-medium ${
                                activeTab === "code"
                                    ? "text-white border-b-2 border-white"
                                    : "text-gray-400 hover:text-white"
                            }`}
                            onClick={() => setActiveTab("code")}>
                            Code
                        </button>
                    </div>
                </div>
            </div>

            <div className="border mt-5 rounded-lg p-[15px] h-[300px] flex flex-col justify-between">
                <div className="flex justify-between items-center">
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

                    <div className="flex justify-center items-center gap-[10px]">
                        <Button>Open in</Button>
                        <Button>
                            <IoClipboardOutline />
                        </Button>
                    </div>
                </div>

                <div>s</div>

                <p> </p>
            </div>
        </section>
    )
}

export default PaginationPage
