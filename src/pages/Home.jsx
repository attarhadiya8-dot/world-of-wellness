import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import ServicesOverview from "../components/ServicesOverview";
import WhoWeSupport from "../components/WhoWeSupport";
import TeamPreview from "../components/TeamPreview";
import ContactCTA from "../components/ContactCTA";

function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <ServicesOverview />
      <WhoWeSupport />
      <TeamPreview />
      <ContactCTA />
    </main>
  );
}

export default Home;