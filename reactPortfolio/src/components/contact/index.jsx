import {useRef} from "react";
import "./style.css"
import Header from "../header";
import Photo from "../photo";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            'service_wbqsmui',
            'template_j1gu6xn',
             form.current,
             'v6u18fR5CNnkd7Jle'
        )
        .then (
            () => {
                alert("message sent");
                window.location.reload(false)
            },
            () => {
                alert('Error message not sent');
            }
        )
    }
  
  return (
    <>
      <Header />
      <Photo />
      <div id="form">
        <h1>Contact Me</h1>
        <p>
          I am interested in any freelance opportunites - the bigger/more
          ambitious the better. However if you have any questions or requests
          don't hesitate to contact me using the form provided.
        </p>
            <form ref={form} onSubmit={sendEmail}>
              <label for= "name">Name:</label><br/>
              <input type="text" name="name" id="name" required></input><br/>
              <label for= "email">Email:</label><br/>
              <input type="text" name="email" id="email" required></input><br/>
              <label for= "subject">Subject:</label><br/>
              <input type="text" name="subject" id="subject" required></input><br/>
              <label for= "message">Message:</label><br/>
              <textarea name="message" id="messsage" required></textarea><br/>
              <input type="submit" className="sButton" value="Send" />
            </form>
      </div>
    </>
  );
}

export default Contact;
