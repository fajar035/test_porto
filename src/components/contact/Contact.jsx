import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k2qawqh', 'template_c6rkpn6', formRef.current, 'X7K7ebhIeOy3YwHki')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  }
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>herlandy06@gmail.com</h5>
            <a href="mailto:herlandy06@gmail.com">Send a message</a>
          </article>
        </div>
        <br />
      </div>

    </section>
  )
}

export default Contact