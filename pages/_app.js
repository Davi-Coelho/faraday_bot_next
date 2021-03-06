import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Head from 'next/head'

library.add(fab)

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head><link rel='shortcut icon' href='/images/favicon.ico'/></Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp