import Link from "next/link";
import { useRouter } from "next/router";

function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <div>
      {otherLocales.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <Link
            href={{ pathname, query }}
            as={asPath}
            locale={locale}
            key={locale}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}

export default LocaleSwitcher;
