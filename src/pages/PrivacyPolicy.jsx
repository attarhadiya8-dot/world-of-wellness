import PageHeader from "../components/PageHeader";
import { contact, gmailLink } from "../data/contact";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <main>
      <PageHeader
        label="Privacy"
        title={
          <>
            Privacy <em>Policy</em>
          </>
        }
        intro="How this website handles your information."
      />

      <section className="policy">
        <div className="container policy__inner">
          <span className="policy__draft">
            Draft, pending review by the founders and a legal professional
          </span>
          <p className="policy__date">Last updated: November 2026</p>

          <h2>About this website</h2>
          <p>
            This website gives information about World of Wellness, its
            services, its team and how to contact us. It has no user accounts,
            no online booking and no enquiry form that stores your details.
          </p>

          <h2>Information we receive</h2>
          <p>
            We only receive information that you choose to send us by WhatsApp
            or email. This may include your name, your phone number or email
            address, and the contents of your message.
          </p>

          <h2>Please do not send medical details</h2>
          <p>
            Please do not send diagnoses, medical reports, photographs of
            children or other sensitive health information in your first
            message. We will tell you how to share anything we need once we are
            in touch.
          </p>

          <h2>How we use your message</h2>
          <p>
            We use your message to reply to your enquiry and to discuss how we
            may be able to help. We do not sell your information.
          </p>

          <h2>Third-party services</h2>
          <p>
            Messages sent through WhatsApp, Gmail or Instagram are handled by
            those services under their own privacy policies. This website
            loads its fonts from Google Fonts, so Google may receive your
            device's IP address when a page loads. The website is hosted on
            GitHub Pages, which may keep standard server logs.
          </p>

          <h2>Photographs</h2>
          <p>
            Photographs of our professionals are published only with their
            consent.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us to correct or delete the messages you have sent us
            by writing to{" "}
            <a href={gmailLink()} target="_blank" rel="noopener noreferrer">
              {contact.email}
            </a>
            .
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy. The date at the top shows when it was
            last changed.
          </p>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;