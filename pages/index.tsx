import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className={styles.container}>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content="Locale poc app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          Your locale is {router.locale}{" "}
          {router.locale === router.defaultLocale ? "(default)" : null}
        </h1>

        <h3>{t("greeting")}</h3>
      </main>
    </div>
  );
};

export async function getStaticProps(props: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(props.locale, ["common"])),
    },
  };
}

export default Home;
