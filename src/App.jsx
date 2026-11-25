import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import WhoWeSupportPage from "./pages/WhoWeSupportPage";
import Team from "./pages/Team";
import TeamMember from "./pages/TeamMember";

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
      </Routes>
    </>
  );
}

export default App;