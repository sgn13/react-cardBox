import React, { Component } from 'react';
import Sidebar from '../sidebar';
import { Link, NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';


function Nav() {
    return (

        <div>
            <header id="home">
                {/* <!-- navbar --> */}
                <nav id="nav">
                    <div className="nav-center">
                        {/* <!-- nav header --> */}
                        <div className="nav-header">
                            <h3 className="cardlogo">Card<span>Box</span></h3>
                            <button className="nav-toggle">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                        {/* <!-- links --> */}
                        <div className="links-container">
                            <ul className="links">
                                <li>
                                    <NavLink to="/" className="scroll-link">home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/design" className="scroll-link">Design templates</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/gallery" className="scroll-link">Gallery</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/help" className="scroll-link">Help</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="social">
                            <Button variant="outline-secondary" className="mr-sm-4"><NavLink to='/login'>Login</NavLink></Button>
                            <Button variant="outline-secondary" className="mr-sm-4"><NavLink to='/signin'>Sign Up</NavLink></Button>

                        </div>
                    </div>
                </nav>

            </header>

            {/* <Sidebar /> */}

            {/* <!-- cava board  -->
    <!-- ----------------------- -->
    <!-- ------------------------------ --> */}

        </div>
    );
}

export default Nav;