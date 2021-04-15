import React, { Component } from 'react';

import Widecard from '../components/Widecard';

import './Education.scss'

class Education extends Component {
    render() {
        return (
            <div className="cards">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="BIT Mobile Application Development" where="Victoria University" from="July 2017" to="Present"/>
            <Widecard title="SLC | Year 12" where="Xavier Academy" from="2011" to="2017"/>
        </div>
        )
    }
}
export default Education
