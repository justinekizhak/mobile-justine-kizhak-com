import "tailwindcss/tailwind.css";
import { injectGlobal } from "@emotion/css";
import colors from "tailwindcss/colors";

injectGlobal`
body {
  min-height: 100vh;
  background: ${colors["gray"][700]};
  color: white;
  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    main {
      flex-grow: 1
    }
  }
}
`;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
