import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center px-4">

                <div className='flex justify-center mb-9'>
                    <Image
                        src={'/assets/icons/logo.svg'}
                        width={120}
                        height={32}
                        alt="Logo with name"
                    />
                </div>
                {/* Footer Text */}
                <div className="mt-4 text-center text-gray-400 text-sm">
                Copyright  &copy; {new Date().getFullYear()} LiveDocs. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
