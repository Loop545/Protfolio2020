import React, { Component } from 'react'

//Style
import './Servicecard.scss'

class Servicecard extends Component {
    render() {
        return (
            <div class="servicecard">
                <div class="single-card">
                    <div>{this.props.img}</div>
                    <h3 class="firsttext">{this.props.title}</h3>
                    <h5 class="firsttext">{this.props.intro}</h5>
                </div>
            </div>
        )
    }
}
export default Servicecard