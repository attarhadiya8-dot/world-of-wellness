import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import BotanicalSprig from "./BotanicalSprig";
import { contact, whatsappLink, gmailLink, instagramUrl } from "../data/contact";
import "./Footer.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/who-we-support", label: "Who We Support" },
  { to: "/team", label: "Our Team" },
  { to: "/contact", label: "Contact Us" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src={logo} alt="World of Wellness" className="footer__logo" />
            <p className="footer__about">
              A healthcare and therapy organisation beginning with paediatric
              occupational therapy, supporting children and their families.
            </p>
          </div>

          <nav className="footer__col" aria-label="Footer navigation">
            <p className="label">Explore</p>
            <ul>
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <p className="label">Contact</p>
            <ul>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={gmailLink()} target="_blank" rel="noopener noreferrer">
                  {contact.email}
                </a>
              </li>
              <li>
                {instagramUrl ? (
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                    Instagram: @{contact.instagramHandle}
                  </a>
                ) : (
                  <span className="footer__soon">Instagram: coming soon</span>
                )}
              </li>
            </ul>
          </div>

          <div className="footer__sprig" aria-hidden="true">
            <BotanicalSprig />
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} World of Wellness. All rights reserved.</p>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;