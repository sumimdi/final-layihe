import React, { Component } from 'react';
import "./Footer.css";
import fb from "../Assets/Icons/Facebook.svg";
import insta from "../Assets/Icons/Instagram.svg";
import tw from "../Assets/Icons/Twitter.svg";
import le from "../Assets/Icons/LinkedIn.svg";

export default class Footer extends Component {
    render() {
        return (
            <footer style={{paddingBottom: 10}}>
                    <div className="details">
                        <div className='subs-div'>
                            <p className="subs-header">Subscribe to us..</p>
                            <div>
                                <input className="mail-input" type="email" placeholder='Email' required ></input>
                                <button className="submit-btn">SUBMIT</button>
                            </div>
                            <div className="icons">
                                <img classname="icon" src={fb} alt="fb"/>
                                <img classname="icon" src={insta} alt="insta"/>
                                <img classname="icon" src={tw} alt="tw"/>
                                <img classname="icon" src={le} alt="le"/>
                            </div>

                        </div>
                        <div className="footer-divs">
                            <div className="footer-div">
                                <span className="footer-span-head">Company</span>
                                <span className="footer-span">About</span>
                                <span className="footer-span">Privacy</span>
                                <span className="footer-span">System</span>
                            </div>
                            <div className="footer-div">
                                <span className="footer-span-head">Politics</span>
                                <span className="footer-span"> User agreement</span>
                                <span className="footer-span"> Contract</span>
                                <span className="footer-span"> Blog</span>
                            </div>
                            <div className="footer-div">
                                <span className="footer-span-head"> Contacts </span>
                                <span className="footer-span"> +994 01 345 46 25</span>
                                <span className="footer-span"> +994 01 345 57 85</span>
                                <span className="footer-span"> info@example.com </span>
                            </div>
                        </div>

                    </div>
                    <span className="year"> © 2023 presented by Sumaya</span>
                </footer>
        )
    }
}