import { wrapper } from "@/assets/shared/components/store";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
    const { store } = wrapper.useWrappedStore(pageProps);
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
