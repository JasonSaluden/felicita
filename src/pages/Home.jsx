import Hero from "../components/Hero";
import About from "../components/About";
import LineUp from "../components/LineUp";
import Footer from "../components/Footer";
import PracticalInfo from "../components/PracticalInfo";

function Home() {
  return (
    <div>
      <Hero />
      <LineUp />
      {/* <About /> */}
      {/* <PracticalInfo /> */}
      <Footer />
    </div>
  );
}

export default Home;