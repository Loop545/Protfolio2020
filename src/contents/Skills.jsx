import React, { Component, useEffect, useState } from 'react'

//Styles 
import './Skills.scss'

//Components
import ProgressBar from '../components/ProgressBar'

const skillsData= [
    { bgcolor: "#86C232", completed: 60 , title:'HTML'},
    { bgcolor: "#6B6E70", completed: 30 , title:'CSS'},
    { bgcolor: "#86C232", completed: 53 , title:'JS' },  
]



class Skills extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         'myskills':['Html','CSS','JS','REACT JS','CYPRESS']
    //     };

    // }
    render () {
           
            return (
            <div className='skills'>
                <h1 className='subtopic'>
                    My Skills
                </h1>
                <ul>
                    {/* {this.state.myskills.map((value)=> {
                        return <li>{value}</li>
                    })} */}
                     {skillsData.map((item, idx) => (
                     <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} title={item.title} />
                    ))
                }
                </ul>
            </div>
        )
    }
}
export default Skills