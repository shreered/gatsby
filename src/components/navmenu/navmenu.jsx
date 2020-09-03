import React, {useState} from 'react';
import { Link } from "react-scroll";
import Paper from '@material-ui/core/Paper';
import './navmenu.css';
import Button from '@material-ui/core/Button';

const Navmenu = () =>{
  const [value, setValue] = useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
  <Paper square className="nav-Container">
    {/* <Link activeClass="active" to="main" spy={true} className="navbar-option" smooth={true} offset={0} duration={500} >
       Main
    </Link>
    <Link activeClass="active" to="about" spy={true} className="navbar-option" smooth={true} offset={0} duration={500} >
        About
    </Link>
    <Link activeClass="active" to="contacts" spy={true} className="navbar-option" smooth={true} offset={0} duration={500} >
      Contacts
    </Link> */}

    <Link activeClass="active" to="main" spy={true} className="navbar-option" smooth={true} offset={0} duration={300} >Home</Link>
    <Link activeClass="active" to="about" className="navbar-option" spy={true} smooth={true} offset={0} duration={300} >Projects</Link>
    <Link activeClass="active" to="publications" className="navbar-option" spy={true} smooth={true} offset={0} duration={300} >Publications</Link>
    <Link activeClass="active" to="people" className="navbar-option" spy={true} smooth={true} offset={0} duration={300} >Our Team</Link>
    <Link activeClass="active" to="aboutme" className="navbar-option" spy={true} smooth={true} offset={0} duration={300} >About me</Link>


  </Paper>
    )
}

export default Navmenu;