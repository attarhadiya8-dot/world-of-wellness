import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/who-we-support", label: "Who We Support" },
  { to: "/team", label: "Our Team" },
  { to: "/contact", label: "Contact Us" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label="World of Wellness home">
          <img src={logo} alt="World of Wellness" />
        </Link>

        <button
          className={`header__toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
        </button>

        <nav
          id="main-nav"
          className={`header__nav ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === "/"}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;