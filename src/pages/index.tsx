import Head from "next/head";
import { LanguageSelector } from "../components/LanguageSelector/LanguageSelector";

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christian Dueck | Front-end developer</title>
      </Head>

      <LanguageSelector />
    </div>

  )
}
