import React, { Component } from 'react';
import "./ComponentsDiv.css";
import compImg1 from "../Assets/images/img_1.jpg.webp";
import compImg2 from "../Assets/images/img_2.jpg.webp";
import compImg3 from "../Assets/images/img_3.jpg.webp";
import compImg4 from "../Assets/images/Hotel-Room-Secondary-Market-1000x600.jpg";
import compImg5 from "../Assets/images/RR-Standard-2-Queen.jpg";
import compImg6 from "../Assets/images/Untitled-design-15-2560x1280.jpg";
import compImg7 from "../Assets/images/cq5dam.web.1280.1280.jpeg";
import compImg8 from "../Assets/images/images.jpeg";
import compImg9 from "../Assets/images/250744840.jpg";
import compImg10 from "../Assets/images/Hotel-Rooms-And-Suites_Hero-Video-v02_thumb.webp";
import compImg11 from "../Assets/images/RR-Standard-2-Queen.jpg";
import compImg12 from "../Assets/images/img_1.jpg.webp";
import { Link } from 'react-router-dom';


export default class ComponentsDiv extends Component {
    state = {
        components: [
            {
                img: compImg1,
                componentName: "Junior suite",
                componentPrice: "100$"
            },
            {
                img: compImg2,
                componentName: "deluxe suite",
                componentPrice: "200$"
            },
            {
                img: compImg3,
                componentName: "Executive Suite",
                componentPrice: "300$"
            },
            {
                img: compImg4,
                componentName: "Presidential Suite",
                componentPrice: "400$"
            },
            {
                img: compImg5,
                componentName: "Royal Suite",
                componentPrice: "500$"
            },
            {
                img: compImg6,
                componentName: "Family Room",
                componentPrice: "250$"
            },
            {
                img: compImg7,
                componentName: "Single room",
                componentPrice: "80$"
            },
            {
                img: compImg8,
                componentName: "Royal Suite",
                componentPrice: "500$"
            },
            {
                img: compImg9,
                componentName: "Presidential Suite",
                componentPrice: "400$"
            },
            {
                img: compImg10,
                componentName: "Junior suite",
                componentPrice: "100$"
            },
            {
                img: compImg11,
                componentName: "Executive Suite",
                componentPrice: "300$"
            }, 
            {
                img: compImg12,
                componentName: "Family Room",
                componentPrice: "250$"
            }

        ]
    }
    render() {
        let {components} = this.state;
        return (
            <div className="components-div">

                {
                    components.map((item) => {
                        return (
                            <Link className="complink" to={'/product'} style={{ textDecoration: 'none' }}>
                                <div className="component">
                                    <img src={item.img} alt="home" className="component-img" />
                                    <div className="component-spans">
                                        <span className="price-span">{item.componentPrice} </span>
                                        <span className="component-span"> <b> {item.componentName} </b></span>
                                        <span className="component-span">{item.date}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}