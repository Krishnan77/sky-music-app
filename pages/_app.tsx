import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import getStore from "../shared/store/collection-slice";

export default function App({ Component, pageProps }: AppProps) {
  const store = getStore(pageProps.initialState);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
