import React, {Component} from "react";
import { Link } from "react-scroll";
// import { Link } from 'react-router-dom';



class Navbar extends Component{
    state={}
    render(){
        return(
            <div className="navbar">
                {/* <ul> */}
                    <Link activeClass="active" to="main" spy={true} smooth={true} offset={0} duration={500} >Home</Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} >Projects</Link>
                    <Link activeClass="active" to="publications" spy={true} smooth={true} offset={0} duration={500} >Publications</Link>
                    <Link activeClass="active" to="people" spy={true} smooth={true} offset={0} duration={500} >People</Link>
                    <Link activeClass="active" to="aboutme" spy={true} smooth={true} offset={0} duration={500} >About me</Link>

                    {/* <li>Main</li> */}
                    {/* <li>About</li> */}
                    {/* <li>Contacts</li> */}
                {/* </ul> */}
            </div>
        )
    }
}

export default Navbar;