import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project or collaboration in mind? Feel free to reach out to me directly.</p>
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:afrozeuddinmau@gmail.com">afrozeuddinmau@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+917396000506">+91 739600 0506</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
