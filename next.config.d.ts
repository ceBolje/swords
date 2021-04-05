const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        dest: '/',
        disable: process.env.NODE_ENV === 'development',
        register: true,
        scope: '/app',
        sw: 'sw.js',
    },
});
