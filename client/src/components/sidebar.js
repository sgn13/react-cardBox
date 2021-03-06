import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import Canva from './canva/canva'
import { Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle } from 'react-shapes';
import Text from './sidebar/text'
import { Button } from 'react-bootstrap';
import Template from './templates/template'
import Draggable from "react-draggable";
import { Rnd } from 'react-rnd'

class Sidebar extends Component {

    state = {
        x: '',
        y: '',
        width: '',
        height: '',
        color: '',
        font: '',
        fontsize: '',
        bold: '',
        italic: '',
        underline: '',
        company: 'Company Name',
        phone: '9841653684',
        address: 'kathmandu,Nepal',
        email: 'kathmandujob@gmail.com',
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        text5: '',
        text6: '',
        text7: '',
        styles: {},
        addid: 0,

        disabled: false



    }
    fontSize = (e) => {
        e.preventDefault();
        var fonts = e.target.value;
        this.setState({
            fontsize: fonts
        })
    }
    changeData = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    makeBold = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value

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
        var pick = e.target.id;
        this.setState({
            color: pick
        })
    }

    addText = () => {

        // var x = document.createElement("input");
        // x.setAttribute("type", "text");
        // x.setAttribute("placeholder", "Hello World!");
        // document.body.appendChild(x);
        // var addid = 0;
        var addList = document.getElementById('information');
        var docstyle = addList.style.display;
        if (docstyle == 'none') addList.style.display = '';

        this.state.addid++;
        console.log(this.state.addid);

        var text = document.createElement('input');
        text.id = 'text' + this.state.addid;
        text.onchange = this.changeData;
        text.placeholder = "add text" + this.state.addid;
        // text.innerHTML = "<input type='text' value='' class='buckinput' name='items[]' placeholder='addtexts' onChange={this.changeData} id='text1' style='padding:5px;' /> <a href='javascript:void(0);' onclick='addInput(" + addid + ")' id='addlink_" + addid + "'></a>";

        addList.appendChild(text);
    }
    closeTab = () => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

    }

    showTemplate = () => {
        return (
            <div>Hello</div>
        )

    }


    render() {
        const { disabled } = this.state;

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
                    <Button variant="danger" onClick={this.closeTab} style={{ float: 'right' }}>X</Button>
                    <h3 >Templates</h3>
                    <p>Help me ?</p>
                    <Template onClick={this.showTemplate} changeBack={this.state.color} changeBack={this.state.color} company={this.state.company} number={this.state.phone} address={this.state.address} email={this.state.email} />

                </div>
                <div id="background" className="tabcontent" style={{ display: "none" }}>
                    {/* <button onClick={this.closeTab} style={{ float: 'right' }}>x</button> */}
                    <Button variant="danger" onClick={this.closeTab} style={{ float: 'right' }}>X</Button>
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
                            <div className="color-picker red" onClick={this.pickColor} id="red"></div>
                            <div className="color-picker blue" onClick={this.pickColor} id="blue"></div>
                            <div className="color-picker orange" onClick={this.pickColor} id="orange"></div>
                            <div className="color-picker yellow" onClick={this.pickColor} id="yellow"></div>
                            <div className="color-picker purple" onClick={this.pickColor} id="purple"></div>
                            <div className="color-picker aliceblue" onClick={this.pickColor} id="aliceblue"></div>
                            <div className="color-picker orangered" onClick={this.pickColor} id="orangered"></div>
                            <div className="color-picker brown" onClick={this.pickColor} id="brown"></div>
                            <div className="color-picker black" onClick={this.pickColor} id="black"></div>
                            <div className="color-picker white" onClick={this.pickColor} id="white"></div>
                        </div>
                    </div>
                </div>
                <div id="text" className="tabcontent" style={{ display: "none" }}>
                    <Button variant="danger" onClick={this.closeTab} style={{ float: 'right' }}>X</Button>                    <h3>Text</h3>
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
                    <select onChange={this.fontSize}>
                        <option value="10px">10</option>
                        <option value="14px">14</option>
                        <option value="16px">16</option>
                        <option value="18px">18</option>
                        <option value="20px">20</option>
                        <option value="24px">24</option>
                        <option value="30px">30</option>
                    </select>

                    <Button variant="warning" className=" mr-sm-1" onClick={this.makeBold} id="bold" value="bold">B</Button>
                    <Button variant="warning" className=" mr-sm-1" onClick={this.makeBold} id="italic" value="bold">I</Button>
                    <Button variant="warning" onClick={this.makeBold} id="underline" value="bold">U</Button>
                    {/* <button onClick={this.makeBold} id="italic" value="italic">I</button> */}
                    {/* <button onClick={this.makeBold} id="underline" value="underline">U</button> */}

                    <div id="information" >
                        <span>Company name</span>

                        <input type='text' placeholder="Company name" onChange={this.changeData} id="company"></input><br />
                        <span>Phone</span><br />
                        <input type='text' placeholder="Phone number" onChange={this.changeData} id="phone"></input><br />
                        <span>Address</span><br />
                        <input type='text' placeholder="Address" onChange={this.changeData} id="address"></input><br />
                        <span>Email</span><br />
                        <input type='text' placeholder="Email" onChange={this.changeData} id="email"></input>
                        <br />
                        <br />
                        {/* <button onClick={this.addText}>Add</button> */}
                        <Button variant="success" className=" mb-sm-3" size="sm" onClick={this.addText}>Add text</Button>
                        <br></br>
                    </div>
                </div>
                <div id="shapes" className="tabcontent" style={{ display: "none" }}>
                    <Button variant="danger" onClick={this.closeTab} style={{ float: 'right' }}>X</Button>


                    <h3>Shapes</h3>
                    <p>Choose your shapes</p>
                    <Draggable disabled={disabled} bounds=".canva-board">
                        <div
                            style={{ width: 150 }}
                            className={!disabled ? "draggable" : null}
                        >

                            {/* <Rectangle width={100} height={100} fill={{ color: 'red' }} stroke={{ color: 'black' }} strokeWidth={1} /><br></br> */}
                            <div style={{ height: '50px', width: '50px', zIndex: '999', backgroundColor: 'blue' }}></div>

                        </div>
                    </Draggable>
                    <Rnd
                        size={{ width: this.state.width, height: this.state.height }}
                        position={{ x: this.state.x, y: this.state.y }}
                        onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
                        onResize={(e, direction, ref, delta, position) => {
                            this.setState({
                                width: ref.offsetWidth,
                                height: ref.offsetHeight,
                                ...position,
                            });
                        }}
                    >
                        <div style={{ height: '50px', width: '50px', zIndex: '0', backgroundColor: 'blue' }}></div>


                    </Rnd>

                    <Circle r={50} fill={{ color: 'white' }} stroke={{ color: 'black' }} strokeWidth={1} /><br />
                    {/* <Ellipse rx={30} ry={10} fill={{ color: '#2409ba' }} stroke={{ color: '#E65243' }} strokeWidth={3} />
                    <Polyline points='25,25 25,350 500,350 500,500 305,250 20,15' fill={{ color: '#2409ba' }} stroke={{ color: '#E65243' }} strokeWidth={3} />
                    <CornerBox size={400} width={150} orientation='topLeft' fill={{ color: '#2409ba' }} stroke={{ color: '#E65243' }} strokeWidth={3} /> */}
                    <Triangle width={100} height={100} fill={{ color: 'white' }} stroke={{ color: 'black' }} strokeWidth={1} />

                </div>
                <Canva changeFont={this.state.font} changeFsize={this.state.fontsize} cBold={this.state.bold} changeBack={this.state.color} company={this.state.company} number={this.state.phone} address={this.state.address} email={this.state.email} text1={this.state.text1} text2={this.state.text2} text3={this.state.text3} text4={this.state.text4} text5={this.state.text5} />
                {/* <Text /> */}
            </div>
        );
    }
}

export default Sidebar;
