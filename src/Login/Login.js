import React, { Component } from 'react';
import "./Login.css";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';



export default class Login extends Component {
    state = {
      nameValue: "",
      phoneValue: "",
      addressValue: ""
    };
  
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
    };
  
    handleClick = () => {
      alert(
        `Information:
      Name: ${this.state.nameValue}
      Phone: ${this.state.phoneValue}
      Address: ${this.state.addressValue}`
      );
    };
  
    render() {
      const { nameValue, phoneValue, addressValue } = this.state;
      const isSubmitActive =
        nameValue !== "" && phoneValue.length === 10 && addressValue !== "";
      const buttonClassName = !isSubmitActive === false ? "white lgnbutton" : "lgnbutton";
      return (

        <div className="main loginContainer" >
            <Header />
          <div className="addContainer">
            <form onSubmit={this.handleSubmit}>
              <br />
              <label htmlFor="name">
                <span className='lgnspan'> Name: </span>
                <input   className='lgninput'
                  name="nameValue"
                  id="name"
                  type="text"
                  value={nameValue}
                  required
                  onChange={this.handleChange}
                />
              </label>{" "}
              <br /> <br />
              <label htmlFor="phone">
                <span  className='lgnspan'> Phone: </span>
                <input
                  className='lgninput'
                  name="phoneValue"
                  id="phone"
                  type="tel"
                  value={phoneValue}
                  required
                  onChange={this.handleChange}
                />
              </label>{" "}
              <br /> <br />
              <label htmlFor="address">
                <span  className='lgnspan'> Check in: </span>
                <input
                  className='lgninput'
                  name="addressValue"
                  id="check in"
                  type="date"
                  value={addressValue}
                  required
                  onChange={this.handleChange}
                />
              </label>{" "}
              <br /> <br />
              <button 
                className={buttonClassName}
                onClick={this.handleClick}
                disabled={!isSubmitActive}
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
          <Footer />
        </div>
      );
    }
  }