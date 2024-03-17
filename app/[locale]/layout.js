// import { useLocale } from "next-intl";
// import { notFound } from "next/navigation";
// import { Inter } from "next/font/google";
// import "../globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Lyerz",
//   description: "description Lyerz",
// };

// export default function RootLayout({ children, params }) {
//   //  GET THE CURRENT LOCALE
//   const locale = useLocale();
//   // Show 404 Error if language not found
//   if (params.locale !== locale) {
//     notFound();
//   }
//   return (
//     <html lang={locale}>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

// استيراد الدوال المطلوبة من `next/navigation` بدلاً من `next/router`
import { notFound } from "next/navigation";
// استخدام هذه الدوال بدلاً من `useRouter()` في Server Components
import { useLocale } from "next-intl";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lyerz",
  description: "description Lyerz",
};

export default function RootLayout({ children }) {
  const locale = useLocale();

  // استخدام `notFound()` بدلاً من `router.locale !== locale`
  if (locale !== "en" && locale !== "ar") {
    notFound();
    return null;
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
