import React from "react";
import Navbar from '../components/navbar/navbar';
import Main from '../components/main/main';
import About from '../components/about/about';
import Contact from '../components/Contact/Contact';
import '../../src/app.css';
import Navmenu from '../components/navmenu/navmenu';

export default function Home() {
  return (
      <>
        {/* <Navbar /> */}
        <Navmenu />
        <Main />
        <About />
        <Contact />
      </>
    )
}
