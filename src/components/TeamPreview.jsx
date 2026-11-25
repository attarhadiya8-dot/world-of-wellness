import { team } from "../data/team";
import TeamCard from "./TeamCard";
import "./TeamPreview.css";

function TeamPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="team-preview__intro">
          <p className="label">Our team</p>
          <h2>
            Meet the <em>people</em> behind the care
          </h2>
        </div>

        <div className="team-preview__grid">
          {team.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamPreview;