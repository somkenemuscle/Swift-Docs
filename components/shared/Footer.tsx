import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center px-4">

                <div className='flex justify-center mb-9'>
                    <h1 className='font-extrabold text-gray-200'>📑 Swift <span className='font-extrabold text-slate-400'>Docs</span></h1>
                </div>
                {/* Footer Text */}
                <div className="mt-4 text-center text-gray-400 text-sm">
                    Copyright  &copy; {new Date().getFullYear()} Swift Docs. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
