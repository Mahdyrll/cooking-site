import slugify from "slugify";

export type Blogs = {
    title: string;
    image: string;
    profile: string;
    author: string;
}

export const blogs: Blogs[] = [
    {
        title: 'Crochet Projects for Noodle Lovers',
        image: '/images/image 26 (16).png',
        profile: '/images/Ellipse 2 (1).png',
        author: 'Wade Warren'
    },
    {
        title: '10 Vegetarian Recipes To Eat This Month',
        image: '/images/image 26 (23).png',
        profile: '/images/Ellipse 2 (2).png',
        author: 'Robert Fox'
    },
    {
        title: 'Full Guide to Becoming a Professional Chef',
        image: '/images/image 26 (19).png',
        profile: '/images/Ellipse 2 (7).png',
        author: 'Dianne Russell'
    },
    {
        title: 'Simple & Delicious Vegetarian Lasagna',
        image: '/images/image 26 (20).png',
        profile: '/images/Ellipse 2 (4).png',
        author: 'Leslie Alexander'
    },
    {
        title: 'Plantain and Pinto Stew with Aji Verde',
        image: '/images/image 26 (21).png',
        profile: '/images/Ellipse 2 (5).png',
        author: 'Courtney Henry'
    },
    {
        title: 'We’re Hiring a Communications Assistant!',
        image: '/images/image 26 (22).png',
        profile: '/images/Ellipse 2 (6).png',
        author: 'Albert Flores'
    },
];

const posts = blogs.map(post => ({
    ...post,
    id: slugify(post.title, {lower: true})
}));

export default posts;