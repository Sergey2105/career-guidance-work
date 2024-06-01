import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="ru">
            <Head>
                <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <body>
                <Main />
                <div id="portal" />
                <NextScript />
            </body>
        </Html>
    );
}
