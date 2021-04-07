import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sicktastic</title>
      </Head>

      <main className={styles.main}>
        A combination of the words sick and fantastic.
      </main>
    </div>
  )
}
