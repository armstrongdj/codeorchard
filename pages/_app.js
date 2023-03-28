import { Texturina, Jura, JetBrains_Mono } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'

const primary = Texturina({ subsets: ['latin'] })
const secondary = Jura({ subsets: ['latin']})
const mono = JetBrains_Mono({ subsets: ['latin']})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-primary: ${primary.style.fontFamily};
          --font-secondary: ${secondary.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>CodeOrchard</title>
        <meta name="description" content="May your trees compute much fruit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
