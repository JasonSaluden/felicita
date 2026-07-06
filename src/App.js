import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/NavbarGlobal";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import InfosPratiques from "./pages/InfosPratiques";
import Admin from './pages/Admin'
import Billetterie from "./pages/Billetterie";
import Programmation from "./pages/Programmation";
import Retrospective from "./pages/Retrospective";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#01250C] text-[#F4D4DC]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/infospratiques" element={<InfosPratiques />} />
            <Route path="/billetterie" element={<Billetterie />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/programmation" element={<Programmation />} />
            <Route path="/retrospective" element={<Retrospective />} />
            <Route path="/retrospective/:annee" element={<Retrospective />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
