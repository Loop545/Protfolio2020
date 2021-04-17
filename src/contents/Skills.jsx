import React, { Component, useEffect, useState } from 'react'

//Styles 
import './Skills.scss'

//Components
import ProgressBar from '../components/ProgressBar'
import Servicecard from '../components/Servicecard';

//icons
import web from '../assest/icons/web.png'
import graphic from '../assest/icons/graphic.png'
import camera from '../assest/icons/camera.png'


const skillsData= [
    { bgcolor: "#86C232", completed: 80 , title:'HTML'},
    { bgcolor: "#6B6E70", completed: 70 , title:'CSS'},
    { bgcolor: "#86C232", completed: 65 , title:'REACT' },  
    { bgcolor: "#6B6E70", completed: 45 , title:'PHP'},
    { bgcolor: "#86C232", completed: 70 , title:'JS' },  
    { bgcolor: "#6B6E70", completed: 65 , title:'CYPRESS'},
    { bgcolor: "#86C232", completed: 60 , title:'ADOBE' },  
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
            <div className='wrapper'>
                <div className='skills'>
                    <h1 className='subtopic'>
                        My Skills
                    </h1>
                    <h4>Hey there,</h4>
                    <h3>I am Full Stack Web <u>Developer</u> | UI/UX <u>Designer</u></h3>
                    <br></br>
                    <p classNAme='skill-description'> Since the day I stared coding till now, I believe I have never stopped learing. There is so much
                    out there in Web development world. Each and every aspect of web developmenmt is equally importmant as it balances out the load and each has its own purpose.
                    <br> 
                    
                    </br>
                    My main focous of expertise is Front End, working with <u>React Liabary</u> along with other web developemnt components.
                    I have build up some knowledge about test driven development using cypress, and have been implementing it on my recent works.
                    
                    </p>
                    <br></br>
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
                <div className='services'>
                    <h1 className='topic'>
                        My Services
                    </h1>
                    <p className='subtopic' style={{color:"#61892F"}}> Everything I offer.</p>
                    <div className='card'>
                        <Servicecard img={<img src={web}/>} title="Web Development" intro="React.UX.Wordpress" />
                        <Servicecard img={<img src={camera}/>} title="Basic Photography" intro="Protrait.Street.Landscape" />
                        <Servicecard img={<img src={graphic}/>} title="Graphic Design" intro="Flayers.Pamplets.Web Essential" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Skills