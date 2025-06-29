import Subscription from "@/components/Subscription";
import React from "react";

export default function BlogsListLayout ({ children }: { children: React.ReactNode}) {
    return (
        <div className="mt-20">
            <div>
                <h2 className="font-semiBold text-[64px] text-center">Blog & Article</h2>
                <p className="font-regular text-base text-gray-950/60 text-center mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                <div className="rounded-3xl border-2 border-gray-950/10 mr-auto ml-auto pr-2.5 py-2.5 pl-8 flex justify-between w-[43rem] mt-24">
                    <input className="placeholder:font-medium placeholder:text-sm placeholder:text-gray-950/40 focus:outline-0 font-medium w-[24rem]" type="text" placeholder="Search article, news or recipe..." />
                    <button className="font-semiBold text-sm text-white bg-black rounded-2xl px-14 py-5 cursor-pointer">Search</button>
                </div>
            </div>
            <main>
                {children}
            </main>
            <Subscription />
        </div>
    )
}