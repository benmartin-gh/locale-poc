import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter();

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Locale poc app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Locale test
        </h1>
        <p>You are in {router.locale}</p>
      </main>

      
    </div>
  )
}

export default Home
