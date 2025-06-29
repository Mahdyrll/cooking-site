import TimerFoodIcon from '@/components/TimerFoodIcon';
import Image from 'next/image';
import Profile from '@/components/Profile';

export default function FirstSection () {
    return (
        <div className='flex items-center justify-between mt-11'>
            <div className='bg-[#E7FAFE] w-[40px] h-[600px] rounded-br-3xl rounded-tr-3xl'></div>
            <div className='flex'>
                <div className='bg-[#E7FAFE] pt-0 pb-[30px] rounded-l-[52px] pl-[50px] pr-[35px]'>
                    <div className='w-fit rounded-4xl pb-2 pt-3 px-5 flex items-center gap-x-2.5 bg-white mt-12 shadow-[10px_20px_40px_0px_#2940461A]'>
                        <span className='text-xl'>📜</span>
                        <p className='font-semiBold text-sm align-baseline'>Hot Recipes</p>
                    </div>
                    <div className='mt-9'>
                        <h2 className='font-semiBold text-[61px] leading-[75px] w-[520px]'>Spicy delicious chicken wings</h2>
                        <p className='font-light leading-7 text-base text-gray-950/60 w-[520px] mt-5'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    </div>
                    <div className='mt-8'>
                        <TimerFoodIcon
                         food="Chicken"
                         color="#0000000d"
                        />
                    </div>
                    <div className='flex mt-[100px] justify-between pr-5 items-center'>
                        <Profile />
                        <div className='flex bg-black items-center rounded-2xl gap-x-4 px-[37px] py-5'>
                            <button className='text-white font-semiBold text-sm'>View Recipes</button>
                            <Image src="/images/Vector (2).png" alt='view' width={20} height={24} />
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image className='absolute top-[7%] left-[-7%]' src="/images/Badge.png" alt='badge' width={150} height={150} />
                    <Image src="/images/Mask Group.png" alt='chicken' width={660} height={640} />
                </div>
            </div>
            <div className='bg-[#E7FAFE] w-[40px] h-[600px] rounded-bl-3xl rounded-tl-3xl'></div>
        </div>
    )
}