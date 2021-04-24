import Head from "next/head";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Justine Kizhakkinedath</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          data-goatcounter="https://mobile-justinekizhak.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </Head>

      <Main />
      <footer></footer>
    </div>
  );
}
