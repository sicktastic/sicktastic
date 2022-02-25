// NextJS
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// React
import redirect from "nextjs-redirect";

// Sicktastic
import styles from "../styles/Home.module.css";
import SicktasticLogo from "../public/sicktastic.svg";

const Redirect = redirect("https://anthonylee.io");

export default function Home() {
  return (
    <Redirect>
      <div className={styles.container}>
        <Head>
          <title>Sicktastic</title>
          <meta
            name="description"
            content="A combination of the words sick and fantastic."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Link href="https://anthonylee.io">
            <a>
              <Image
                src={SicktasticLogo}
                alt="Sicktastic Logo"
                width={500}
                height={200}
              />
            </a>
          </Link>
          <p className={styles.textGray}>
            A combination of the words sick and fantastic.
          </p>
        </main>
      </div>
    </Redirect>
  );
}
