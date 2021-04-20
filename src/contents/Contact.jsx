import React, { Component } from 'react';

//Components
import Social from '../components/Social';
import Form from '../components/ContactForm';


//Styles
import './Contact.scss'

class Contact extends Component {
    render() {
        return (
            <div className="contact">
            <h1 className="subtopic">Contact Me</h1>
            <h3>Email  :   pranab.amatya.pa@gmail.com</h3>
            <h3>Instagram   :   @pranab_1999</h3>
            <Form/>
            <Social />
            </div>
        )
    }
}
export default Contact