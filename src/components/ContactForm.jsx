import React from 'react'

//Style
import './ContactForm.scss'

//document.querySelector("form").addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
e.preventDefault()
let myForm = document.getElementById('contact');
let formData = new FormData(myForm)
fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
}).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}

const ContactForm = (props) => {
    
    return (
        <form className="contact-form" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <p>
            <label>Your Name: <input  id='1' type="text" name="name" /></label>   
        </p>
        <p>
            <label>Your Email: <input  id='2' type="email" name="email" /></label>
        </p>
        <p>
            <label>Message: <input  classname='message-box'id='3' type="text-field" name="message"/></label>
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
        </form>
        
    )
}
export default ContactForm;