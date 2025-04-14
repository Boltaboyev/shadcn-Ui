import {Button} from "@/components/ui/button"
import React from "react"

const RightSidebar = () => {
    return (
        <aside className="w-[270px] border-l border-dashed h-[100vh] sticky top-[57px] gap-[5px] p-[15px] flex flex-col max-[980px]:hidden">
            <h1 className="font-medium">On This Page</h1>
            <p className="opacity-80 cursor-pointer text-[14px]">
                Installation
            </p>
            <p className="opacity-80 cursor-pointer text-[14px]">Usage</p>
            <p className="opacity-80 cursor-pointer text-[14px] ml-3">
                Next.js
            </p>

            <div className="flex flex-col gap-[5px] border cursor-pointer p-[10px] rounded-lg group mt-5">
                <h1 className="font-medium group-hover:underline">
                    Deploy your shadcn/ui app on Vercel
                </h1>

                <p className="opacity-80 cursor-pointer text-[14px]">
                    Trusted by OpenAI, Sonos, Chick-fil-A, and more.
                </p>

                <p className="opacity-80 cursor-pointer text-[14px]">
                    Vercel provides tools and infrastructure to deploy apps and
                    features at scale. Deploy Now
                </p>

                <Button>Deploy Now</Button>
            </div>
        </aside>
    )
}

export default RightSidebar
