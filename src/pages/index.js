import React from "react";
import Navbar from '../components/navbar/navbar';
import Main from '../components/main/main';
import About from '../components/about/about';
import Publications from '../components/publications/publications';

import '../../src/app.css';
import Navmenu from '../components/navmenu/navmenu';
import OurTeam from "../components/people/ourteam";

export default function Home() {
  return (
      <>
        {/* <Navbar /> */}
        <Navmenu />
        <Main />
        <About />
        <Publications />
        <OurTeam />
      </>
    )
}
