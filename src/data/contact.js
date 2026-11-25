// ONE official contact identity. Update only this file when details change.



export const contact = {
  whatsappNumber: "919076004394",
  whatsappDisplay: "+91 90760 04394",
  email: "worldofwellness91@gmail.com",
  instagramHandle: "worldofwellness_mumbai",
};
export const instagramUrl = contact.instagramHandle
  ? `https://instagram.com/${contact.instagramHandle}`
  : null;

export function whatsappLink(topic) {
  const message = topic
    ? `Hello World of Wellness, I would like to enquire about ${topic}.`
    : "Hello World of Wellness, I would like to make an enquiry.";
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function emailLink(topic) {
  const subject = topic ? `Enquiry: ${topic}` : "Enquiry";
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
}

export function gmailLink(topic) {
  const subject = topic ? `Enquiry: ${topic}` : "Enquiry";
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=${encodeURIComponent(subject)}`;
}