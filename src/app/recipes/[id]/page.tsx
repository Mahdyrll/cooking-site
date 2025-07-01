import { recipes } from "@/data/recipes";
import { notFound } from "next/navigation";
import { featuredRecipe } from "@/data/featuredRecipe";
import Profile from "@/components/Profile";
import Image from "next/image";
import Ingredients from '@/app/recipes/components/Ingredients';
import Direction from '@/app/recipes/components/Direction';
import SideBar from "../components/SideBar";

export default async function RecipePage ({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    const allRecipes = [...recipes, ...featuredRecipe];
    const recipe = allRecipes.find(item => item.id === id);

    if (!recipe) return notFound();

    return(
        <div className="mt-20">
            <div className="flex items-center px-20 justify-between">
                <div>
                    <p className="font-semiBold w-[1000px] text-[64px] leading-[85px]">{recipe.title}</p>
                    <div className="flex mt-11">
                        <div className="border-r-2 border-solid border-gray-950/10 pr-[57px]"><Profile /></div>
                        <div className="flex items-center border-r-2 border-solid border-gray-950/10 px-[30px] gap-x-4">
                            <Image src="/images/Timer.png" alt="timer" width={24} height={24} />
                            <div>
                                <p className="font-medium text-[12px] tracking-[2px] w-fit">PREP TIME</p>
                                <p className="font-medium text-gray-950/60 text-sm mt-1.5">15 Minutes</p>
                            </div>
                        </div>
                        <div className="flex items-center border-r-2 border-solid border-gray-950/10 px-[30px] gap-x-4">
                            <Image src="/images/Timer.png" alt="timer" width={24} height={24} />
                            <div>
                                <p className="font-medium text-[12px] tracking-[2px] w-fit">COOK TIME</p>
                                <p className="font-medium text-gray-950/60 text-sm mt-1.5">15 Minutes</p>
                            </div>
                        </div>
                        <div className="flex items-center pl-[30px] gap-x-2">
                            <Image src="/images/ForkKnife.png" alt="fork-knife" width={24} height={24} />
                            <p className="font-medium text-gray-950/60 text-sm w-fit">{recipe.icons}</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-fit gap-8">
                    <div className="h-fit space-y-4">
                        <Image className="bg-[#E7FAFE] rounded-full p-7" src="/images/printer.png" alt="printer" width={81} height={24} />
                        <p className="font-medium text-[12px] tracking-[1.3px] text-center">PRINT</p>
                    </div>
                    <div className="h-fit space-y-4">
                        <Image className="bg-[#E7FAFE] rounded-full p-7" src="/images/share.png" alt="share" width={81} height={24} />
                        <p className="font-medium text-[12px] tracking-[1.3px] text-center">SHARE</p>
                    </div>
                </div>
            </div>
            <div className="mt-16 px-20 grid grid-cols-3">
                <div className="relative col-span-2">
                    <Image className="rounded-[30px]" src="/images/image 26 (17).png" alt="recipe" width={840} height={600} />
                    <Image className="absolute top-[40%] right-[41%]" src="/images/Group 884.png" alt="play" width={120} height={120} />
                </div>
                <div className="bg-[#E7FAFE] rounded-[30px] w-fit flex flex-col pt-[30px] pb-8 px-8 ml-7">
                    <div className="w-fit">
                        <p className="font-semiBold text-2xl">Nutrition Information</p>
                    </div>
                    <div className="w-full mt-3">
                        <table className="w-full">
                            <tbody className="justify-between w-full">
                                {recipe?.nutrition && Object.entries(recipe.nutrition).map(([key, value], index) => (
                                    <tr className="flex justify-between w-full border-b-[2px] border-solid border-gray-950/5 pb-3 mt-3" key={index}>
                                        <th className="font-regular text-left text-gray-950/60 text-[18px]">{key}</th>
                                        <td className="font-regular text-[18px] text-black text-right">{key === 'Calories' ? `${value} kcal` :
                                            key === 'Cholesterol' ? value + 'mg' : `${value} g`
                                        }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="font-regular text-center w-80 text-gray-950/60 text-base leading-7 relative top-[33%]">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <p className="col-span-3 text-gray-950/60 font-regular text-base mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="flex px-20 mt-20 gap-x-11">
                <div>
                    <Ingredients />
                    <Direction />
                </div>
                <div>
                    <SideBar Title="Other Recipe" />
                </div>
            </div>
        </div>
    )
}