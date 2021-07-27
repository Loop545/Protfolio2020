import React, { Component } from 'react';
//Components
import Social from '../components/Social'

//image
import profilepic from '../assest/img/profile.JPG'
//Type effect
import ReactTypingEffect from 'react-typing-effect';
//Styles
import './Home.scss'

class Home extends Component {
    render() {
        return (
            <div className='profile-info'>
                <div className='profile-content'>
                    <img src={profilepic} alt='pranab' className="profilepic" width='300px' height='300px'></img>
                    <h1>I am Pranab Raj Amatya</h1>
                    <ReactTypingEffect className="typingeffect" text={['I am a web developer']} speed={100} eraseDelay={700} />
                </div>
                <Social />

            </div>
        )
    }
}
export default Home