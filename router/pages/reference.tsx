import ActiveLink from "@/components/ActiveLink";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function Reference() {
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
  
            <h1>Reference Page</h1>
        </div>
    )
}

export default Reference;