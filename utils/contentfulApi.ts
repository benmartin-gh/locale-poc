import { LOCALE_CODE } from "@/types/generated/contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchLocales() {
  const locales = await client.getLocales();

  if (locales.items) return locales.items;
  console.log("Error fetching Locales");
}

export async function fetchEntries(locale: LOCALE_CODE) {
  const query = {
    locale: locale,
    content_type: "questions",
  };
  const entries = await client.getEntries(query);
  if (entries.items) return entries.items;

  console.log(`Error getting Entries for ${locale}.`);
}

export default { fetchEntries };
