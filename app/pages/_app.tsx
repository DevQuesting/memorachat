import { AppProps } from 'next/app';
import Layout from '../layout';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
