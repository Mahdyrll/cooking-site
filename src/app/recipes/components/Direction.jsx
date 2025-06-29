"use client"

import Image from "next/image";
import { useState } from "react";

export default function Direction () {
    const [checkedItems, setCheckedItems] = useState([false, false]);

    const toggleCheckbox = (index) => {
        const newState = [...checkedItems]
        newState[index] = !newState[index]
        setCheckedItems(newState)
    };

    const [checkedItem, setCheckedItem] = useState(false);

    const handleCheckbox = () => {
        setCheckedItem(!checkedItem);
    }

    return (
        <div className="mt-24">
            <div>
                <h3 className="font-semiBold text-4xl">Directions</h3>
            </div>
            <div className="mt-9">
                <ol className="list-decimal">
                    <div className="flex items-start gap-x-14 border-b-2 border-gray-950/5 pb-12">
                        <div>
                            <label className="cursor-pointer">
                                <input className="sr-only peer" type="checkbox" 
                                    onChange={handleCheckbox}
                                    checked={checkedItem}
                                    id="custom-checkbox"
                                />
                                <div className={`rounded-full flex items-center justify-center border-2 w-6 h-6 border-[#DBE2E5] ${checkedItem ? 'bg-black border-black ' : ''}`}>
                                    <Image className={`text-white ${checkedItem ? 'block': 'hidden'}`} src="/images/Vector 11.png" alt="check-mark" width={10} height={6} />
                                </div>
                            </label>
                        </div>
                        <div>
                            <li className="font-semiBold text-2xl">
                                <label className={checkedItem ? 'line-through text-gray-400' : ''}>Lorem ipsum dolor sit amet</label>
                            </li>
                            <p className={`font-regular text-base mt-5 ${checkedItem ? 'line-through text-gray-400' : 'text-gray-950/60'}`}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            <Image className="mt-12" src="/images/Rectangle 23.png" alt="cook" width={792} height={400} />
                            <p className={`font-regular mt-12 text-base ${checkedItem ? 'line-through text-gray-400' : 'text-gray-950/60'}`}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        </div>
                    </div>
                    {[0, 1].map((_, index) => (
                        <div key={index} className="flex items-start gap-x-14 mt-12 border-b-2 border-gray-950/5 pb-12">
                            <label className="cursor-pointer">
                                <input className="sr-only peer" type="checkbox" 
                                    checked={checkedItems[index]}
                                    onChange={() => toggleCheckbox(index)}
                                />
                                <div className={`rounded-full flex items-center justify-center border-2 w-6 h-6 border-[#DBE2E5] ${checkedItems[index] ? 'bg-black border-black ' : ''}`}>
                                    <Image className={`text-white ${checkedItems[index] ? 'block': 'hidden'}`} src="/images/Vector 11.png" alt="check-mark" width={10} height={6} />
                                </div>
                            </label>
                            <div>
                                <li className="font-semiBold text-2xl">
                                    <label className={checkedItems[index] ? 'line-through text-gray-400' : ''}>Lorem ipsum dolor sit amet </label>
                                </li>
                                <p className={`font-regular text-base mt-5 ${checkedItems[index] ? 'line-through text-gray-400' : 'text-gray-950/60'}`}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            </div>
                        </div>
                    ))}
                </ol>
            </div>
        </div>
    )
}