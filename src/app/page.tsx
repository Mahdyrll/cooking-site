import CategoryCard from '@/components/CategoryCard';
import FirstSection from '@/components/FirstSection';
import Recipes from '@/components/Recipes';
import Image from 'next/image';
import Instagram from '@/components/Instagram';
import FeaturedRecipe from '@/components/FeaturedRecipe';
import { featuredRecipe } from '@/data/featuredRecipe';
import Subscription from '@/components/Subscription';

export default function Home() {
  return (
    <div>
      <FirstSection />
      <CategoryCard />
      <Recipes />
      <div className='flex justify-between px-20 items-center mt-56'>
        <div>
          <p className='font-semiBold text-[45px] leading-14'>Everyone can be a <br />chef in their own kitchen</p>
          <p className='font-regular text-base text-gray-950/60 leading-7 mt-6'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br />eiusmod tempor incididunt ut labore et dolore magna aliqut enim <br />ad minim</p>
          <button className='font-semiBold text-sm text-white rounded-2xl bg-black cursor-pointer px-[54px] py-5 mt-20'>Learn More</button>
        </div>
        <div className='w-[651px] h-[500px] relative bg-[linear-gradient(to_bottom,_rgba(231,249,253,0)_0%,_rgba(231,249,253,1)_100%)] rounded-[30px]'>
          <Image className='absolute bottom-[25%] left-[-3.5%]' src="/images/image 27.png" alt='tomato' width={50} height={50} />
          <Image className='absolute top-[1%] right-[29%]' src="/images/image 28.png" alt='onion' width={60} height={50} />
          <Image className='absolute top-[0%] left-[10%]' src="/images/image 21.png" alt='meat' width={80} height={80} />
          <Image className='absolute top-[15%] right-[6%]' src="/images/image 20.png" alt='lettuce' width={80} height={80} />
          <Image className='absolute bottom-0 left-[-9%]' src="/images/portrait-happy-male-chef-dressed-uniform 1.png" alt='chef' width={660} height={597} />
        </div>
      </div>
      <Instagram />
      <FeaturedRecipe feature={featuredRecipe} />
      <Subscription />
    </div>
  );
}
