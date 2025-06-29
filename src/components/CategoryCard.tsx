import Image from "next/image"

const categories = [
    {
        id: 1,
        name: 'Breakfast',
        image: '/images/image 25.png',
        bgColor: 'linear-gradient(to bottom, rgba(112,130,70,0) 0%, rgba(112,130,70,0.1) 100%)'
    },
    {
        id: 2,
        name: 'Vegan',
        image: '/images/image 20.png',
        bgColor: 'linear-gradient(to bottom, rgba(108,198,63,0) 0%, rgba(108,198,63,0.1) 100%)'
    },
    {
        id: 3,
        name: 'Meat',
        image: '/images/image 21.png',
        bgColor: 'linear-gradient(to bottom, rgba(204,38,27,0) 0%, rgba(204,38,27,0.1) 100%)'
    },
    {
        id: 4,
        name: 'Dessert',
        image: '/images/image 22.png',
        bgColor: 'linear-gradient(to bottom, rgba(240,158,0,0) 0%, rgba(240,158,0,0.1) 100%)'
    },
    {
        id: 5,
        name: 'Lunch',
        image: '/images/image 23.png',
        bgColor: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)'
    },
    {
        id: 6,
        name: 'Chocolate',
        image: '/images/image 24.png',
        bgColor: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)'
    }
]

export default function CategoryCard () {
    return (
        <div className="px-[5rem] mt-40">
            <div className="flex justify-between">
                <div>
                    <p className="font-semiBold text-5xl">Categories</p>
                </div>
                <button className="font-semiBold text-[15.5px] rounded-2xl bg-[#E7FAFE] py-[18px] px-7">View All Categories</button>
            </div>
            <div className="flex items-center justify-between mt-[126px]">
                {categories.map((cat) => (
                    <div key={cat.id} style={{ background: cat.bgColor }} className="w-auto rounded-[30px] px-10 pb-6 relative">
                        <Image className="mt-[-49px]" src={cat.image} alt="category" width={100} height={100} />
                        <p className="font-semiBold text-lg text-center mt-[49px]">{cat.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
