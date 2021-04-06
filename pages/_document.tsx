import React from 'react';
import Document, { Html, Main, NextScript, DocumentContext, Head } from 'next/document';

class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>sWords - learn common czech words</title>
                    <meta name="application-name" content="sWords" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content="sWords" />
                    <meta name="description" content="Learn coomom czech words" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="theme-color" content="#0d47a1" />

                    <link rel="apple-touch-icon" sizes="180x180" href="/icons/cz-192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/icons/cz-32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/icons/cz-16.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="mask-icon" href="/icons/cz-32.png" color="#5bbad5" />
                    <link rel="shortcut icon" href="/icons/favicon.ico" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
