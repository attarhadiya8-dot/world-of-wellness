import { conditions } from "../data/conditions";
import Button from "./Button";
import "./WhoWeSupport.css";

function WhoWeSupport() {
  return (
    <section className="section section--sage support">
      <div className="container">
        <div className="support__intro">
          <p className="label">Who we support</p>
          <h2>
            Support shaped around <em>every child</em>
          </h2>
          <p className="support__lead">
            Our occupational therapists support children and individuals with:
          </p>
        </div>

        <ul className="support__grid">
          {conditions.map((item) => (
            <li key={item.title} className="support__item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>

        <p className="support__note">
          These are areas where our therapists provide support. They are not
          diagnoses made by World of Wellness.
        </p>

        <div className="support__cta">
          <p>
            Not sure whether your child needs occupational therapy? Get in
            touch with us to discuss your concerns.
          </p>
          <Button to="/contact">Get in Touch</Button>
        </div>
      </div>
    </section>
  );
}

export default WhoWeSupport;