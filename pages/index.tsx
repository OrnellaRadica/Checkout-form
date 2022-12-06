import Head from "next/head";
import PaymentForm from "../components/PaymentForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Checkout form</title>
        <meta name="description" content="Ornella Radica - React Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center min-h-screen">
        <PaymentForm />
      </main>
    </>
  );
}
