import Image from 'next/image'

export default function () {
    return (
        <div className='flex gap-x-4 items-center'>
            <div>
                <Image src="/images/Ellipse 2.png" alt='profile' width={50} height={50} />
            </div>
            <div className=''>
                <p className='font-Bold text-base'>John Smith</p>
                <p className='font-medium text-sm text-gray-950/60 mt-1.5'>15 March 2022</p>
            </div>
        </div>
    )
}