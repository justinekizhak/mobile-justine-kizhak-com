import Head from "next/head";
import Main from "@/components/Main";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Justine Kizhakkinedath</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          data-goatcounter="https://mobile-justinekizhak.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Jost&family=Major+Mono+Display&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <Main />
      <Footer />
    </>
  );
}
