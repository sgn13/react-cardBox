import React, { useState, useEffect, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';

import Draggable from "react-draggable";

function CanvaNew(props) {
    const [select, setSelect] = useState(true)
    const [company, setCompany] = useState(props)
    // console.log(company)
    const [number, setNumber] = useState({ props, select: false })
    const [email, setEmail] = useState(props)

    const textSelect = () => {
        setSelect(!select)

    }
    console.log(select)



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
                {select ?
                    <Draggable bounds="parent"  >
                        <div style={{ width: 250, position: 'relative' }}>

                            <p style={{ fontFamily: props.changeFont, color: company.selectedColor, }} onClick={textSelect} >{props.company}   </p>
                        </div>
                    </Draggable> : <p style={{ opacity: 0.5 }} onClick={textSelect}>{props.company}</p>}


                <Draggable bounds="parent"  >
                    <div style={{ width: 150, position: 'relative' }}>
                        <p style={{ fontFamily: props.changeFont, fontSize: props.changeFsize, color: number.selectedColor }}  >{props.number}</p>
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
                dfnkdfg
            </div>
        </div>



    )
}



// function Example() {
//     const componentRef = useRef();
//     const handlePrint = useReactToPrint({
//         content: () => componentRef.current,
//     });

//     return (
//         <div>
//             <CanvaNew ref={componentRef} />
//             <button onClick={handlePrint}>Print this out!</button>
//         </div>
//     );
// };




export default CanvaNew;