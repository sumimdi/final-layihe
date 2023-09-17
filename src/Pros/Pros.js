import React, { Component } from 'react';
import "./Pros.css";
import icon1 from "../Assets/Icons/Icon 1.svg";
import icon2 from "../Assets/Icons/Icon 2.svg";
import icon3 from "../Assets/Icons/Icon 3.svg";


export default class Pros extends Component {

    render() {
        return (
            <div className="pros">
                <span className="pros-span"> CUSTUMER SATISFACTION </span>
                <span className="pros-span-happy"> ENJOY YOUR STAY <br /><br />
                    people says</span>
                <div className="pros-div">
                    <div className="pros-item">
                        {/* <img className="img-icon" src={icon1} alt="icon1" /> */}
                        <span className="pros-item-header"> John Doe </span>
                        <span className="pros-item-body"> “When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.”</span>
                    </div>
                    <div className="pros-item">
                        {/* <img className="img-icon" src={icon2} alt="icon2" /> */}
                        <span className="pros-item-header"> Jean Smith </span>
                        <span className="pros-item-body"> “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”</span>
                    </div>
                    <div className="pros-item">
                        {/* <img className="img-icon" src={icon3} alt="icon3" /> */}
                        <span className="pros-item-header"> Jean Smith </span>
                        <span className="pros-item-body"> “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”</span>
                    </div>
                </div>
            </div>


        )
    }
}