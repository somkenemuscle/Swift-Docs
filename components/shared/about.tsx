import Image from "next/image"
import Link from "next/link"


function About() {
    return (
        <div className='max-w-6xl mx-auto px-6 lg:px-8 my-32'>
            <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-12 lg:col-span-6">
                    <div className="p-4 md: py-24">
                        <h1 className='font-extrabold text-6xl'>Better writing <span className='text-gray-400'>better results</span></h1>
                        <p className=' mt-6 font-medium tracking-wide'>Write with a simplified interface where all essential features are provided for you.</p>
                        <div className='mt-6'>
                            <Link href='/documents'>
                                <button className='bg-gray-900 text-white mr-7 p-4 rounded'>Open a document →</button>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className="col-span-12 hidden lg:block  lg:col-span-6">
                    <div>
                        <Image src="https://www.shutterstock.com/image-vector/online-business-communication-edocument-signing-600nw-2272072791.jpg" width={500} height={500} className="w-[100%]" alt="hr-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About