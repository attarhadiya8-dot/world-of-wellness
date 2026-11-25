import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import WhoWeSupportPage from "./pages/WhoWeSupportPage";
import Team from "./pages/Team";
import TeamMember from "./pages/TeamMember";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const Placeholder = ({ title }) => (
  <main className="section">
    <div className="container">
      <h1>{title}</h1>
    </div>
  </main>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Placeholder title="Services" />} />
        <Route path="/who-we-support" element={<WhoWeSupportPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:slug" element={<TeamMember />} />
        <Route path="/contact" element={<Placeholder title="Contact Us" />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;