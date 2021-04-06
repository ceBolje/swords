if (!self.define) {
    const e = (e) => {
            'require' !== e && (e += '.js');
            let s = Promise.resolve();
            return (
                r[e] ||
                    (s = new Promise(async (s) => {
                        if ('document' in self) {
                            const r = document.createElement('script');
                            (r.src = e), document.head.appendChild(r), (r.onload = s);
                        } else importScripts(e), s();
                    })),
                s.then(() => {
                    if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
                    return r[e];
                })
            );
        },
        s = (s, r) => {
            Promise.all(s.map(e)).then((e) => r(1 === e.length ? e[0] : e));
        },
        r = { require: Promise.resolve(s) };
    self.define = (s, n, i) => {
        r[s] ||
            (r[s] = Promise.resolve().then(() => {
                let r = {};
                const c = { uri: location.origin + s.slice(1) };
                return Promise.all(
                    n.map((s) => {
                        switch (s) {
                            case 'exports':
                                return r;
                            case 'module':
                                return c;
                            default:
                                return e(s);
                        }
                    }),
                ).then((e) => {
                    const s = i(...e);
                    return r.default || (r.default = s), r;
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
                { url: '/_error', revision: 'sAFDFeidNl21slkb01XYv' },
                {
                    url: '/_next/static/chunks/29107295.7263a44925d3b3c285e2.js',
                    revision: 'sAFDFeidNl21slkb01XYv',
                },
                {
                    url:
                        '/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.b2467209c2fbacdc1c0e.js',
                    revision: 'sAFDFeidNl21slkb01XYv',
                },
                {
                    url:
                        '/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.19163d32b43cc67e378f.js',
                    revision: 'sAFDFeidNl21slkb01XYv',
                },
                {
                    url: '/_next/static/chunks/framework.39d3582604ab0e2ec479.js',
                    revision: 'sAFDFeidNl21slkb01XYv',
                },
                {
                    url: '/_next/static/chunks/main-c32cb6ece0d7e33edc2d.js',
                    revision: 'sAFDFeidNl21slkb01XYv',
                },
                {
                    url: '/_next/static/chunks/pages/_app-2b83745f2deaf327570e.js',
                    revision: 'sAFDFeidNl21slkb01XYv',
                },
                {
                    url: '/_next/static/chunks/pages/_error-5bdfe767480352e01bfa.js',
                    revision: 'sAFDFeidNl21slkb01XYv',
                },
                {
                    url: '/_next/static/chunks/pages/index-4261ba6b434ea4cf8ac2.js',
                    revision: 'sAFDFeidNl21slkb01XYv',
                },
                {
                    url: '/_next/static/chunks/polyfills-86038f8325ecf14c2308.js',
                    revision: 'sAFDFeidNl21slkb01XYv',
                },
                {
                    url: '/_next/static/chunks/webpack-95c2b224bccf352ee870.js',
                    revision: 'sAFDFeidNl21slkb01XYv',
                },
                {
                    url: '/_next/static/css/5f01da0ccdb2218f520b.css',
                    revision: 'sAFDFeidNl21slkb01XYv',
                },
                {
                    url: '/_next/static/sAFDFeidNl21slkb01XYv/_buildManifest.js',
                    revision: 'sAFDFeidNl21slkb01XYv',
                },
                {
                    url: '/_next/static/sAFDFeidNl21slkb01XYv/_ssgManifest.js',
                    revision: 'sAFDFeidNl21slkb01XYv',
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
                        handlerDidError: async ({ request: e, event: s, error: r, state: n }) =>
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
                        handlerDidError: async ({ request: e, event: s, error: r, state: n }) =>
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
