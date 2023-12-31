import React, { useState } from "react";
import axios from "axios";

import toast, { Toaster } from "react-hot-toast";

function ContactFrom() {
  const [fromData, setFormData] = useState({});
  // const { isDark } = React.useContext(ThemeContext);
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const inputHandler = (e) => {
    setFormData({
      [e.target.name]: e.target.value,
    });
  };
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  console.log(serverState);
  const submitContactForm = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/mjvpgbrd",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
        toast.success("we'll get back to you soon!");
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
        console.log(r);
      });
  };
  return (
    <div className="contact-form-container">
      <Toaster />
      <form className={"form_container"} onSubmit={(e) => submitContactForm(e)}>
        <div>
          <input
            placeholder="Name"
            className="name"
            required
            value={fromData.name}
            name="name"
            type="text"
            id="name"
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <div>
          <input
            placeholder="Email"
            className="email"
            required
            value={fromData.email}
            name="email"
            id="email"
            type="email"
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <div>
          <textarea
            placeholder="How can we help?"
            className="text-area"
            name="message"
            required
            type="text"
            id="message"
            value={fromData.text}
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <button className={""} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactFrom;
