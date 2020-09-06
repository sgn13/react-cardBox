import React, { useState, useEffect } from 'react';

import Draggable from "react-draggable";




// Editing text
//////////////////////////////
// fontsize = (e) => {
//     this.setState({
//         fsize: e.target.value
//     })
//     console.log(e.target.value)
// }
// handleDrag = (e, ui) => {
//     const { x, y } = this.state.deltaPosition;
//     this.setState({
//         deltaPosition: {
//             x: x + ui.deltaX,
//             y: y + ui.deltaY,
//         }
//     });
// };

// editMode = () => {
//     this.setState({
//         edit: !this.state.edit
//     })
// }
// cancelEdit = () => {
//     this.setState({
//         edit: !this.state.edit
//     })
// }

// okEdit = () => {
//     this.setState({
//         edit: false,

//     })
// }
// renderEditView = () => {
//     return (<div><input defaultValue={this.props.company}></input>
//         <button onClick={this.cancelEdit}>X</button>
//         <button onClick={this.okEdit}>ok</button></div>)
// }
// renderDefaulView = () => {
//     return <p onDoubleClick={this.editMode} style={{ fontFamily: this.props.changeFont, color: 'black' }}>{this.props.company}</p>
// }
// changeBackColor = (e) => {
//     var a = e.target.value;

//     console.log(a)

// }
// emailSelect = () => {
//     this.setState({
//         edit: !this.state.edit
//     })

// }
// companySelect = () => {
//     this.setState({
//         editCompany: !this.state.editCompany
//     })
// }
// SeletectText = (e) => {
//     console.log(e);
//     this.setState({
//         color: e,
//         colorCompany: e
//     })
// }
// selectFont = (e) => {
//     this.setState({
//         font: e
//     })

// }
// toggleDraggable = () =>
//     this.setState(prevState => ({ disabled: !this.state.disabled }));

// changeShape = () => {
//     this.setState({
//         shape: !this.state.shape
//     })
//     console.log(this.state.shape)

// }

function CanvaNew(props) {
    const [select, isSelected] = useState(true)
    const [company, setCompany] = useState(props)
    console.log(company)
    const [number, setNumber] = useState(props)
    const [email, setEmail] = useState(props)

    useEffect(() => {
        setCompany(props);
    }, [props]);

    useEffect(() => {
        setNumber(props);
    }, [props]);
    useEffect(() => {
        setEmail(props);
    }, [props]);

    return (
        <div className="canva-board">

            <div style={{ width: '500px', backgroundColor: props.changeBack, height: '250px', border: '1px solid black', position: 'absolute', margin: '200px' }}>
                {select ? <Draggable bounds="parent"  >
                    <div style={{ width: 250, position: 'relative' }}>

                        <p style={{ fontFamily: props.changeFont, color: company.selectedColor, }} >{props.company}   </p>
                    </div>
                </Draggable> : null}


                <Draggable bounds="parent"  >
                    <div style={{ width: 150, position: 'relative' }}>
                        <p style={{ fontFamily: props.changeFont, fontSize: props.changeFsize, color: number.selectedColor }} >{props.number}</p>
                    </div>
                </Draggable>

                <Draggable bounds="parent"  >
                    <div style={{ width: 150, position: 'relative' }}>
                        <p style={{ fontFamily: props.changeFont, color: 'black' }} >{props.address}</p>
                    </div>
                </Draggable>

                <Draggable bounds="parent"  >
                    <div style={{ width: 150 }}>
                        <p style={{ fontFamily: props.changeFont, color: 'black', }} >{props.email}</p>
                    </div>
                </Draggable>

                <Draggable bounds="parent"  >
                    <div style={{ width: 150, position: 'relative' }}>
                        <p style={{ fontFamily: props.changeFont, color: 'black' }} >{props.text1}</p>
                    </div>
                </Draggable>

                <Draggable bounds="parent"  >
                    <div style={{ width: 150, position: 'relative' }}>
                        <p style={{ fontFamily: props.changeFont, color: 'black' }} >{props.text2}</p>
                    </div>
                </Draggable>
                <Draggable bounds="parent"  >
                    <div style={{ width: 150, position: 'relative' }}>
                        <p style={{ fontFamily: props.changeFont, color: 'black' }} >{props.text3}</p>
                    </div>
                </Draggable>
                <Draggable bounds="parent"  >
                    <div style={{ width: 150, position: 'relative' }}>
                        <p style={{ fontFamily: props.changeFont, color: 'black' }} >{props.text4}</p>
                    </div>
                </Draggable>
                <Draggable bounds="parent"  >
                    <div style={{ width: 150, position: 'relative' }}>
                        <p style={{ fontFamily: props.changeFont, color: 'black' }} >{props.text5}</p>
                    </div>
                </Draggable>
                <Draggable bounds="parent"  >
                    <div style={{ width: 150, position: 'relative' }}>
                        <p style={{ fontFamily: props.changeFont, color: 'black' }} >{props.text6}</p>
                    </div>
                </Draggable>
            </div>
        </div>



    )
}




export default CanvaNew;