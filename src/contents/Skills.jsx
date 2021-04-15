import React, { Component } from 'react'

//Styles 
import './Skills.scss'

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state={
            'myskills':['Html','CSS','JS','REACT JS','CYPRESS']
        };

    }
    render () {
        return (
            <div className='skills'>
                <h1 className='subtopic'>
                    My Skills
                </h1>
                <ul>
                    {this.state.myskills.map((value)=> {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default Skills