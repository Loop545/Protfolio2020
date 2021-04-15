import React, {Component} from 'react';

//Nav items 
import Navitem from './Navitem';

//Styles
import './Navbar.scss'

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem= (x) => {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
            }
            this.setState({'NavItemId':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
        
    };
    render() {
        return(
            <nav>
                <ul className='nav-items'>
                <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
                <Navitem item="About" tolink="/about" activec={this.activeitem}></Navitem>
                <Navitem item="Education" tolink="/education" activec={this.activeitem}></Navitem>
                <Navitem item="Skills" tolink="/skills" activec={this.activeitem}></Navitem>
                <Navitem item="Contact" tolink="/contact" activec={this.activeitem}></Navitem>  
                </ul>
            </nav>
        )
    }
}
 
export default Navbar