import React from 'react';


function Sidebar() {

    return (
        <div>
            <div className="sidebar">
                <a className="tablinks" id="defaultOpen" onclick="openCity(event, 'templates')" href="#">Templates</a>
                <a className="tablinks" onclick="openCity(event, 'background')" href="#">Background</a>
                <a className="tablinks" onclick="openCity(event, 'text')" href="#">Text</a>
                <a className="tablinks" onclick="openCity(event, 'shapes')" href="#">Shapes</a>
            </div>

            <div id="templates" className="tabcontent">
                <h3>Templates</h3>
                <p>Help me ?</p>
            </div>
            <div id="background" className="tabcontent">
                <h3>Background</h3>
                <p>Help me ?</p>
                <div>
                    <select onchange="setBackground()" id="color-selector">
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
                        <div className="color-picker red" data-color="red"></div>
                        <div className="color-picker blue" data-color="blue"></div>
                        <div className="color-picker orange" data-color="orange"></div>
                        <div className="color-picker yellow" data-color="yellow"></div>
                        <div className="color-picker purple" data-color="purple"></div>
                        <div className="color-picker aliceblue" data-color="aliceblue"></div>
                        <div className="color-picker orangered" data-color="orangered"></div>
                        <div className="color-picker brown" data-color="brown"></div>
                        <div className="color-picker black" data-color="black"></div>
                        <div className="color-picker white" data-color="white"></div>
                    </div>
                </div>
            </div>
            <div id="text" className="tabcontent">
                <h3>Text</h3>
                <p>Add your text</p>
            </div>

            <div id="shapes" className="tabcontent">
                <h3>Shapes</h3>
                <p>Choose your shapes</p>
            </div>
        </div>

    );
}
export default Sidebar;