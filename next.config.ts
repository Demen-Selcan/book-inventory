export default {
    experimental: {
        ppr: true,
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.com',
                port: '',
            },
        ],
    },
};
