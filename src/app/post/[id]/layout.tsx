import RelatedRecipes from "@/components/RelatedRecipes";
import Subscription from "@/components/Subscription"
import { featuredRecipe } from "@/data/featuredRecipe";

export const metadata = {
    title: 'Post Detail'
}

export default function BlogPostLayout ({ children }: { children: React.ReactNode }) {
    return (
        <div className="single-post">
            {children}
            <Subscription />
            <RelatedRecipes feature={featuredRecipe} />
        </div>
    )
}