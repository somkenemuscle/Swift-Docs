import { features } from '@/constants/features'
import SlideIn from './SlideIn'
import Image from 'next/image'

export default function Example() {
    return (
        <SlideIn direction='bottom'>
            <div id='service' className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Focus on what matters - your words !
                        </p>
                        <p className="mt-6  leading-8 text-gray-600">
                            Simplify your writing experience with essential features <br /> and write with ease.
                        </p>
                    </div>
                    <div className='hidden md:flex justify-center mt-16'>
                        <img src="/assets/images/ffh.jpg" className='pt-3 h-fit object-cover rounded-t-3xl w-[90%] border-t-[1px] border-x-[1px] shadow-[0px_4px_20px_rgba(170,17,132,0.1)]' />
                    </div>

                </div>
            </div>
        </SlideIn >
    )
}
