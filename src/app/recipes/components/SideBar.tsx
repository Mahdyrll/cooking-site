import { recipes } from "@/data/recipes"
import Image from "next/image"
import Link from "next/link";

export default function SideBar ({ Title }: { Title: string }) {
    const selectedRecipes = [
        recipes[4],
        recipes[8],
        recipes[7],
    ].filter(Boolean);

    return (
        <div className="w-max">
            <h3 className="font-semiBold text-[32px] w-max">{Title}</h3>
            <aside className="mt-8 ">
                {selectedRecipes.map((recipe, index) => 
                    <Link href={`/recipes/${recipe.id}`} key={index}>
                        <div className="flex items-center mb-6 gap-x-6">
                            <Image className="rounded-[20px]" src={recipe.image} alt="recipe" width={180} height={120} />
                            <div>
                                <p className="w-[208px] break-words line-clamp-2 font-semiBold text-xl">{recipe.title}</p>
                                <p className="font-medium text-sm text-gray-950/60 mt-3.5">By Andreas Paula</p>
                            </div>
                        </div>
                    </Link>
                )}
                <Image className="mt-14" src='/images/Ads.png' alt="ads" width={400} height={434} />
            </aside>
        </div>
    )
}