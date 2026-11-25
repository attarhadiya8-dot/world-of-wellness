import { Link } from "react-router-dom";
import { services } from "../data/services";
import "./ServicesOverview.css";

function ServicesOverview() {
  return (
    <section className="section section--ivory">
      <div className="container">
        <p className="label">What we offer</p>
        <h2 className="services__heading">
          Our <em>services</em>
        </h2>

        <ul className="services__list">
          {services.map((service, index) => {
            const number = String(index + 1).padStart(2, "0");

            const content = (
              <>
                <span className="services__number">{number}</span>
                <span className="services__title">{service.title}</span>
                {service.confirmed ? (
                  <>
                    <span className="services__summary">{service.summary}</span>
                    <span className="services__more">Learn more →</span>
                  </>
                ) : (
                  <span className="services__tbc">To be confirmed</span>
                )}
              </>
            );

            return (
              <li key={service.title}>
                {service.confirmed ? (
                  <Link to="/services" className="services__row">
                    {content}
                  </Link>
                ) : (
                  <div className="services__row services__row--muted">
                    {content}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ServicesOverview;
