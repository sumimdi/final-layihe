import React, { Component } from 'react';
import "./Product.css";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ComponentsDiv from "../ComponentsDiv/ComponentsDiv";
import Pros from "../Pros/Pros";
import contactImg from "../Assets/Imgs/contact-img.svg";
import compImg12 from "../Assets/images/Presidential_Suite_.jpg";
import contact from "../Assets/Icons/phone-call 1.svg";




export default class Product extends Component {
    render() {
        return (
            <div className="main">

                <Header />

                <section>
                    <div className="searchbar">
                        <input className="input-search" type='text' placeholder='Search is here'></input>
                        <button className="search-button" style={{ marginLeft: 10 }}>SEARCH</button>
                    </div>
                    <div className='product'>

                        <p className="product-name-tel">Presidential Suite</p>
                        <div className="product-header-div">
                            <div className="product-contact">
                                <img className="product-contact-img" src={contactImg} alt="contact" />
                                <div className="product-contact-info">
                                </div>
                            </div>
                            <div className="product-contacts">
                                <img className="product-contact-icon" src={contact} alt="" />
                                <div className="product-contact-info">
                                    <span>Phone</span>
                                    <span>094 494 94 94</span>
                                </div>
                            </div>
                        </div>
                        <div className="product-body-div">
                            <img className="product-img" src={compImg12} alt="" />
                            <div className="product-info-card">
                                <span className="product-price"> 400$ </span>
                                <div className="product-details">
                                    <div className="product-details-part">
                                        <span className="query">City</span>
                                        <span className="ans">Baku</span>
                                    </div>
                                    <div className="product-details-part">
                                        {/* <span className="query">Brend</span>
                                        <span className="ans">Samsung</span> */}
                                    </div>
                                    <div className="product-details-part">
                                        {/* <span className="query">Color</span>
                                        <span className="ans">Awesome Blue</span> */}
                                    </div>
                                    <div className="product-details-part">
                                        {/* <span className="query">Memory</span>
                                        <span className="ans">128GB</span> */}
                                    </div>
                                    <div className="product-details-part">
                                        {/* <span className="query">Delivery</span>
                                        <span className="ans">Free Shipping</span> */}
                                    </div>


                                </div>
                                {/* <span className="ads-number"> Number: 2548941 </span> */}
                            </div>

                        </div>
                        <div className="product-add-info">
                            <p className="product-add-info">
                            <br /><br />
                                There is no luxury hotel without Presidential suite in the accommodation list. <br /><br />
                                A suite for presidents, owners of companies, hedge fund managers, <br /><br />
                                A-list celebrities or anyone how can afford it to pay the highest price for a suite.<br /><br />

                                Presidential suite is the most luxurious accommodation type in the list of suites. <br /><br />
                                In some countries, the highest category suites are called Royal Suites. <br /><br />
                                Presidential suites are offer elegant, stylish and super luxurious interior <br /><br />
                                in the best location of the hotel related to view and privacy together. <br /> <br />
                                This suite always the biggest and most spacious; in some hotels presidential suite occupies a complete floor.</p>
                            <p>
                            <br /> <br />📍Location: 28 May, Bank of Baku ilə üz bə üz. <br />
                                Əlavə məlumat üçün WhatsAppa yaza bilərsiniz.
                            </p>
                        </div>


                    </div>

                    <ComponentsDiv />

                    <Pros />
                </section>


                <Footer />
            </div>
        )
    }

}
