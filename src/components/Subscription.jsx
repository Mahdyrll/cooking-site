"use client"

import Image from "next/image";
import { useState } from "react";

export default function Subscription () {
    const [inputValue, setInputValue] = useState('');

    const clearInput = () => {
        setInputValue('');
    };

    return (
        <div className="bg-[#E7F9FD] rounded-[60px] relative grid justify-items-center pt-16 pb-[70px] overflow-hidden w-[80rem] mr-auto ml-auto mt-40 mb-32">
            <div>
                <p className="font-semiBold text-[44px] text-center">Deliciousness to your inbox</p>
                <p className="font-regular text-base text-center text-gray-950/60 leading-7 mt-5">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className="rounded-3xl bg-white w-auto p-2.5 flex items-center mt-16 pl-8">
                <input className="font-medium text-sm placeholder:text-gray-950/40 focus:outline-0 w-[258px] mr-5" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Your email address..." />
                <button className="font-semiBold text-sm text-white bg-black rounded-2xl px-[46px] py-5 cursor-pointer" onClick={clearInput}>Subscribe</button>
            </div>
            <Image className="absolute right-[0%] bottom-0" src="/images/Photo-plate.png" alt="plate" width={250} height={355.62} />
            <Image className="absolute right-[18%] bottom-[16%]" src="/images/rucola-png.png" alt="rucola" width={110} height={90.96} />
            <Image className="absolute left-0 bottom-0" src="/images/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png" alt="salad" width={360} height={400.08} />
        </div>
    )
}