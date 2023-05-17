import { Global } from '@emotion/react'

const GlobalCss = () => (
  <Global
    styles={`
      @font-face {
          font-family: 'Fela';
          src: url('./fonts/Fela-Bold.woff2') format('woff2'),
              url('./fonts/Fela-Bold.woff') format('woff'),
              url('./fonts/Fela-Bold.ttf') format('truetype');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
      }

      @font-face {
          font-family: 'Montserrat';
          src: url('./fonts/Montserrat-SemiBold.woff2') format('woff2'),
              url('./fonts/Montserrat-SemiBold.woff') format('woff'),
              url('./fonts/Montserrat-SemiBold.ttf') format('truetype');
          font-weight: 600;
          font-style: normal;
          font-display: swap;
      }

      @font-face {
          font-family: 'Montserrat';
          src: url('./fonts/Montserrat-Medium.woff2') format('woff2'),
              url('./fonts/Montserrat-Medium.woff') format('woff'),
              url('./fonts/Montserrat-Medium.ttf') format('truetype');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
      }


      /* spacer */
      p:not(:last-child) {
        margin-bottom: 24px;

        @media(min-width: 1280px) {
          margin-bottom: 30px;
        }
      }

    `}
  />
)

export default GlobalCss