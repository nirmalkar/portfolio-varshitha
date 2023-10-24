import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

import toast, { Toaster } from "react-hot-toast";

interface ServerState {
  submitting: boolean;
  status: { ok: boolean; msg: string } | null;
}

function ContactFrom() {
  const [fromData, setFormData] = useState<{ [key: string]: string }>({});
  const [serverState, setServerState] = useState<ServerState>({
    submitting: false,
    status: null,
  });

  const inputHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...fromData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServerResponse = (
    ok: boolean,
    msg: string,
    form: HTMLFormElement
  ) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };

  console.log(serverState);

  const submitContactForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log(form);
    setServerState({ submitting: true, status: null });
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
            value={fromData.name || ""}
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
            value={fromData.email || ""}
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
            maxLength={200}
            id="message"
            value={fromData.message || ""}
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <button className={"submit_btn"} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactFrom;
