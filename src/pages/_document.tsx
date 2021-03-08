import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="image/png" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />

                    <meta property="og:image" content="./christian-dueck-profile.jpg" />
                    <meta property="og:image:type" content="image/jpeg" />
                    <meta property="og:image:width" content="728" />
                    <meta property="og:image:height" content="606" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}