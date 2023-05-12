import * as React from 'react';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="cs">
      <Head />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" href="/favicon1.png" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
