import Header from "../components/default/Header";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Footer from "../components/default/Footer";

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default Home;
