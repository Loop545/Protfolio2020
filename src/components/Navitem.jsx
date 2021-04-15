import React, { Component } from 'react';

//Router
import { Link } from "react-router-dom";

class Navitem extends Component {   
    render() {
            return (
            <li>
            <Link to={this.props.tolink} >
            {this.props.item}
            </Link>
            </li>
        )
    }

}
export default Navitem