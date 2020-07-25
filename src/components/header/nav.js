import React, { Component } from 'react';
import Sidebar from '../sidebar';

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
                                    <a href="#" className="scroll-link">home</a>
                                </li>
                                <li>
                                    <a href="#" className="scroll-link">Design templates</a>
                                </li>
                                <li>
                                    <a href="#" className="scroll-link">Gallery</a>
                                </li>
                                <li>
                                    <a href="#" className="scroll-link">Help</a>
                                </li>
                            </ul>
                        </div>
                        <div className="social">
                            <button> Login</button>
                            <button>Sign up</button>
                        </div>
                    </div>
                </nav>

            </header>

            <Sidebar />

            {/* <!-- cava board  -->
    <!-- ----------------------- -->
    <!-- ------------------------------ --> */}

            <div className="canva-board">
                <div id="canBoard"></div>
            </div>


        </div>
    );
}

export default Nav;