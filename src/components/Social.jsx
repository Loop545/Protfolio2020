import React, { Component } from 'react';

//Styles
import './Social.scss'

class Social extends Component {
    render() {
        return (
            <div class="social">
            <a href="https://codepen.io/naafi" target=" "><i class="fa fa-codepen"></i></a>
            <a href="https://github.com/naaficodes" target=" "><i class="fa fa-github"></i></a>
            <a href="https://Instagram.com/iam_naafi" target=" "><i class="fa fa-instagram"></i></a>
            <a href="https://www.facebook.com/abdul.w.naafi" target=" "><i class="fa fa-facebook-f"></i></a>
            <a href="https://Linkedin.com/in/naafi" target=" "><i class="fa fa-linkedin-in"></i></a>
            <a href="https://medium.com/@iam_naafi" target=" "><i class="fa fa-medium-m"></i></a>
            </div>
        )
    }
}
export default Social