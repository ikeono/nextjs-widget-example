 
import { useRouter } from 'next/router';
import Script from 'next/script';
import * as widget from "../lib/widget"
import { useEffect } from 'react';
import MessageListener from '../devtool/MessageListener';
import { Provider } from 'overmind-react';
import { overmindInstance } from '../devtool/overmind';
import NavBar from '../components/NavBar';


export default function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        // 💡 This how to close the widget on path change. 
        widget.close()
      }, [router.asPath]);


  return (
    <Provider value={overmindInstance}>
        <main>
            <NavBar />
            <Component {...pageProps} />
        </main>
        <MessageListener/> {/* Dev tool; irrelevant to business logic. */}
        <Script src="/ikeonoWidget.js"/>
    </Provider>
  )
}