import Image from "next/image";

export default function Instagram () {
    return (
        <div className="bg-[linear-gradient(to_bottom,_rgba(231,249,253,0)_0%,_rgba(231,249,253,1)_100%)] mt-40 pt-[72px] pb-20">
            <div className="text-center">
                <p className="font-semiBold text-[44px]">Check out @foodieland on Instagram</p>
                <p className="font-regular text-base text-gray-950/60 leading-7 mt-5">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore <br />magna aliqut enim ad minim</p>
            </div>
            <div className="flex items-center justify-between px-20 mt-[85px]">
                <Image src="/images/Post (3).png" alt="post3" width={290} height={445} />
                <Image src="/images/Post (2).png" alt="post2" width={290} height={445} />
                <Image src="/images/Post (4).png" alt="post1" width={290} height={445} />
                <Image src="/images/Post.png" alt="post" width={290} height={445} />
            </div>
            <div className="w-fit ml-auto mr-auto mt-[67px]">
                <button className="text-white bg-black flex items-center font-medium text-sm px-8 py-[19.4px] gap-x-4 rounded-2xl cursor-pointer">Visit Our Instagram <span><Image src="/images/005-instagram.png" alt="instagram" width={22} height={22} /></span></button>
            </div>
        </div>
    )
}