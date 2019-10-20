/**
 * [Footer]
 * This component shows the use of built-in CSS support
 */

import React from 'react';

function Footer() {
  return (
    <footer className="root">
      <div className="container">
        <div className="row">
          <a
            className="link"
            href="https://nextjs.org/features/server-side-rendering"
            rel="noopener noreferrer"
            target="_blank">
            SSR
          </a>

          <a
            className="link"
            href="https://nextjs.org/features/static-exporting"
            rel="noopener noreferrer"
            target="_blank">
            Static Exporting
          </a>

          <a className="link" href="https://nextjs.org/features/css-in-js" rel="noopener noreferrer" target="_blank">
            CSS-in-JS
          </a>

          <a
            className="link"
            href="https://nextjs.org/features/progressive-web-apps"
            rel="noopener noreferrer"
            target="_blank">
            PWA
          </a>
        </div>
      </div>

      <style jsx>{`
        .root {
          bottom: 0;
          width: 100%;
          margin: 0 auto;
          padding: 0 0;
          background-image: linear-gradient(to bottom, #121212 0%, #323232 100%);
          color: #f1f1f1;
          overflow: hidden;
        }

        .container {
          margin: 0 auto;
          max-width: 1024px;
          padding: 2rem 0 4rem;
          min-height: 200px;
        }

        .row {
          display: flex;
          justify-content: space-evenly;
        }

        .link {
          text-decoration: none;
          color: #f1f1f1;
        }

        .link:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
