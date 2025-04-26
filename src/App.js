import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Billetterie from "./pages/Billetterie";
import BandeauHeader from "./components/BandeauHeader";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFF8C9] text-black">
        <BandeauHeader />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/billetterie" element={<Billetterie />} />
          </Routes>
        </main>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
