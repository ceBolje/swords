if (!self.define) {
    const e = (e) => {
            'require' !== e && (e += '.js');
            let r = Promise.resolve();
            return (
                s[e] ||
                    (r = new Promise(async (r) => {
                        if ('document' in self) {
                            const s = document.createElement('script');
                            (s.src = e), document.head.appendChild(s), (s.onload = r);
                        } else importScripts(e), r();
                    })),
                r.then(() => {
                    if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
                    return s[e];
                })
            );
        },
        r = (r, s) => {
            Promise.all(r.map(e)).then((e) => s(1 === e.length ? e[0] : e));
        },
        s = { require: Promise.resolve(r) };
    self.define = (r, n, t) => {
        s[r] ||
            (s[r] = Promise.resolve().then(() => {
                let s = {};
                const a = { uri: location.origin + r.slice(1) };
                return Promise.all(
                    n.map((r) => {
                        switch (r) {
                            case 'exports':
                                return s;
                            case 'module':
                                return a;
                            default:
                                return e(r);
                        }
                    }),
                ).then((e) => {
                    const r = t(...e);
                    return s.default || (s.default = r), s;
                });
            }));
    };
}
define('./sw.js', ['./workbox-030153e1'], function(e) {
    'use strict';
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: '/_error', revision: 'rldeI0ryAaTHgzEPtj1QY' },
                {
                    url: '/_next/static/chunks/29107295.7263a44925d3b3c285e2.js',
                    revision: 'rldeI0ryAaTHgzEPtj1QY',
                },
                {
                    url:
                        '/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.ccc69ddc55922bc5b6b1.js',
                    revision: 'rldeI0ryAaTHgzEPtj1QY',
                },
                {
                    url:
                        '/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.19163d32b43cc67e378f.js',
                    revision: 'rldeI0ryAaTHgzEPtj1QY',
                },
                {
                    url: '/_next/static/chunks/framework.39d3582604ab0e2ec479.js',
                    revision: 'rldeI0ryAaTHgzEPtj1QY',
                },
                {
                    url: '/_next/static/chunks/main-c32cb6ece0d7e33edc2d.js',
                    revision: 'rldeI0ryAaTHgzEPtj1QY',
                },
                {
                    url: '/_next/static/chunks/pages/_app-2b83745f2deaf327570e.js',
                    revision: 'rldeI0ryAaTHgzEPtj1QY',
                },
                {
                    url: '/_next/static/chunks/pages/_error-5bdfe767480352e01bfa.js',
                    revision: 'rldeI0ryAaTHgzEPtj1QY',
                },
                {
                    url: '/_next/static/chunks/pages/index-25fc97266b743a49f47e.js',
                    revision: 'rldeI0ryAaTHgzEPtj1QY',
                },
                {
                    url: '/_next/static/chunks/polyfills-86038f8325ecf14c2308.js',
                    revision: 'rldeI0ryAaTHgzEPtj1QY',
                },
                {
                    url: '/_next/static/chunks/webpack-95c2b224bccf352ee870.js',
                    revision: 'rldeI0ryAaTHgzEPtj1QY',
                },
                {
                    url: '/_next/static/css/5f01da0ccdb2218f520b.css',
                    revision: 'rldeI0ryAaTHgzEPtj1QY',
                },
                {
                    url: '/_next/static/rldeI0ryAaTHgzEPtj1QY/_buildManifest.js',
                    revision: 'rldeI0ryAaTHgzEPtj1QY',
                },
                {
                    url: '/_next/static/rldeI0ryAaTHgzEPtj1QY/_ssgManifest.js',
                    revision: 'rldeI0ryAaTHgzEPtj1QY',
                },
                { url: '/icons/cz-16.png', revision: 'c2ad681642751b0261d7e49bf28b4d3b' },
                { url: '/icons/cz-192.png', revision: '51268d1527da9f6d37240d48c5a252ce' },
                { url: '/icons/cz-256.png', revision: 'c3f2aa1f19a33ade990582995fff1c99' },
                { url: '/icons/cz-32.png', revision: '22d524294b8eaf32afc24be600aed5bf' },
                { url: '/icons/cz-384.png', revision: 'c8be62be51778cdc65aa0570cda5d2ea' },
                { url: '/icons/cz-512.png', revision: 'e84bb62da713d6471ded1695883f7a76' },
                { url: '/icons/favicon.ico', revision: 'd8b2f22583b9396512e00c64a5302e02' },
                { url: '/manifest.json', revision: 'eb638b3815c859d840504394b4a119e1' },
            ],
            { ignoreURLParametersMatching: [] },
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            '/',
            new e.NetworkFirst({
                cacheName: 'start-url',
                networkTimeoutSeconds: 10,
                plugins: [
                    { requestWillFetch: async ({ request: e }) => (Request(), e) },
                    new e.ExpirationPlugin({
                        maxEntries: 1,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
            new e.CacheFirst({
                cacheName: 'google-fonts',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 31536e3,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-font-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 604800,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-image-assets',
                plugins: [
                    {
                        handlerDidError: async ({ request: e, event: r, error: s, state: n }) =>
                            caches.match('/offline.jpg', { ignoreSearch: !0 }),
                    },
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:mp3|mp4)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-media-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:js)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-js-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:css|less)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-style-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:json|xml|csv)$/i,
            new e.NetworkFirst({
                cacheName: 'static-data-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\/api\/.*$/i,
            new e.NetworkFirst({
                cacheName: 'apis',
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 16,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /.*/i,
            new e.NetworkFirst({
                cacheName: 'others',
                networkTimeoutSeconds: 10,
                plugins: [
                    {
                        handlerDidError: async ({ request: e, event: r, error: s, state: n }) =>
                            caches.match('/_error', { ignoreSearch: !0 }),
                    },
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            'GET',
        );
});
