import React from 'react';
import { Global, css } from '@emotion/core';

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Global
          styles={css`
            ::selection {
              background-color: #26bd5a;
              color: #fff;
            }
            body,
            html {
              margin: 0;
              padding: 0;
              font-family: 'Inter';
            }
          `}
        />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
