import { Link } from "react-router-dom";
import "./Button.css";
import "./TeamCard.css";

function TeamCard({ member }) {
  return (
    <article className="team-card">
      <div className="team-card__photo">
        {member.photo ? (
          <img src={member.photo} alt={member.name} />
        ) : (
          <span className="team-card__placeholder">Photograph to be added</span>
        )}
      </div>

      <h3 className="team-card__name">{member.name}</h3>
      <p className="team-card__designation">{member.designation}</p>
      <p className="team-card__description">{member.shortDescription}</p>
      <p className="team-card__key">{member.keyPoint}</p>

      <Link to={`/team/${member.slug}`} className="btn btn--outline">
        View Full Profile
      </Link>
    </article>
  );
}

export default TeamCard;