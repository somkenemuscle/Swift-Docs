import { features } from '@/constants/features'
import SlideIn from './SlideIn'

export default function Example() {
    return (
        <SlideIn direction='bottom'>
        <div id='features' className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">Discover Our Key Features</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Document management</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                            Our platform offers a range of powerful features designed to enhance your productivity.Some of our key features include:
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        alt="Product screenshot"
                        src="https://lh3.googleusercontent.com/4f3H_lxFHLFe0VlteoDi_6LbZhFgQaPp0ilivjwFd0IWg4lAAh1imwbw7QG60BqDJI8Xvo0vNjAumbMPmd_5f2jrTZ3_Gee0ZliDUymrOa7MEwjsOoI=w0-l80-sg-rj-c0xffffff"
                        width={2432}
                        height={1442}
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        
                    />
                </div>
            </div>
        </div>
        </SlideIn>
    )
}
