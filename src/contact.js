import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c6lub8b', 'template_d5db06w', e.target, 'YOUR_USER_ID')
      .then((result) => {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setStatus('ERROR');
      });
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-info">
        <h2>Contact Us</h2>
        <p>Show Room - No. 136, Nasiyanur Main Road, Veerappampalayam Privu, Erode - 638107.</p>
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:aaruthrakarthik@gmail.com">aaruthrakarthik@gmail.com</a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <span>9865343636 , 9659597788</span>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
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
          {status === 'SUCCESS' && <p className="success-message">Message sent successfully!</p>}
          {status === 'ERROR' && <p className="error-message">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
