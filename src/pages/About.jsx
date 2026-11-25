import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import { about } from "../data/about";
import "./About.css";

function Pending({ show }) {
  return show ? <span className="pending">Pending approval</span> : null;
}

function About() {
  return (
    <main>
      <PageHeader
        label="About us"
        title={
          <>
            A calm place to <em>grow</em>, together
          </>
        }
      />

      {/* Introduction */}
      <section className="about-block">
        <div className="container about-narrow">
          {about.intro.map((paragraph) => (
            <p key={paragraph} className="about-text">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="section section--ivory">
        <div className="container about-two">
          <div>
            <p className="label">Our vision</p>
            <p className="about-statement">{about.vision.text}</p>
            <Pending show={about.vision.pending} />
          </div>
          <div>
            <p className="label">Our mission</p>
            <p className="about-statement">{about.mission.text}</p>
            <Pending show={about.mission.pending} />
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="section">
        <div className="container">
          <p className="label">Goals and objectives</p>
          <h2 className="about-heading">
            What we <em>aim</em> to do
          </h2>
          <ol className="about-goals">
            {about.goals.map((goal, index) => (
              <li key={goal}>
                <span className="about-goals__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="about-goals__text">{goal}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Approach */}
      <section className="section section--sage">
        <div className="container about-narrow">
          <p className="label">Our approach</p>
          <h2 className="about-heading">
            Support that fits <em>everyday life</em>
          </h2>
          {about.approach.paragraphs.map((paragraph) => (
            <p key={paragraph} className="about-text">
              {paragraph}
            </p>
          ))}
          <Pending show={about.approach.pending} />
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <p className="label">Our values</p>
          <h2 className="about-heading">
            What we <em>care</em> about
          </h2>
          <ul className="about-values">
            {about.values.items.map((value) => (
              <li key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </li>
            ))}
          </ul>
          <Pending show={about.values.pending} />
        </div>
      </section>

      {/* Why we exist */}
      <section className="section section--ivory">
        <div className="container about-narrow about-why">
          <p className="label">Why we exist</p>
          <p className="about-statement">{about.why.text}</p>
          <Pending show={about.why.pending} />
          <div className="about-why__cta">
            <Button to="/contact">Get in Touch</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;