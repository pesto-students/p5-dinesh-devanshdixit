import React, { useRef } from "react";

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nameRef.current.value === "") {
      alert("Name can't be blank.");
      nameRef.current.focus();
      return;
    }
    if (emailRef.current.value === "") {
      alert("Email can't be blank.");
      emailRef.current.focus();
      return;
    }

    alert("Thank you for contacting us!");
    nameRef.current.value = "";
    emailRef.current.value = "";
    msgRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" ref={nameRef} />
        <label>Email</label>
        <input type="email" ref={emailRef} />
        <label>Message</label>
        <textarea ref={msgRef}></textarea>
        <button className="btnsubmit">Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
