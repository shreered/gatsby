import React, {Component} from "react";
import './main.css';


class People extends Component{
    state={}
    render(){
        return(
            <div className="main-section" id="people">
                <div className="main-cover">
                    <div className="pardis">
                        Hello, I'm<br />
                        <strong>Pardis Miri</strong>
                    </div>
                    <div className="resume">
                        AND THIS IS MY PORTFOLIO
                    </div>
                </div>
            </div>
        )
    }
}

export default People;