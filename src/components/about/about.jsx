import React, {Component,useState} from "react";
import '../about/about.css';
import Far from './projects/FAR/far'
import PIVplus from './projects/PIV++/piv++'
import PIV from './projects/PIV/piv'
import Hapland from './projects/HAPLAND/hapland'
import Wehab from './projects/WEHAB/wehab'
import { Grid } from "@material-ui/core";



const About = () => {

        return(
          <div className="about-section" id="about">
            <Grid container >
              <Grid item xs={12}>
                  <div className="about-heading">Featured <strong>Projects</strong></div>
              </Grid>

              <Grid item xs={4}> 
                <Far />          
              </Grid>

              <Grid item xs={4}>
                <PIVplus />
              </Grid>

              <Grid item xs={4}>
                <PIV />
              </Grid>            
            </Grid>
            
            <Grid container className="bottom-grid"> 
              <Grid item xs={4}>
                <Hapland />
              </Grid>

              <Grid item xs={4}>
                <Wehab />
              </Grid>

            </Grid>
          </div>
        )
    }

export default About;