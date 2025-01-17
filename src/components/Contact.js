import React from "react";
import "../styles/global.css"; // Adjust the path based on your folder structure

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">I have just got what you need. Let's Talk.</h2>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <span>+91 8120197587</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <span>saurabhpatle001@gmail.com</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>Indore</span>
        </div>
      </div>
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Subject" name="subject" required />
        </div>
        <div className="form-group">
          <textarea placeholder="Message" name="message" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <p className="made-with-love">
        Made with <span className="heart-icon">❤️</span> By Saurabh Patle
      </p>
    </section>
  );
};

export default Contact;
