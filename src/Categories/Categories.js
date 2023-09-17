import React, { Component } from 'react';
import "./Categories.css";
import catImg1 from "../Assets/images/hotel outer.jpeg";
import catImg2 from "../Assets/images/hotel room.jpeg";
import catImg3 from "../Assets/images/hotel reservation2.jpeg";
import catImg4 from "../Assets/images/hotel-reservation.webp";

export default class Categories extends Component {
    state = {
        categories: [
            {
                img: catImg1,
                categoryName: "Home"
            },
            {
                img: catImg2,
                categoryName: "Rooms"
            },
            {
                img: catImg3,
                categoryName: "About"
            },
            {
                img: catImg4,
                categoryName: "Reservation"
            }
        ]
    }
    render() {
        let {categories} = this.state;
        return (

            <div className="categories-div">
                {
                    categories.map((item) => {
                        return (
                            <div className="category">
                                <img src={item.img} alt="home" className="category-img" />
                                <span className="category-span">{item.categoryName}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}