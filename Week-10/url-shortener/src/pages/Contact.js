import ContactForm from "../components/ContactForm";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  return (
    <div className="page-content">
      <div className="card-container">
        <ContactCard />
      </div>
      <div className="form-container">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
