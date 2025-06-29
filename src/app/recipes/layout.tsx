import RelatedRecipes from "@/components/RelatedRecipes";
import Subscription from "@/components/Subscription";
import { featuredRecipe } from "@/data/featuredRecipe";

export default function RecipeLayout ({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            <Subscription />
            <RelatedRecipes feature={featuredRecipe} title="You may like these recipe too" />
        </div>
    )
}