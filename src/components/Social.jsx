import React, { Component } from 'react';

//Styles
import './Social.scss'

//icons
import codepen from '../assest/icons/codepen.png'
import facebook from '../assest/icons/facebook.png'
import github from '../assest/icons/github.png'
import instagram from '../assest/icons/instagram.png'
import linkedin from '../assest/icons/linkedin.png'

class Social extends Component {
    render() {
        return (
            <div className="social">
            <a href="https://codepen.io/Pranab_1999" target=" " className="social-icon"><img src={codepen} /></a>
            <a href="https://github.com/Loop545" target=" "><img src={github} /></a>
            <a href="https://Instagram.com/pranab.raj_" target=" "><img src={instagram} /></a>
            <a href="https://www.facebook.com/pranavr.amatya" target=" "><img src={facebook} /></a>
            <a href="https://Linkedin.com/in/pranab-raj-amatya-6615901a2/" target=" "><img src={linkedin} /></a>
            </div>
        )
    }
}
export default Social