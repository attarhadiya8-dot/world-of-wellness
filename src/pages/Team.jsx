import { team } from "../data/team";
import PageHeader from "../components/PageHeader";
import TeamCard from "../components/TeamCard";
import "../components/TeamPreview.css";

function Team() {
  return (
    <main>
      <PageHeader
        label="Our team"
        title={
          <>
            Meet the <em>people</em> behind the care
          </>
        }
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="team-preview__grid" style={{ marginTop: 0 }}>
            {team.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Team;