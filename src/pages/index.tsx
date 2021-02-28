import Head from "next/head";
import { LanguageSelector } from "../components/LanguageSelector/LanguageSelector";
import { Profile } from "../components/Profile/Profile";
import { Position } from "../components/Position/Position";

import styles from '../styles/pages/Home.module.css';
import { ContentBlock } from "../components/ContentBlock/ContentBlock";
import { Experience } from "../components/ContentBlock/Experience/Experience";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christian Dueck | Front-end developer</title>
      </Head>

      <header>
        <Profile />
        <LanguageSelector />
        <Position />
      </header>

      <main>
        <ContentBlock>
          <h4>Personal Statement</h4>
          <p>
            Working with web developmen since 2020,
            I have maintained C# web applications.
            I entedered in the development industry
            working mostly as back-end developer,
            but my passion is to be a front-end developer.
            Currently working in personal projects based on Next.js,
            with MongoDB.
            </p>
        </ContentBlock>

        <ContentBlock>
          <h4>Working experience</h4>
          <Experience>
            <h5>Front-end web developer</h5>
            <p>
              <em>for</em> <h6>personal projects</h6>
              <span>Jan 2021 - Present</span>
            </p>
          </Experience>

          <Experience>
            <h5>Back-end web developer</h5>
            <p>
              <em>at</em> <h6>Chleba Agência Digital</h6>
              <span>Jan 2021 - Present</span>
            </p>
            <p>
              Maintenance in e-commerce applications and implementation of LGPD
              (Lei Geral de Proteção de Dados) rules. Integration with external API.
            </p>
          </Experience>

          <Experience>
            <h5>Fullstack web developer</h5>
            <p>
              <em>at</em> <h6>Brose do Brasil Ltda</h6>
              <span>Feb 2012 - Jan 2021</span>
            </p>
            <p>
              Maintenance and implementation of new features in internal web applications.
            </p>
          </Experience>

        </ContentBlock>

        <ContentBlock>
          <h4>Education</h4>
          <Experience>
            <h5>Technologist in System Analysis and Development</h5>
            <p>
              <em>at</em> <h6>[UFPR] Federal University of Paraná</h6>
              <span>Jul 2018 - Dec 2021</span>
            </p>
          </Experience>
        </ContentBlock>
      </main>

    </div>

  )
}
