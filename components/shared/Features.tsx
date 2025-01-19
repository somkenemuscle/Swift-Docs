import SlideIn from './SlideIn'
import Image from 'next/image'

export default function Example() {
    return (
        <SlideIn direction='bottom'>
            <div id='service' className="py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Focus on what matters - <span className='text-gray-400'>your words !</span>
                        </p>
                        <p className="mt-6 leading-8 text-gray-600">
                            Simplify your writing experience with essential features and write with ease.
                        </p>
                    </div>
                    <div className='hidden md:flex justify-center mt-16'>
                        <Image src="/assets/images/ffh.jpg" alt='sd_img' width={700} height={600} layout='responsive' className='pt-3 h-fit object-cover rounded-t-3xl w-[90%] border-t-[1px] border-x-[1px] shadow-[0px_4px_20px_rgba(44,75,168,0.3)]' />
                    </div>

                </div>
            </div>
        </SlideIn >
    )
}
