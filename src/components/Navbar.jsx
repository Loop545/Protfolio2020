import React, {Component} from 'react';

//Nav items 
import Navitem from './Navitem';

//Styles
import './Navbar.scss'

class Navbar extends Component {
    // constructor(props)
    // {
    //     super(props);
    //     this.state={
    //         'NavItemActive':''
    //     }
    // }
    // activeitem= (x) => {
    //     if(this.state.NavItemActive.length>0){
    //         document.getElementById(this.state.NavItemActive).classList.remove('active');
    //         }
    //         this.setState({'NavItemId':x},()=>{
    //         document.getElementById(this.state.NavItemActive).classList.add('active');
    //     });
        
    // };
    render() {
        return (
            <nav>
            <ul className='nav-items'>
            <Navitem id='list' item="Home" tolink="/" ></Navitem>
            <Navitem id='list' item="About" tolink="/about" ></Navitem>
            <Navitem id='list' item="Education" tolink="/education"></Navitem>
            <Navitem id='list' item="Skills" tolink="/skills"></Navitem>
            <Navitem id='list' item="Contact" tolink="/contact"></Navitem>
            </ul>
            </nav>
        )
    }
    
}
 
export default Navbar