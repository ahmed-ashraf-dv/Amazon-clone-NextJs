import { Html, Head, Main, NextScript } from "next/document";
import { i18n } from "next-i18next";

const Document = ({ locale }) => {
  return (
    <Html>
      <Head>
        <meta
          property="og:image"
          content="https://i.ibb.co/Cm1dCnM/amazon-logo-500500-V323939215.png"
        />
        <meta
          property="og:description"
          content="Free shipping on millions of items. Get the best of Shopping and Entertainment with Prime. Enjoy low prices and great deals on the largest selection of everyday essentials and other products, including fashion, home, beauty, electronics, Alexa Devices, sporting goods, toys, automotive, pets, baby, books, video games, musical instruments, office supplies, and more."
        />

        {i18n.dir(locale) === "rtl" ? (
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.rtl.min.css"
            integrity="sha384-OXTEbYDqaX2ZY/BOaZV/yFGChYHtrXH2nyXJ372n2Y8abBhrqacCEe+3qhSHtLjy"
            crossOrigin="anonymous"
          />
        ) : (
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
            crossOrigin="anonymous"
          />
        )}
      </Head>
      <body dir={i18n.dir(locale)}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
