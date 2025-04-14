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
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const PaginationPage = () => {
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
                                    ? " border-b-2 border-white"
                                    : "text-gray-400 "
                            }`}
                            onClick={() => setActiveTab("preview")}>
                            Preview
                        </button>

                        <button
                            className={`pb-2 text-sm font-medium ${
                                activeTab === "code"
                                    ? " border-b-2 border-white"
                                    : "text-gray-400 "
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

                <div>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink>1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink isActive>2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink>3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>

                <p> </p>
            </div>

            <div className="mt-[50px]">
                <h1 className="text-[30px] font-bold border-b pb-[10px]">
                    Usage
                </h1>
            </div>

            <div className="mt-[15px] p-[15px] rounded-lg bg-accent hover:text-accent-foreground dark:bg-accent/50 max-[550px]:overflow-y-scroll">
                <pre>
                    {`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
`}
                </pre>
            </div>
        </section>
    )
}

export default PaginationPage
