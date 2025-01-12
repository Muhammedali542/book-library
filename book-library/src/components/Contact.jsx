// Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you for reaching out, ${formData.name}! We will respond to your message soon.`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          We would love to hear from you. Please fill out the form below or
          reach us directly at:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:muhammedali54254715@gmail.com">
              muhammedali54254715@gmail.com
            </a>
          </li>
          <li>
            Phone: <a href="tel:+201115605390">+20 111 560 5390</a>
          </li>
        </ul>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
