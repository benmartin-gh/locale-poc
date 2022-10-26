import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import styles from "@/styles/Home.module.css"; // TODO: fix styles

import { fetchLocales, fetchEntries } from "@/utils/contentfulApi";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import ILocale from "@/types/locales";

import { IQuestionsFields, IQuestions } from "@/types/generated/contentful";

interface IProps {
  questions: [IQuestionsFields];
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
          return (
            <div key={key}>
              <h1>{q.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    q.description !== undefined
                      ? documentToHtmlString(q.description)
                      : "<p></p>",
                }}
              />
            </div>
          );
        })}
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetchEntries(
    context.locale !== undefined ? context.locale : "en"
  );
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
