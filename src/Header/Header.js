import React, { Component } from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>SOGO HOTEL</h1>
                <Link to={"/"} className="navbar-span" style={{textDecoration: "none"}}><span>Home </span></Link>
                <Link className="navbar-span" to={'/login'} style={{textDecoration: "none"}}><span>Login </span></Link>
                {/* <span className="navbar-span">Contacts </span>     
                <span className="navbar-span">Log In </span> */}
                <button className="search-button"> Reserve</button>
            </header>
        )
    }
}