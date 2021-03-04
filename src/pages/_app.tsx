import { GetServerSideProps } from 'next';
import { LanguagesProvider } from '../contexts/LanguagesContext';
import '../styles/global.css'

function MyApp({ Component, pageProps, language }) {
  return (
    <LanguagesProvider language={language}>
      <Component {...pageProps} />
    </LanguagesProvider>
  );
}

export default MyApp

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { language } = ctx.req.cookies;

  return {
    props: {
      language: language ?? "en_US"
    }
  }
}