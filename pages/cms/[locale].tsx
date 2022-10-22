import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import styles from "@/styles/Home.module.css"; // TODO: fix styles

import { fetchLocales, fetchEntries } from "@/utils/contentfulApi";
import ILocale from "@/types/Locales";
import IQuestions, { IQuestion } from "@/types/Questions";

interface IProps {
  questions: [IQuestion];
}

export function CmsPage(props: IProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>CMS</title>
        <meta name="description" content="Locale poc app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {props.questions.map((q, key: React.Key) => {
          return <h1 key={key}>{q.title}</h1>;
        })}
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const locales: ILocale[] = await fetchLocales();

  const paths = locales.map((locale: ILocale) => {
    return {
      params: {
        locale: locale.code,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  locale: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context.params as IParams;

  const res = await fetchEntries(locale);

  const questions = await res.map((q: IQuestions) => {
    return q.fields;
  });

  return {
    props: {
      questions,
    },
  };
};

export default CmsPage;
