import Hero from "../components/Hero";
import About from "../components/About";
import LineUp from "../components/LineUp";
import PracticalInfo from "../components/PracticalInfo";

function Home() {
  return (
    <div>
      <Hero />
      <LineUp />
      <About />
      <PracticalInfo />
    </div>
  );
}

export default Home;