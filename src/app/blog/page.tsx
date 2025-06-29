"use client"

import SideBar from "../recipes/components/SideBar";
import Image from "next/image";
import { useState } from "react";
import posts from "@/data/blogs";
import Link from "next/link";

export default function BlogPageList () {
    const [bgBlack, setBgBlack] = useState<Number>(0)
    const boxes = [1, 2, 3, 4, 5, '...', ')'];

    const bgChanger = (index: number) => {
        setBgBlack(index);
    }

    return (
        <div className="px-20 mt-20 flex flex-col items-center">
            <div className="flex justify-between gap-x-16">
                <div className="grid gap-y-8">
                    {posts.map(post => (
                        <Link href={`/post/${post.id}`} key={post.id}>
                            <div className="flex items-center gap-x-11">
                                <Image className="rounded-[20px]" src={post.image} alt="blog" width={290} height={200} />
                                <div>
                                    <p className="font-semiBold text-[23px]">{post.title}</p>
                                    <p className="font-regular text-base text-gray-950/60 w-[30rem] leading-7 mt-3">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim</p>
                                    <div className="flex items-center mt-8">
                                        <div className="items-center flex gap-x-4 border-r-2 border-gray-950/10 pr-6">
                                            <Image src={post.profile} alt="author" width={40} height={40} />
                                            <p className="font-Bold text-base">{post.author}</p>
                                        </div>
                                        <p className="font-medium text-sm pl-6 text-gray-950/60">12 November 2021</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <SideBar Title="Tasty Recipes" />
            </div>
            <div className="space-x-3.5 mt-20">
                {boxes.map((num, index) => (
                    <button onClick={() => bgChanger(index)} className={`font-Bold text-[18px] border-2 border-gray-950/10 rounded-2xl py-4 px-6 hover:border-black w-[64px] transition duration-200 cursor-pointer ${bgBlack === index ? 'bg-black text-white border-black' : ''}`} key={num}>{num}</button>
                ))}
            </div>
        </div>
    )
}