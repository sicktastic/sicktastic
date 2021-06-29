import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import sicktasticLogo from "../public/sicktastic.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sicktastic</title>
      </Head>

      <main className={styles.main}>
        <Image
          src={sicktasticLogo}
          alt="Sicktastic Logo"
          width="380"
          height="129"
        />
        <p className={styles.textGray}>
          A combination of the words sick and fantastic.
        </p>
      </main>
    </div>
  );
}
