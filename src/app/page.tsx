import Hero from "@components/Hero";
import { CTA, Footer, Main, Review } from "@components/index";

export default function Home() {
  return (
    <>
      <Hero />
      <Main />
      <Review />
      <CTA />
      <Footer />
    </>
  );
}
