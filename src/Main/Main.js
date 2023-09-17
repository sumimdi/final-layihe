import React, { Component } from 'react';
import "./Main.css";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ComponentsDiv from "../ComponentsDiv/ComponentsDiv";
import Categories from "../Categories/Categories";
import Pros from "../Pros/Pros";


export default class Main extends Component {
    render() {
        return (
            <div className="main">

                <Header />

                <section>
                    <div>
                        <h2>WELCOME TO 5 STAR HOTEL</h2>
                    </div>
                    <div className="paragraph">
                        <p className="paragraphh">A Best Place To Stay</p>
                    </div>
                    <div className="searchbar">
                        <input className="input-search" type='text' placeholder='Search is here'></input>
                        <button className="search-button" style={{marginLeft:10}}>SEARCH</button>
                    </div>

                    <Categories />

                    <h2> ~ ROOMS ~</h2>

                    <ComponentsDiv />

                    <Pros />
                </section>


                <Footer />
            </div>
        )
    }

}
