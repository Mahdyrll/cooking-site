import { Recipe } from "@/types/recipe";

export const recipes: Recipe[] = [
    {
        id: 'big-and-juicy-wagyu-beef-cheeseburger',
        title: 'Big and Juicy Wagyu Beef Cheeseburger',
        image: '/images/image 26 (7).png',
        icons: 'Snack',
        type: 'recipe',
        liked: true,
        nutrition: {
            Calories: 588,
            "Total Fat": 41,
            Protein: 29,
            Carbohydrate: 35,
            Cholesterol: 94
        }
    },
    {
        id: 'fresh-lime-roasted-salmon-with-ginger-sauce',
        title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
        image: '/images/image 26.png',
        icons: 'Fish',
        type: 'recipe',
        liked: false,
        nutrition: {
            Calories: 293,
            "Total Fat": 19,
            Protein: 27,
            Carbohydrate: 5,
            Cholesterol: 37.4
        }
    },
    {
        id: 'strawberry-oatmeal-pancake-with-honey-syrup',
        title: 'Strawberry Oatmeal Pancake with Honey Syrup',
        image: '/images/image 26 (1).png',
        icons: 'Breakfast',
        type: 'recipe',
        liked: false,
        nutrition: {
            Calories: 484,
            "Total Fat": 12,
            Protein: 40,
            Carbohydrate: 56,
            Cholesterol: 37.4
        }
    },
    {
        id: 'fresh-and-healthy-mixed-mayonnaise-salad',
        title: 'Fresh and Healthy Mixed Mayonnaise Salad',
        image: '/images/image 26 (2).png',
        icons: 'Health',
        type: 'recipe',
        liked: true,
        nutrition: {
            Calories: 357,
            "Total Fat": 29,
            Protein: 4.8,
            Carbohydrate: 24,
            Cholesterol: 30
        }
    },
    {
        id: 'chicken-meatballs-with-cream-cheese',
        title: 'Chicken Meatballs with Cream Cheese',
        image: '/images/image 26 (8).png',
        icons: 'Meat',
        type: 'recipe',
        liked: false,
        nutrition: {
            Calories: 370,
            "Total Fat": 27,
            Protein: 21,
            Carbohydrate: 12,
            Cholesterol: 32
        }
    },
    {
        id: 'ads',
        type: 'ads',
        image: '/images/Ads.png',
    },
    {
        id: 'fruity-pancake-with-orange-blueberry',
        title: 'Fruity Pancake with Orange & Blueberry',
        image: '/images/image 26 (4).png',
        icons: 'Sweet',
        type: 'recipe',
        liked: true,
        nutrition: {
            Calories: 342,
            "Total Fat": 13,
            Protein: 9,
            Carbohydrate: 49,
            Cholesterol: 73
        }
    },
    {
        id: 'the-best-easy-one-pot-chicken-and-rice',
        title: 'The Best Easy One Pot Chicken and Rice',
        image: '/images/image 26 (5).png',
        icons: 'Snack',
        type: 'recipe',
        liked: false,
        nutrition: {
            Calories: 400,
            "Total Fat": 14,
            Protein: 48,
            Carbohydrate: 59,
            Cholesterol: 33
        }
    },
    {
        id: 'the-creamiest-creamy-chicken-and-bacon-pasta',
        title: 'The Creamiest Creamy Chicken and Bacon Pasta',
        image: '/images/image 26 (6).png',
        icons: 'Noodles',
        type: 'recipe',
        liked: false,
        nutrition: {
            Calories: 538,
            "Total Fat": 20,
            Protein: 27,
            Carbohydrate: 54,
            Cholesterol: 108
        }
    }
];