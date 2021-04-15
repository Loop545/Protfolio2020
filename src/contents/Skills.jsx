import React, { Component, useEffect, useState } from 'react'

//Styles 
import './Skills.scss'

//Components
import ProgressBar from '../components/ProgressBar'

const skillsData= [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },  
]



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
                     {skillsData.map((item, idx) => (
                     <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
                </ul>
            </div>
        )
    }
}
export default Skills