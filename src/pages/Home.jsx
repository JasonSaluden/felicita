import Hero from "../components/Hero";
import About from "../components/About";
import LineUp from "../components/LineUp";
import PracticalInfo from "../components/PracticalInfo";
import BandeauHeader from "../components/BandeauHeader";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <LineUp />
      <PracticalInfo />
    </div>
  );
}

export default Home;
