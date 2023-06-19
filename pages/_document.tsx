import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#ffe5e5"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#191825"
      />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
