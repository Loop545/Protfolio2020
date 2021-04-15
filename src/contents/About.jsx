import React, { Component } from 'react';
//Styles
import './About.scss'

class About extends Component {
    render() {
        return (
            <div className="content">
                <h1 className="subtopic">About Me</h1>
                <h4>Hey there,</h4>
                <h1>I'm Pranab Raj Amatya</h1>
                <h3>Full Stack Web <u>Developer</u> | UI/UX <u>Designer</u></h3>
                <br></br>
                <p>I started my journey in the world of computers from an young age,
                now I’m 21 years old, Pursuing my Information Technology Degree in
                Victoria University Sydney.  Web development is my center of interest, i always
                love the idea of cross-platform development, 1-n one code base deploy into almost
                any platform, which web technology like Javascript enables me to do. I also like
                creating Interactive UI components for better UX  and share those desgin and codes
                to the world through Github, Codepen and Instagram.
                </p>
            </div>
        )
    }
}
export default About