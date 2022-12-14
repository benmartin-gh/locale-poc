// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IQuestionsFields {
  /** title */
  title?: string | undefined;

  /** description */
  description?: Document | undefined;
}

export interface IQuestions extends Entry<IQuestionsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "questions";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "questions";

export type LOCALE_CODE = "en-AU" | "en-NZ";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-AU";
