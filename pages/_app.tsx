import "tailwindcss/tailwind.css";
import { injectGlobal } from "@emotion/css";
import colors from "tailwindcss/colors";
import { resetContext, getContext } from "kea"; // 👈 add this
import { Provider } from "react-redux"; // 👈 add this
import { loadersPlugin } from "kea-loaders";

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

resetContext({
  // 👈 add this
  createStore: {
    // options for redux (e.g. middleware, reducers, ...)
  },
  plugins: [loadersPlugin()],
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={getContext().store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
