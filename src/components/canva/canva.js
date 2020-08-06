import React, { Component } from 'react';
import Template from '../templates/template';
import Draggable from "react-draggable";
class Canva extends Component {
    state = {
        edit: false,
        // diffx: 0,
        // diffy: 0,
        // dragging: false,
        styles: {},
        disabled: false,
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


    // Draggable////////////////////
    ////////////////////////////////
    // dragStart = (e) => {
    //     this.setState({
    //         diffx: e.screenX - e.currentTarget.getBoundingClientRect().left,
    //         diffy: e.screenY - e.currentTarget.getBoundingClientRect().top,
    //         dragging: true

    //     });
    // }

    // dragging = (e) => {
    //     if (this.state.dragging) {
    //         var left = e.screenX - this.state.diffx;
    //         var top = e.screenY - this.state.diffy;
    //         this.setState({
    //             styles: {
    //                 left: left,
    //                 top: top
    //             }
    //         });
    //         console.log(this.state.styles)
    //     }


    // }

    // dragEnd = (e) => {
    //     this.setState({
    //         dragging: false
    //     })
    // }
    toggleDraggable = () =>
        this.setState(prevState => ({ disabled: !this.state.disabled }));

    render() {
        const { disabled } = this.state;
        return (
            <div className="canva-board">
                <div>x: {this.state.deltaPosition.x.toFixed(0)}, y: {this.state.deltaPosition.y.toFixed(0)}</div>
                <div className="container" style={{ width: '500px', backgroundColor: this.props.changeBack, height: '250px', border: '1px solid black', position: 'relative', margin: '200px' }}>
                    <div className='tem1' onClick={this.changeBackColor}>

                    </div>
                    <Draggable disabled={disabled} bounds="parent" onDrag={this.handleEvent}
                        onStart={this.handleEvent}
                        onStop={this.handleEvent}
                        onMouseDown={this.handleEvent}
                        onMouseUp={this.handleEvent}
                        onTouchStart={this.handleEvent}
                        onTouchEnd={this.handleEvent}
                        onDrag={this.handleDrag}>
                        <div
                            style={{ width: 150 }}
                            className={!disabled ? "draggable" : null}
                        >
                            {/* <h4 style={{ height: 20, userSelect: "none" }}>
                                {!disabled && "Drag Me"}
                            </h4> */}
                            {this.state.edit ? this.renderEditView() : this.renderDefaulView()}
                            {/* <p style={{ fontFamily: this.props.changeFont, color: 'black' }}>{this.props.number}</p> */}
                            {/* <p style={{ fontFamily: this.props.changeFont, color: 'black' }}>{this.props.address}</p>
                            <p style={{ fontFamily: this.props.changeFont, color: 'black' }}>{this.props.email}</p> */}

                            {/* <button
                                className="uk-button uk-button-primary"
                                onClick={this.toggleDraggable}
                            >
                                {disabled ? "Enable" : "Disable"} Drag
                            </button> */}
                        </div>
                    </Draggable>
                    <Draggable disabled={disabled} bounds="parent" onDrag={this.handleEvent}
                        onStart={this.handleEvent}
                        onStop={this.handleEvent}
                        onMouseDown={this.handleEvent}
                        onMouseUp={this.handleEvent}
                        onTouchStart={this.handleEvent}
                        onTouchEnd={this.handleEvent}
                        onDrag={this.handleDrag}>
                        <div
                            style={{ width: 150 }}
                            className={!disabled ? "draggable" : null}
                        >


                            <p style={{ fontFamily: this.props.changeFont, fontStyle: this.props.cBold, color: 'black' }}>{this.props.number}</p>
                            {/* <p style={{ fontFamily: this.props.changeFont, color: 'black' }}>{this.props.address}</p>
                            <p style={{ fontFamily: this.props.changeFont, color: 'black' }}>{this.props.email}</p> */}


                        </div>
                    </Draggable>
                    <Draggable disabled={disabled} bounds="parent" onDrag={this.handleEvent}
                        onStart={this.handleEvent}
                        onStop={this.handleEvent}
                        onMouseDown={this.handleEvent}
                        onMouseUp={this.handleEvent}
                        onTouchStart={this.handleEvent}
                        onTouchEnd={this.handleEvent}
                        onDrag={this.handleDrag}>
                        <div
                            style={{ width: 150 }}
                            className={!disabled ? "draggable" : null}
                        >


                            {/* <p style={{ fontFamily: this.props.changeFont, color: 'black' }}>{this.props.number}</p> */}
                            <p style={{ fontFamily: this.props.changeFont, fontWeight: this.props.cBold, color: 'black' }}>{this.props.address}</p>
                            {/* <p style={{ fontFamily: this.props.changeFont, color: 'black' }}>{this.props.email}</p> */}


                        </div>
                    </Draggable>
                    <Draggable disabled={disabled} bounds="parent" onDrag={this.handleEvent}
                        onStart={this.handleEvent}
                        onStop={this.handleEvent}
                        onMouseDown={this.handleEvent}
                        onMouseUp={this.handleEvent}
                        onTouchStart={this.handleEvent}
                        onTouchEnd={this.handleEvent}
                        onDrag={this.handleDrag}>
                        <div
                            style={{ width: 150 }}
                            className={!disabled ? "draggable" : null}
                        >


                            {/* <p style={{ fontFamily: this.props.changeFont, color: 'black' }}>{this.props.number}</p> */}
                            {/* <p style={{ fontFamily: this.props.changeFont, color: 'black' }}>{this.props.address}</p>*/}
                            <p style={{ fontFamily: this.props.changeFont, fontSize: this.props.changeFsize, color: 'black' }}>{this.props.email}</p>


                        </div>
                    </Draggable>


                </div>

                {this.state.styles.left} {this.state.styles.top}


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