"use client"

import { featuredRecipe } from "@/data/featuredRecipe";
import Image from "next/image";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import RecipeIcon from "./RecipeIcon";
import { useState } from "react";
import Link from "next/link";

type FeatureItem = {
    id?: string;
    liked?: boolean;
}

export default function FeaturedRecipe ({ feature }: { feature: FeatureItem[] }) {
    const [liked, setLiked] = useState<{ [id: string]: boolean }>(() =>
        Object.fromEntries(feature.map((item: FeatureItem) => [item.id, item.liked]))
    );

    const toggleLike = (id: string) => {
        setLiked((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="mt-[157px]">
            <div className="flex items-center justify-between px-20">
                <p className="font-semiBold text-[44px] leading-14">Try this delicious recipe <br />to make your day</p>
                <p className="font-regular text-base text-gray-950/60 leading-7 mr-10">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqut enim ad minim</p>
            </div>
            <div className="grid grid-cols-4 justify-items-center px-[62px] mt-[89px] gap-y-10">
                {featuredRecipe.map((item) => (
                    <Link href={`/recipes/${item.id}`} passHref key={item.id}>
                        <div className="w-fit">
                            <div className="relative">
                                <Image className="w-fit rounded-[20px]" src={item.image} alt="food" width={290} height={200} />
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    toggleLike(item.id)}} className="absolute bg-white rounded-full p-3 right-5 top-5 cursor-pointer">
                                    <HeartSolid className={`${liked[item.id] ? 'text-[#FF6363]' : 'text-[#DBE2E5]'} w-6 h-6 transition`} />
                                </button>
                            </div>
                            <div>
                                <p className="max-w-[290px] font-semiBold text-base mt-4 mb-5 h-12">{item.title}</p>
                                <RecipeIcon food={item.icons} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}