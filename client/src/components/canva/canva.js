import React, { Component } from 'react';
import Template from '../templates/template';
import Text from '../sidebar/text'
import Draggable from "react-draggable";
import { Button } from 'react-bootstrap';
import { Rnd } from 'react-rnd'
class Canva extends Component {
    state = {
        edit: false,
        // diffx: 0,
        // diffy: 0,
        // dragging: false,
        // styles: {},
        x: '',
        y: '',
        width: '',
        height: '',
        style: '',
        color: '',
        activeDrags: 0,
        deltaPosition: {
            x: 0, y: 0
        }
    }


    // Editing text
    //////////////////////////////
    handleDrag = (e, ui) => {
        const { x, y } = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };

    editMode = () => {
        this.setState({
            edit: !this.state.edit
        })
    }
    cancelEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    okEdit = () => {
        this.setState({
            edit: false,

        })
    }
    renderEditView = () => {
        return (<div><input defaultValue={this.props.company}></input>
            <button onClick={this.cancelEdit}>X</button>
            <button onClick={this.okEdit}>ok</button></div>)
    }
    renderDefaulView = () => {
        return <p onDoubleClick={this.editMode} style={{ fontFamily: this.props.changeFont, color: 'black' }}>{this.props.company}</p>
    }
    changeBackColor = (e) => {
        var a = e.target.value;

        console.log(a)

    }
    emailSelect = () => {
        this.setState({
            edit: !this.state.edit
        })

    }
    SeletectText = (e) => {
        console.log(e);
        this.setState({
            color: e
        })
    }

    toggleDraggable = () =>
        this.setState(prevState => ({ disabled: !this.state.disabled }));

    render() {
        const style = {

        }
        const { disabled } = this.state;
        return (
            <div className="canva-board">
                <Text selected={this.SeletectText} />
                <Rnd
                    ref={c => { this.rnd = c; }}
                    initial={{
                        x: window.innerWidth / 2 - 200,
                        y: window.innerHeight / 2 - 80,
                        width: 400,
                        height: 160,
                    }}
                    style={style}
                    minWidth={300}
                    minHeight={160}
                    maxWidth={800}
                    maxHeight={300}
                    bounds={'parent'}
                >
                    <span className="box">
                        resize and drag me!!
  </span>
                </Rnd>


                <div>x: {this.state.deltaPosition.x.toFixed(0)}, y: {this.state.deltaPosition.y.toFixed(0)}</div>
                <div className="container" style={{ width: '500px', backgroundColor: this.props.changeBack, height: '250px', border: '1px solid black', position: 'absolute', margin: '200px' }}>
                    {this.state.edit ? <Draggable bounds="parent" onDrag={this.handleDrag}  >
                        <div style={{ width: 150 }}>
                            <p style={{ fontFamily: this.props.changeFont, fontSize: this.props.changeFsize, color: this.state.color }} onDoubleClick={this.emailSelect}>{this.props.email}</p>
                        </div>
                    </Draggable> : <Draggable bounds="parent" onDrag={this.handleDrag}  >
                            <div style={{ width: 150 }}>
                                <p style={{ fontFamily: this.props.changeFont, fontSize: this.props.changeFsize, color: 'black' }} onDoubleClick={this.emailSelect}>{this.props.email}</p>
                            </div>
                        </Draggable>}
                    {/* 
                    <Draggable bounds="parent" onDrag={this.handleDrag}  >
                        <div style={{ width: 150 }}>
                            <p style={{ fontFamily: this.props.changeFont, color: 'black' }} onDoubleClick={this.emailSelect}>{this.props.email}</p>
                        </div>
                    </Draggable> */}
                    {this.state.edit ? <Draggable bounds="parent" onDrag={this.handleDrag}  >
                        <div style={{ width: 150, position: 'relative' }}>
                            <p style={{ fontFamily: this.props.changeFont, color: this.state.color }} onDoubleClick={this.emailSelect}>{this.props.text1}</p>
                        </div>
                    </Draggable> : <Draggable bounds="parent" onDrag={this.handleDrag}  >
                            <div style={{ width: 150, position: 'relative' }}>
                                <p style={{ fontFamily: this.props.changeFont, color: 'black' }} onDoubleClick={this.emailSelect}>{this.props.text1}</p>
                            </div>
                        </Draggable>}
                    <Draggable bounds="parent" onDrag={this.handleDrag}  >
                        <div style={{ width: 150, position: 'relative' }}>
                            <p style={{ fontFamily: this.props.changeFont, color: 'black' }} onDoubleClick={this.emailSelect}>{this.props.text2}</p>
                        </div>
                    </Draggable>
                    <Draggable bounds="parent" onDrag={this.handleDrag}  >
                        <div style={{ width: 150, position: 'relative' }}>
                            <p style={{ fontFamily: this.props.changeFont, color: 'black' }} onDoubleClick={this.emailSelect}>{this.props.text3}</p>
                        </div>
                    </Draggable>
                    <Draggable bounds="parent" onDrag={this.handleDrag}  >
                        <div style={{ width: 150, position: 'relative' }}>
                            <p style={{ fontFamily: this.props.changeFont, color: 'black' }} onDoubleClick={this.emailSelect}>{this.props.text4}</p>
                        </div>
                    </Draggable>
                    <Draggable bounds="parent" onDrag={this.handleDrag}  >
                        <div style={{ width: 150, position: 'relative' }}>
                            <p style={{ fontFamily: this.props.changeFont, color: 'black' }} onDoubleClick={this.emailSelect}>{this.props.text5}</p>
                        </div>
                    </Draggable>
                    <Draggable bounds="parent" onDrag={this.handleDrag}  >
                        <div style={{ width: 150, position: 'relative' }}>
                            <p style={{ fontFamily: this.props.changeFont, color: 'black' }} onDoubleClick={this.emailSelect}>{this.props.text6}</p>
                        </div>
                    </Draggable>




                </div>

                {/* {this.state.styles.left} {this.state.styles.top} */}


                {/* <div id="canBoard" style={{
                    backgroundColor: this.props.changeBack,
                }}>
                    <h3 style={{ fontFamily: this.props.changeFont }}>Font family</h3>
                    <div className='information' style={this.state.styles} onMouseDown={this.dragStart} onMouseMove={this.dragging} onMouseUp={this.dragEnd}>

                        {this.state.edit ? this.renderEditView() : this.renderDefaulView()}

                        <p style={{ fontFamily: this.props.changeFont }}>{this.props.number}</p>
                        <p style={{ fontFamily: this.props.changeFont }}>{this.props.address}</p>
                        <p style={{ fontFamily: this.props.changeFont }}>{this.props.email}</p>

                    </div>

                </div> */}


                {/* <Template /> */}
            </div >
        );
    }
}

export default Canva;