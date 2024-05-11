import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";

/**
 * @typedef {Object} LocaleLayoutProps
 * @property {React.ReactNode} children
 * @property {Object} params
 * @property {string} params.locale
 */

/**
 * @param {LocaleLayoutProps} props
 */

export default async function LocaleLayout(props) {
  const {
    children,
    params: { locale },
  } = props;

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
