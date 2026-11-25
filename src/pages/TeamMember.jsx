import { Link, useParams } from "react-router-dom";
import { team } from "../data/team";
import Button from "../components/Button";
import "./TeamMember.css";

function TeamMember() {
  const { slug } = useParams();
  const member = team.find((person) => person.slug === slug);

  if (!member) {
    return (
      <main className="section">
        <div className="container">
          <h1>Profile not found</h1>
          <p style={{ margin: "1.5rem 0" }}>
            We couldn't find that team member.
          </p>
          <Button to="/team">Back to Our Team</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="container">
        <Link to="/team" className="profile__back">
          ← Our Team
        </Link>

        <div className="profile">
          <div className="profile__photo">
            {member.photo ? (
              <img src={member.photo} alt={member.name} />
            ) : (
              <span>Photograph to be added</span>
            )}
          </div>

          <div className="profile__text">
            <h1>{member.name}</h1>
            <p className="profile__designation">{member.designation}</p>
            <span className="profile__rule" />

            {member.bio.map((paragraph) => (
              <p key={paragraph} className="profile__bio">
                {paragraph}
              </p>
            ))}

            <div className="profile__cta">
              <Button to="/contact">Get in Touch</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TeamMember;