import React, { Component } from 'react';
import Nav from './header/nav';
import '../css/home.css';
import { Link, NavLink } from "react-router-dom";
class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <div class="banner">
                    <div class="container">
                        <h1>Card Box</h1>
                        <p>
                            Easily customize greeting cards for every event. Print or send as eCard for free!
                        </p>
                        <NavLink to="/design" class="scroll-link btn btn-white">Design your card</NavLink>
                    </div>
                </div>
                <div class="card">
                    <div class="business">
                        <img src={require("../image/business-card.jpg")} alt="" />
                        <h4>business-card</h4>
                    </div>
                    <div class="bannner">
                        <img src={require("../image/banner.jpg")} alt="" />
                        <h4>Banner-design</h4>
                    </div>
                    <div class="filter">
                        <img src={require("../image/filter.jpg")} alt="" />
                        <h4>Filter pictures</h4>
                    </div>
                </div>


            </div>);
    }
}

export default Home;