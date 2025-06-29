'use client'
import { useForm } from "react-hook-form";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

export default function contactUs () {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm();

    const onSubmit = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        reset()
        alert('Thanks for your message!');
    }

    return (
        <div className="mt-20">
            <h2 className="font-semiBold text-[62px] text-center">Contact us</h2>
            <div className="flex mt-16 justify-between px-20 items-start">
                <Image src="/images/Group 13936.png" alt="chef" width={400} height={472} />
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-x-10">
                    <div>
                        <div>
                            <label className="text-gray-950/60 tracking-widest uppercase font-medium text-[12px]">Name</label>
                            <input className="block border-2 focus:outline-black mt-3 border-gray-950/5 rounded-2xl font-regular placeholder:font-regular text-sm placeholder:text-gray-950/60 px-5 py-4 w-[25rem]" type="text" placeholder="Enter your name..."
                                {...register('name', {
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message: 'name should contain only letter'
                                    },
                                })}
                            />
                        </div>
                        <div className="mt-5">
                            <label className="text-gray-950/60 tracking-widest uppercase font-medium text-[12px]">Subject</label>
                            <input className="block border-2 focus:outline-black mt-3 border-gray-950/5 rounded-2xl font-regular placeholder:font-regular text-sm placeholder:text-gray-950/60 px-5 py-4 w-[25rem]" type="text" placeholder="Enter subject..."
                                {...register('subject')}
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <label className="text-gray-950/60 tracking-widest uppercase font-medium text-[12px]">emAIL aDDRESS</label>
                            <input className="block border-2 focus:outline-black mt-3 border-gray-950/5 rounded-2xl font-regular placeholder:font-regular text-sm placeholder:text-gray-950/60 px-5 py-4 w-[25rem]" type="email" placeholder="Your email address..."
                                {...register('email', {
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'invalid email'
                                    }
                                })}
                            />
                        </div>
                        <div className="mt-5">
                            <label className="text-gray-950/60 tracking-widest uppercase font-medium text-[12px]">ENquiry type</label>
                            <div className="relative w-fit mt-3">
                                <select className="appearance-none focus:outline-black block border-2 border-gray-950/5 rounded-2xl font-regular placeholder:font-regular text-sm placeholder:text-gray-950/60 px-5 py-4 w-[25rem]"
                                    {...register('enquiryType')}
                                >
                                    <option value="advertising">Advertising</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="support">Technical Support</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Other</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-gray-700"> 
                                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 mt-5">
                        <label className="text-gray-950/60 tracking-widest uppercase font-medium text-[12px]">MEssages</label>
                        <textarea className="block focus:outline-black border-2 mt-3 border-gray-950/5 rounded-2xl placeholder:font-regular font-regular text-sm placeholder:text-gray-950/60 px-5 py-4 w-full h-[200px] resize-none" cols={60} rows={4} placeholder="Enter your messages..."
                            {...register('message')}
                        ></textarea>
                    </div>
                    <button className="text-left font-semiBold text-base bg-black text-white rounded-2xl px-[62px] py-5 mt-12 w-fit" type="submit" disabled={isSubmitting}>{isSubmitting ? 'sending...' : 'Submit'}</button>
                </form>
            </div>
        </div>
    )
}