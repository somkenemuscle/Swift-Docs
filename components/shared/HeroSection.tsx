import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 bg-gray-900">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3  text-sm leading-6 text-gray-300 ring-1 ring-gray-700 hover:ring-gray-600">
                        Have an idea ? Use SwiftDocs today {' '}
                        <span className="font-semibold text-gray-600">
                            <span aria-hidden="true" className="absolute inset-0" />
                            <span aria-hidden="true">&rarr;</span>
                        </span>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            <span className="text-gray-600"> Build </span> your best ideas together, in Swift Docs
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Create and collaborate on online documents in real-time from any device, anywhere, anytime and you can do all these with no cost

                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/documents"
                            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-dark-100 shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </Link>
                        <Link href="/sign-in" className="text-sm font-semibold leading-6 text-white">
                            Sign up for free  <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
