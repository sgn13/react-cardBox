import React, { useState, useEffect, useRef, Component } from 'react';
import { exportComponentAsJPEG, exportComponentAsPNG } from "react-component-export-image";
import ReactToPrint from 'react-to-print';
import axios from 'axios';
import Draggable from "react-draggable";


    const CanvaNew = React.forwardRef((props, ref) => {
    const [select, setSelect] = useState(true)
    const [company, setCompany] = useState(props)
    // console.log(company)
    const [number, setNumber] = useState({ props, select: false })
    const [email, setEmail] = useState(props)
    const [img, setImg] = useState('')
    const [backg, setBackg] = useState(props.backImage)

    const textSelect = () => {
        setSelect(!select)

    }
    console.log(props)
    const handleImageUpload = (e) => {
        console.log(e.target.files[0])
        setImg(e.target.files[0])
    }

    useEffect(() => {
        setCompany(props);
    }, [props]);

    useEffect(() => {
        setNumber(props);
    }, [props]);
    useEffect(() => {
        setEmail(props);
    }, [props]);

    
    const myCan = document.getElementById('can');
    const download = document.getElementById('down');
    const downLoads = () => {
        if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(myCan.msToBlob(), "canva.png")
        }
    }

  

    return (
        <div className="canva-board" >
            <input type="file" onChange={handleImageUpload}></input>

            <div ref={ref} id="can" style={{ width: '650px', backgroundColor: props.changeBack, height: '350px', border: '1px solid black', position: 'absolute', margin: '200px' }}>
                <div>
                    <h1>{props.item}</h1>
                </div>
                <div>
                    {
                        props.items && props.items.map(item => {
                            return (
                                <h2>{item.title}</h2>
                            )
                        })
                    }
                </div>

                <Draggable bounds="parent" >


                    <div style={{ width: 250, position: 'relative' }}>
                        {img && <img src={URL.createObjectURL(img)} style={{ width: '80px', height: '100px' }}></img>}
                    </div>

                </Draggable>
                {/* {select ? */}
                <Draggable bounds="parent"  >
                    <div style={{ width: 250, position: 'relative' }}>

                        <p style={{ fontFamily: props.changeFont, color: company.selectedColor, }} onClick={textSelect} >{props.company}   </p>
                    </div>
                </Draggable>
                {/* : <p style={{ opacity: 0.5 }} onClick={textSelect}>{props.company}</p>} */}


                <Draggable bounds="parent" grid={[100, 100]}  >
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
            </div>


        </div>
    )
}
);

const MyComponent = (props) => {
    const componentRef = useRef();
    return (
        <React.Fragment>
            <CanvaNew {...props} ref={componentRef} />
            <button onClick={() => exportComponentAsJPEG(componentRef)} className="btn-download">
                Export As JPEG
        </button>

            <button onClick={() => exportComponentAsPNG(componentRef)} className="btn-download">
                Export As PNG
        </button>
        <button onClick={() =>{
                 const config = {
                    headers: {
                        'content-type': 'image/png'
                    }
                };

                axios.post("/api/img",componentRef,config)
                .then((response) => {
                alert("The file is successfully uploaded");
                }).catch((error) => {
        });}} > 
                Save
        </button>
        </React.Fragment>);
}



// const Example = (props) => {
//     const componentRef = useRef();

//     return (
//         <div>
//             <ReactToPrint
//                 trigger={() => <button className="btn-download"> Download</button>}
//                 content={() => componentRef.current}
//             />
//             <CanvaNew {...props} ref={componentRef} />
//         </div>
//     );
// };

// export default Example
// export default CanvaNew;





export default MyComponent;