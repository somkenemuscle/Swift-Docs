import { CheckIcon } from '@heroicons/react/20/solid'; // Ensure you have this icon or replace with your own
import Link from 'next/link';
import SlideIn from './SlideIn'


const includedFeatures = [
  "Easy to use with a user-friendly interface",
  "Seamless authentication with Google or email",
  "Create and delete documents effortlessly",
  "Collaborative editing in real-time"
];

export default function PricingFeatures() {
  return (
    <SlideIn direction='bottom'>
      <div id='pricing' className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple And Easy To Use</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our intuitive interface ensures that you can start creating and editing documents right away. With a user-friendly design, you'll be up and running in no time, making document management simpler than ever.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">All Features Completely Free</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Enjoy all our features at no cost. Our goal is to provide you with a comprehensive document editing experience without any fees or hidden charges.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">No payments, no fees</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">Free</span>
                  </p>
                  <Link
                    href="/documents"
                    className="mt-10 block w-full rounded-md bg-dark-100 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-dark-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Enjoy creating documents without any cost
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideIn>
  )
}
