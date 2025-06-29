import Image from "next/image";
import Link from "next/link";

export default function Header () {
    return (
        <header>
            <div className="flex items-center justify-between py-11 px-[5rem] border-b-2 border-gray-950/10">
                <div>
                    <Image src="/images/Foodieland..png" alt="logo" width={100} height={200} />
                </div>
                <div>
                    <nav>
                        <ul className="flex items-center gap-x-[60px]">
                            <li><Link href="/" className="link-nav">Home</Link></li>
                            <li><Link href="/recipes" className="link-nav">Recipes</Link></li>
                            <li><Link href="/blog" className="link-nav">Blog</Link></li>
                            <li><Link href="/contact-us" className="link-nav">Contact</Link></li>
                            <li><Link href="/about" className="link-nav">About us</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center gap-x-10">
                    <Image src="/images/001-facebook.png" alt="facebook" width={10} height={10} />
                    <Image src="/images/003-twitter.png" alt="twitter" width={22} height={11} />
                    <Image src="/images/004-instagram1.png" alt="instagram" width={22} height={10} />
                </div>
            </div>
        </header>
    )
}