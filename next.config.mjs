/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'tm-integration-aws.s3.ap-south-1.amazonaws.com',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        optimizePackageImports: ['lucide-react', '@headlessui/react', '@heroicons/react'],
    },
    async rewrites() {
        return [
            {
                source: '/onximage/:path*',
                destination: 'https://tm-integration-aws.s3.ap-south-1.amazonaws.com/:path*',
            },
        ];
    },
};

export default nextConfig;
