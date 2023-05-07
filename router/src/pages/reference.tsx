import { StyleColorMode } from '../components/StyleColorMode'
import { DarkLightSwitch } from '../components/DarkLightSwitch'

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

      <StyleColorMode height="100vh">
        <DarkLightSwitch />
      </StyleColorMode>
    </div>
  )
}

export default Home