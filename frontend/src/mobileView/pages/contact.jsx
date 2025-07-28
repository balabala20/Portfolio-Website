import React, { useState } from "react";

const base_url = `https://portfoliowebsite-two-taupe.vercel.app`;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const userHandler = async (e) => {
    e.preventDefault();

    // Input validation
    if (!name || !email || !message) {
      setFeedback("All fields are required.");
      setTimeout(() => {
        setFeedback("");
      }, 2000);
      return;
    }

    try {
      const user = { name, email, message }; // Define user object here
      const response = await fetch(`${base_url}/users/adduser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Fixed typo
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setFeedback("User added successfully!");
        setTimeout(() => {
          setFeedback("");
        }, 2000);
      } else {
        setFeedback("there was an error adding the user to the database.");
        setTimeout(() => {
          setFeedback("");
        }, 2000);
      }
    } catch (error) {
      setFeedback("An error occurred. Please try again later.");
      setTimeout(() => {
        setFeedback("");
      }, 2000);
    }
  };

  let contact = (
    <div id="contact_section">
      <form id="mobile_form" onSubmit={userHandler}>
        <div>
          <h2>Contact me</h2>
          <br />
        </div>
        <div id="textmail">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              id="Fname"
              className="formText"
              name="firstname"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="email"
              placeholder="Email address"
              id="Mailid"
              className="formText"
              name="mailid"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <br />
          <div>
            <textarea
              placeholder="text message"
              id="msg"
              cols={10}
              rows={5}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <br />
        <input type="Submit" value="Send Message" id="mobile_submit" />
        <p>{feedback}</p>
      </form>
    </div>
  );
  return contact;
}

export default Contact;
