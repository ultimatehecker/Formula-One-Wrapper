import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import ActiveLink from '../components/ActiveLink';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Formula 1 - Simplified</title>
        <meta name="description" content="Website for Formula Simplified" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/f1-logo.ico" />
      </Head>

      <Navbar>
        <ActiveLink href="/">
          Home
        </ActiveLink>

        <ActiveLink>
          <ul>
            <li><a href="/reference">Reference</a></li>
            <li><a href="/guide">Guide</a></li>
          </ul>
        </ActiveLink>
      </Navbar>
    </div>
  )
};

export default Home;
