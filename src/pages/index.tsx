import Head from "next/head";
import { LanguageSelector } from "../components/LanguageSelector";
import { Profile } from "../components/Profile";
import { Position } from "../components/Position";

import styles from '../styles/pages/Home.module.css';
import { ContentBlock } from "../components/ContentBlock";
import { useContext } from "react";
import { LanguagesContext } from "../contexts/LanguagesContext";

export default function Home() {
  const { content } = useContext(LanguagesContext);

  const profile = content.profile;
  const header = content.header;
  const language = content.language;
  const personal_statement = content.personal_statement;
  const working_experience = content.working_experience;
  const education = content.education;
  const footer = content.footer;

  return (
    <div className={styles.container}>
      <Head>
        <title>{profile.name} | {header.function}</title>
      </Head>

      <header>
        <Profile profile={profile} />
        <LanguageSelector languages={language} />
        <Position position={header} />
      </header>

      <main>
        <ContentBlock content={personal_statement} />
        <ContentBlock content={working_experience} />
        <ContentBlock content={education} />
      </main>

    </div >

  )
}