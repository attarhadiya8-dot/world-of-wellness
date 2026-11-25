import BotanicalSprig from "./BotanicalSprig";
import {
  contact,
  whatsappLink,
  emailLink,
  gmailLink,
  instagramUrl,
} from "../data/contact";
import "./Button.css";
import "./ContactCTA.css";

function ContactCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <div className="cta__text">
            <p className="label">Contact us</p>
            <h2>
              Let's talk about <em>your child</em>
            </h2>
            <p className="cta__description">
              Message us on WhatsApp or email and we will get back to you.
              Please don't send diagnoses or medical reports in your first
              message.
            </p>

            <div className="cta__actions">
              <a
                className="btn btn--primary"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
              <a
                className="btn btn--outline"
                href={gmailLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Email Us
              </a>
            </div>

            <p className="cta__email-note">
              Or write to <a href={emailLink()}>{contact.email}</a>
            </p>

            {instagramUrl ? (
              <a
                className="cta__instagram"
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow us on Instagram
              </a>
            ) : (
              <p className="cta__instagram cta__instagram--soon">
                Instagram: coming soon
              </p>
            )}
          </div>

          <div className="cta__sprig" aria-hidden="true">
            <BotanicalSprig />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;