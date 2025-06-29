import RelatedRecipes from "@/components/RelatedRecipes"
import Subscription from "@/components/Subscription"
import { featuredRecipe } from "@/data/featuredRecipe"
import React from "react"

export const metadata = {
    title: 'contact us'
}

export default function contactUsLayout ({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            <Subscription />
            <RelatedRecipes feature={featuredRecipe} />
        </div>
    )
}