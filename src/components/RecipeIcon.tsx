import Image from "next/image";

export default function RecipeIcon ({ food }: {food?: string}) {
    return (
        <div className="flex gap-x-5">
            <div className="flex items-center rounded-[30px] gap-x-2.5">
                <Image src="/images/Timer.png" alt="timer" width={24} height={100} />
                <p className="text-sm font-regular text-gray-950/70">30 Minutes</p>
            </div>
            <div className="flex items-center rounded-[30px] gap-x-2.5">
                <Image src="/images/ForkKnife.png" alt="food" width={24} height={100} />
                <p className="text-sm font-regular text-gray-950/70">{food}</p>
            </div>
        </div>
    )
}