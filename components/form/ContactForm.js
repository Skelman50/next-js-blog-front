import { Fragment, useState } from "react";
import ContactFormUi from "../../ui/ContactFormUi";
import { emailContactFprm } from "../../actions/form";
import ShowError from "../../ui/ShowError";
import ShowSuccess from "../../ui/ShowSuccess";

const ContactForm = ({ authorEmail = false }) => {
  const [values, setValues] = useState({
    message: "",
    name: "",
    email: "",
  });

  const [sent, setSent] = useState(false);
  const [buttonText, setButtonText] = useState("Send message");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setButtonText("Sending...");
    const response = await emailContactFprm({ ...values, authorEmail });
    setLoading(false);
    setButtonText("Send message");
    if (response.error) {
      setError(response.error);
    } else {
      setSuccess(response.success);
      setSent(true);
      setValues({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (e) => {
    setError("");
    setSuccess(false);
    setButtonText("Send message");
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      {error && <ShowError error={error} />}
      {success && <ShowSuccess text="Thank you for contacting us!" />}
      <ContactFormUi
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText={buttonText}
        loading={loading}
      />
    </Fragment>
  );
};

export default ContactForm;
