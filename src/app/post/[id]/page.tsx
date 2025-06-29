import posts from "@/data/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function BlogSinglePost ({ params }: { params: { id: string } }) {
    const { id } = await params;
    const post = posts.find(post => post.id === id);

    if(!post) {
        notFound();
    }

    return (
        <div className="flex flex-col items-center mt-16">
            <h2 className="font-semiBold text-[62px]">Full Guide to Becoming a Professional Chef</h2>
            <div className="flex items-center mt-8 justify-center w-[97%]">
                <div className="items-center flex gap-x-4 border-r-2 border-gray-950/10 pr-6">
                    <Image src={post.profile} alt="author" width={40} height={40} />
                    <p className="font-Bold text-base">{post.author}</p>
                </div>
                <p className="font-medium text-sm pl-6 text-gray-950/60">15 March 2022</p>
            </div>
            <p className="text-base font-regular text-gray-950/60 text-center mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed <br />velit a faucibus. In feugiat vestibulum velit vel pulvinar.</p>
            <Image className="rounded-[30px] mt-16" src='/images/image 29.png' alt="post" height={800} width={1280} />
            <div className="flex px-48 mt-20 gap-x-20">
                <div>
                    <div>
                        <p className="font-semiBold text-2xl">How did you start out in the food industry?</p>
                        <p className="font-regular text-gray-950/60 text-base w-auto mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                    </div>
                    <div className="mt-[7rem]">
                        <p className="font-semiBold text-2xl">What do you like most about your job?</p>
                        <p className="font-regular text-gray-950/60 text-base w-auto mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                    </div>
                    <div className="mt-20">
                        <p className="font-semiBold text-2xl">Do you cook at home on your days off?</p>
                        <Image className="mt-7" src="/images/Rectangle 23.png" alt="cook" width={840} height={400} />
                        <p className="font-regular text-gray-950/60 text-base w-auto mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                        <p className="font-semiBold text-2xl mt-16">What would your advice be to young people looking to get their foot in the door?</p>
                        <p className="font-regular text-gray-950/60 text-base w-auto mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                    </div>
                    <div className="mt-16 bg-gradient-to-r from-black/5 to-black/0 border-y-2 px-10 py-13 -ml-12 border-black/5">
                        <p className="font-medium text-4xl leading-16">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”</p>
                    </div>
                    <div className="mt-16">
                        <p className="font-semiBold text-2xl">What is the biggest misconception that people have about being a professional chef?</p>
                        <p className="font-regular text-gray-950/60 text-base w-auto mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-7 items-center sticky top-4 self-start">
                    <p className="font-semiBold text-sm tracking-widest w-max">SHARE THIS ON:</p>
                    <div className="flex flex-col items-center gap-y-10">
                        <Image src="/images/001-facebook.png" alt="facebook" width={9.92} height={19} />
                        <Image src="/images/003-twitter.png" alt="twitter" width={22} height={17.88} />
                        <Image src="/images/004-instagram1.png" alt="instagram" width={22} height={22} />
                    </div>
                </div>
            </div>
        </div>
    )
}