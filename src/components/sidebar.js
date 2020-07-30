import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import Canva from './canva/canva'
import Template from './templates/template'
class Sidebar extends Component {

    state = {
        color: '',
        font: '',
        company: 'Company Name',
        phone: '9841653684',
        address: 'kathmandu,Nepal',
        email: 'kathmandujob@gmail.com'
    }
    companyName = (e) => {
        e.preventDefault();
        var cname = e.target.value;
        this.setState({
            company: cname
        })
    }
    phoneNumber = (e) => {
        e.preventDefault();
        var phone = e.target.value;
        this.setState({
            phone: phone
        })
    }
    Address = (e) => {
        e.preventDefault();
        var add = e.target.value;
        this.setState({
            address: add
        })
    }
    Email = (e) => {
        e.preventDefault();
        var email = e.target.value;
        this.setState({
            email: email
        })
    }
    setBackground = (e) => {
        e.preventDefault();
        var value = e.target.value;
        console.log(value);
        this.setState({
            color: value,
        })
    }
    setFont = (e) => {
        e.preventDefault();
        var font = e.target.value;
        this.setState({
            font: font
        })
    }
    pickColor = (e) => {
        e.preventDefault();
        var pick = e.getAttribute('data-color');
        console.log(pick);
    }
    render() {
        function openCity(cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active");
            }
            document.getElementById(cityName).style.display = "block";
            // evt.currentTarget.className += " active";
        }
        return (
            <div>
                <div className="sidebar">
                    <Link className="tablinks" id="defaultOpen" onClick={() => openCity('templates')} to="#">Templates</Link>
                    <Link className="tablinks" onClick={() => openCity('background')} to="#">Background</Link>
                    <Link className="tablinks" onClick={() => openCity('text')} to="#">Text</Link>
                    <Link className="tablinks" onClick={() => openCity('shapes')} to="#">Shapes</Link>
                </div>

                <div id="templates" className="tabcontent" style={{ display: "block" }}>
                    <h3>Templates</h3>
                    <p>Help me ?</p><Template changeBack={this.state.color} changeBack={this.state.color} company={this.state.company} number={this.state.phone} address={this.state.address} email={this.state.email} />

                </div>
                <div id="background" className="tabcontent" style={{ display: "none" }}>
                    <h3>Background</h3>
                    <p>Help me ?</p>
                    <div>
                        <select onChange={this.setBackground} id="color-selector">
                            <option value="none">None</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="silver">Silver</option>
                            <option value="yellow">yellow</option>
                            <option value="azure">Azure</option>
                            <option value="blueviolet">Blue Violet</option>
                            <option value="seagreen">Seagreen</option>
                            <option value="burlywood">Burlywood</option>
                            <option value="aquamarine">Aquamarine</option>

                        </select>
                        <div className="color-grid">
                            <div className="color-picker red" onClick={this.pickColor} data-color="red"></div>
                            <div className="color-picker blue" onClick={this.pickColor} data-color="blue"></div>
                            <div className="color-picker orange" onClick={this.pickColor} data-color="orange"></div>
                            <div className="color-picker yellow" onClick={this.pickColor} data-color="yellow"></div>
                            <div className="color-picker purple" onClick={this.pickColor} data-color="purple"></div>
                            <div className="color-picker aliceblue" onClick={this.pickColor} data-color="aliceblue"></div>
                            <div className="color-picker orangered" onClick={this.pickColor} data-color="orangered"></div>
                            <div className="color-picker brown" onClick={this.pickColor} data-color="brown"></div>
                            <div className="color-picker black" onClick={this.pickColor} data-color="black"></div>
                            <div className="color-picker white" onClick={this.pickColor} data-color="white"></div>
                        </div>
                    </div>
                </div>
                <div id="text" className="tabcontent" style={{ display: "none" }}>
                    <h3>Text</h3>
                    <h3>Select Fonts</h3>
                    <select onChange={this.setFont} id="font-selector">
                        <option value="none">None</option>
                        <option value="sans-serif">Sans-serif</option>
                        <option value="Arial">Arial</option>
                        <option value="courier">Courier</option>
                        <option value="cursive">Cursive</option>
                        <option value="Bebas Neue">Bebas Neue</option>
                        <option value="monospace">Monospace</option>
                        <option value="times">Times</option>
                        <option value="Roboto">Roboto</option>
                        <option value="Dancing Script">Dancing Script</option>
                        <option value="roboto">Roboto</option>
                        <option value="Lobster">Lobster</option>
                        <option value="Rowdies">Rowdies</option>
                        <option value="Teko">Teko</option>





                    </select>
                    <input type='text' placeholder="Company name" onChange={this.companyName}></input>
                    <input type='number' placeholder="Phone number" onChange={this.phoneNumber}></input>
                    <input type='text' placeholder="Address" onChange={this.Address}></input>
                    <input type='email' placeholder="Email" onChange={this.Email}></input>
                </div>
                <div id="shapes" className="tabcontent" style={{ display: "none" }}>

                    <h3>Shapes</h3>
                    <p>Choose your shapes</p>
                </div>
                <Canva changeFont={this.state.font} changeBack={this.state.color} company={this.state.company} number={this.state.phone} address={this.state.address} email={this.state.email} />
            </div>
        );
    }
}

export default Sidebar;
