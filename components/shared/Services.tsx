import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
    return (
        <div id='service' className="bg-gray-900 py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-14">
                <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="p-4 md: py-24">
                            <h1 className='font-extrabold text-6xl text-white'>Build your story <span className='text-gray-400'>using Swift Docs</span></h1>
                            <p className='text-gray-100 mt-6 font-medium tracking-wide'>Write with a simplified interface where all essential features are provided for you.</p>
                            <div className='mt-6'>
                                <Link href='/documents'>
                                    <button className='bg-white mr-7 p-4 rounded'>Get Started  →</button>
                                </Link>

                                <Link href='/sign-up'>
                                    <button className='border border-gray-400 text-white p-4 rounded hover:bg-dark-100 hover:text-white transition-all duration-300'>Sign Up, It&apos;s free</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-span-12 hidden lg:block  lg:col-span-6">
                        <div className='p-4'>
                            <Image src="https://www.contractsent.com/wp-content/uploads/2023/08/importance-of-documenting-contract-changes.svg" width={500} height={500} alt="hr-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
