"use client"

import { useState } from "react"
import Image from "next/image";

export default function Ingredients () {
    const ingredientSection = [
        {
            title: 'For main dish',
            text: 'Lorem ipsum dolor sit amet',
            count: 5
        },
        {
            title: 'For the sauce',
            text: 'Lorem ipsum dolor sit amet',
            count: 3
        }
    ]

    const [checkedState, setCheckedState] = useState(ingredientSection.map((section, sectionIndex) => {
        const sectionStates = Array(section.count).fill(false)
        if (sectionIndex === 0) {
            sectionStates[0] = true;
        }
        return sectionStates;
    })
    );

    const handleCheckboxChange = (sectionIndex, itemIndex) => {
        const newState = [...checkedState]
        newState[sectionIndex][itemIndex] = !newState[sectionIndex][itemIndex];
        setCheckedState(newState)
    }

    return (
        <div>
            <p className="font-semiBold text-4xl">Ingredients</p>
            <div>
                {ingredientSection.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                        <h3 className="font-semiBold text-2xl mt-12">{section.title}</h3>
                        <ul className="gap-y-5 grid mt-7">
                            {Array.from({ length: section.count }).map((_,itemIndex) => (
                                <li className=" w-auto flex items-center border-solid border-b-2 border-gray-950/5 pb-7 mt-2" key={itemIndex}>
                                    <label className={`w-auto font-regular text-[18px] cursor-pointer ${checkedState[sectionIndex][itemIndex] ? 'line-through text-gray-950/30' : ''} flex items-center gap-x-5`}>
                                        <input className="sr-only peer" type="checkbox" 
                                            checked={checkedState[sectionIndex][itemIndex]}
                                            onChange={() => handleCheckboxChange(sectionIndex, itemIndex)}
                                        />
                                        <div className={`rounded-full flex items-center justify-center border-2 w-6 h-6 border-[#DBE2E5] ${checkedState[sectionIndex][itemIndex] ? 'bg-black border-black ' : ''} `}>
                                            <Image className={`${checkedState[sectionIndex][itemIndex] ? 'block': 'hidden'}`} src="/images/Vector 11.png" alt="check-mark" width={10} height={6} />
                                        </div>
                                        <span>Lorem ipsum dolor sit amet</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div>
                
            </div>
        </div>
    )
}