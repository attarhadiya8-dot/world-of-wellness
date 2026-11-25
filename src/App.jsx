import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Placeholder title="About Us" />} />
        <Route path="/services" element={<Placeholder title="Services" />} />
        <Route path="/who-we-support" element={<Placeholder title="Who We Support" />} />
        <Route path="/team" element={<Placeholder title="Our Team" />} />
        <Route path="/team/:slug" element={<Placeholder title="Team Profile" />} />
        <Route path="/contact" element={<Placeholder title="Contact Us" />} />
      </Routes>
    </>
  );
}

export default App;