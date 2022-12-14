import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume3.xyz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://resume3.xyz">Resume3.xyz</a>
        </h1>
        <hr />
        <h1 className={styles.title}>
          Employer | <a href="https://resume3.xyz">Applicant</a>
        </h1>
      </main>
    </div>
  );
}
