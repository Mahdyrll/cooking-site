import Image from 'next/image';
import Link from 'next/link';

export default function Footer () {
    return (
        <footer>
            <div className='px-[5.5rem]'>
                <div className='flex items-center justify-between pt-10 pb-12 border-b-2 border-gray-950/10'>
                    <div className=''>
                        <Image src="/images/Foodieland..png" alt="logo" width={100} height={200} />
                        <p className='font-regular text-base text-gray-950/60 mt-5'>Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>
                    </div>
                    <div>
                        <nav>
                            <ul className="flex items-center gap-x-[60px]">
                                <li><Link href="/recipes" className="link-nav">Recipes</Link></li>
                                <li><Link href="/blog" className="link-nav">Blog</Link></li>
                                <li><Link href="/contact-us" className="link-nav">Contact</Link></li>
                                <li><Link href="/about" className="link-nav">About us</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='flex items-center justify-end py-12'>
                    <div className='flex items-center relative right-[26%]'>
                        <p className='text-lg font-regular text-gray-950/60'>© 2020 Flowbase. Powered by</p>
                        <span className='text-lg font-regular text-[#FF7967] ml-1'>Webflow</span>
                    </div>
                    <div className='flex items-center gap-x-10'>
                        <Image src="/images/001-facebook.png" alt="facebook" width={10} height={10} />
                        <Image src="/images/003-twitter.png" alt="twitter" width={22} height={11} />
                        <Image src="/images/004-instagram1.png" alt="instagram" width={22} height={10} />
                    </div>
                </div>
            </div>
        </footer>
    )
}