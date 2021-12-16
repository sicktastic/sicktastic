import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sicktastic</title>
      </Head>

      <main className={styles.main}>
        <h1>Sicktastic</h1>
        <p className={styles.textGray}>
          A combination of the words sick and fantastic.
        </p>
      </main>
    </div>
  );
}
