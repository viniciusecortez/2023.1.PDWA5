const nextConfig = {
    pageExtensions: ['page.jsx', 'page.js'],
    async redirects() {
        return [{
            source: '/',
            destination: '/tasks',
            permanent: false,
        }];
    }
}


module.exports = nextConfig;