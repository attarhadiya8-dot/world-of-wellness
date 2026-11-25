import "./Introduction.css";

function Introduction() {
  return (
    <section className="section intro">
      <div className="container intro__inner">
        <hr className="hairline intro__rule" />
        <p className="label">Welcome</p>
        <h2>
          A calm place to <em>grow</em>, together.
        </h2>
        <p className="intro__text">
          World of Wellness is a healthcare and therapy organisation beginning
          with paediatric occupational therapy. We support children and their
          families in building independence, taking part in everyday
          activities and developing the skills that matter most to them.
        </p>
      </div>
    </section>
  );
}

export default Introduction;