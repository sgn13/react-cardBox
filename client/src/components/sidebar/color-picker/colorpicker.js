import React, { useState } from 'react';

import { SketchPicker } from 'react-color';
function ColorPicker() {
    const [color, setcolor] = useState('red')
    const [showPicker, setShowPicker] = useState(false)


    console.log(showPicker)
    return (
        <div >
            <button onClick={() => setShowPicker(showPicker => !showPicker)} className="toggleColor">{showPicker ? "Close color picker" : "Pick color"}</button>
            {showPicker ? <div >
                <SketchPicker
                    color={color}
                    onChangeComplete={(color) => setcolor(color.hex)}
                />
            </div>

                : null
            }

            <div style={{ color: color }} >
                {/* <h1>Hello   </h1> */}
            </div>

        </div >
    );

}
export default ColorPicker;
