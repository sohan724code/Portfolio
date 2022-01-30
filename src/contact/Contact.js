import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import phone from "../images/telephone.png";
import email from "../images/email.png";
import location from "../images/google-maps.png";
import useDark from "../hooks/useDark";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const { dark } = useDark();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r36pyl3",
        "template_k6n9wem",
        formRef.current,
        "user_lTsmSsSdQZYUcuWZ64fnR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Tell me about your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +8801744988083
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              jahidul.islam50299@gmail.com
            </div>
            <div className="c-info-item">
              <img src={location} alt="" className="c-icon" />
              Dogair,Demra,Dhaka-1362
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <strong>What's your story?</strong> Get in touch. Always available
            for freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: dark && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: dark && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: dark && "#333" }}
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: dark && "#333" }}
              name="message"
              placeholder="Message"
              rows="5"
            ></textarea>
            <button type="submit">Submit</button>
            {done && "Thank You..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
