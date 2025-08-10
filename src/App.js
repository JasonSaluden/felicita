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
import BandeauHeader from "./components/BandeauHeader";
import './App.css';
import Footer from "./components/Footer";


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
            <Route path="/infospratiques" element={<InfosPratiques />} />
            <Route path="/billetterie" element={<Billetterie />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/programmation" element={<Programmation />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
