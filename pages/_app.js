import { Texturina, Jura, JetBrains_Mono } from 'next/font/google'
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
      <Component {...pageProps} />
    </>
  );
}
