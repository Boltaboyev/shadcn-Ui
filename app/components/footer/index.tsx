import React from "react"

const Footer = () => {
    return (
        <footer className="border-t border-dashed py-[20px]">
            <div className="w-[95%] m-auto">
                <h1 className="text-[15px] opacity-80">
                    Built by{" "}
                    <span className="border-b cursor-pointer font-medium">shadcn</span>. The
                    source code is available on {" "}
                    <span className="border-b cursor-pointer font-medium">GitHub</span>.
                </h1>
            </div>
        </footer>
    )
}

export default Footer
