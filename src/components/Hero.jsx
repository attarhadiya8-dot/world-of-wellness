import Button from "./Button";
import BotanicalSprig from "./BotanicalSprig";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="label">Care • Connection • Growth</p>
          <span className="hero__rule" />

          <h1>
            Helping every child discover their <em>potential.</em>
          </h1>

          <p className="hero__description">
            A supportive space where individuals and families can explore
            possibilities, develop meaningful skills and experience a better
            quality of life.
          </p>

          <div className="hero__actions">
            <Button to="/services">Explore Our Services</Button>
            <Button to="/contact" variant="outline">
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          <div className="hero__blob" />
          <div className="hero__sprig">
            <BotanicalSprig />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;