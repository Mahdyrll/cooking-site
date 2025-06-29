"use client"

import Link from "next/link";
import RecipeIcon from "./RecipeIcon";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import Image from "next/image";
import { featuredRecipe } from "@/data/featuredRecipe";
import { useState } from "react";

type FeatureItem = {
    id?: string;
    liked?: boolean;
}

export default function RelatedRecipes ({ feature, title = 'Check out the delicious recipe' }: { feature: FeatureItem[], title?: string}) {
    const [liked, setLiked] = useState<{ [id: string]: boolean }>(() =>
        Object.fromEntries(feature.map((item: FeatureItem) => [item.id, item.liked]))
    );

    const toggleLike = (id: string) => {
        setLiked((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const selectedRecipes = featuredRecipe.slice(0, 4);

    return (
        <div className="px-20">
            <p className="font-semiBold text-4xl text-center">{title}</p>
            <div className="flex justify-between mt-20 mb-32">
                {selectedRecipes.map((item) => (
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