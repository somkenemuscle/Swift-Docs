/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'img.clerk.com'
        },
        {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.co'
        }
        ]
    }
};

export default nextConfig;
