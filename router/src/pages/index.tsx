import StyleColorMode from '@/components/StyleColorMode'
import MainColorMode from '@/components/MainColorMode'
import MidSection from '@/components/MidSection'
import Headline from '@/components/Headline'
import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'

import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Formula 1 - Simplified</title>
        <meta name="description" content="Website for Formula Simplified" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/f1-logo.ico" />
      </Head>

      <MainColorMode>
        <Headline title="Formula 1 Simplified" />
      </MainColorMode>

      <StyleColorMode height="100vh">
        <Navbar />
        <MidSection />
        <Footer />
      </StyleColorMode>
    </div>
  )
}

export default Home