export interface NutritionInfo {
    Calories: number;
    "Total Fat": number;
    Protein: number;
    Carbohydrate: number;
    Cholesterol: number;
}

export type Recipe = {
    id: string;
    title?: string;
    image: string;
    icons?: string;
    liked?: boolean;
    type?: 'recipe' | 'ads';
    nutrition?: NutritionInfo
};