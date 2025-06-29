import Image from "next/image";

export default function TimerFoodIcon ({ food, color }) {
    return (
        <div className="flex gap-x-4">
            <div className="flex items-center rounded-[30px] py-2 px-[14px] gap-x-2.5" style={{ backgroundColor: color }}>
                <Image src="/images/Timer.png" alt="timer" width={24} height={100} />
                <p className="text-sm font-regular text-gray-950/70">30 Minutes</p>
            </div>
            <div className="flex items-center rounded-[30px] py-2 px-[14px] gap-x-2.5" style={{ backgroundColor: color }}>
                <Image src="/images/ForkKnife.png" alt="food" width={24} height={100} />
                <p className="text-sm font-regular text-gray-950/70">{food}</p>
            </div>
        </div>
    )
}