"use client"

import { useState } from "react";
import Image from "next/image";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import RecipeIcon from "./RecipeIcon";
import { recipes } from '@/data/recipes';
import Link from "next/link";
import { Recipe } from "@/types/recipe";

function RecipeCard ({ recipe }: { recipe: Recipe }) {
    const [liked, setLiked] = useState(recipe.liked)

    return (
        <Link href={`/recipes/${recipe.id}`} passHref>
            <div className="bg-[linear-gradient(to_bottom,_rgba(231,249,253,0)_0%,_rgba(231,249,253,1)_100%)] rounded-[30px] px-4 pt-4 pb-8">
                <div className="relative">
                    <Image className="rounded-[20px]" src={recipe.image} alt={recipe.title} width={368} height={250} />
                    <button onClick={(e) => {
                        e.preventDefault()
                        setLiked(!liked)}} className="absolute bg-white rounded-full p-3 right-5 top-5 cursor-pointer">
                        <HeartSolid className={`${liked ? 'text-[#FF6363]' : 'text-[#DBE2E5]'} w-6 h-6 transition`} />
                    </button>
                </div>
                <div className="pl-2.5">
                    <p className="font-semiBold text-[22px] max-w-[352px] mt-6">{recipe.title}</p>
                    <div className="pr-10 mt-5">
                        <RecipeIcon food={recipe.icons} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default function Recipes () {
    return (
        <div className="mt-44">
            <div>
                <p className="font-semiBold text-[45px] text-center">Simple and tasty recipes</p>
                <p className="font-regular text-base text-center text-gray-950/60 mt-6 leading-7">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqut enim ad minim</p>
            </div>
            <div className="grid grid-cols-3 justify-items-center px-[4rem] gap-y-10 mt-22">
                {recipes.map((item: Recipe) => 
                item.type === 'recipe' ? (
                    <RecipeCard key={item.id} recipe={item} />
                ) : (
                    <div key={item.id}>
                        <Image
                            src={item.image}
                            alt="ads"
                            width={400}
                            height={434}
                        />
                    </div>
                )
                )}
            </div>
        </div>
    )
}