import React, { Component } from 'react';
class Canva extends Component {
    state = {}
    render() {
        return (
            <div className="canva-board">
                <div id="canBoard" style={{
                    backgroundColor: this.props.changeBack,
                }}>
                    <h3 style={{ fontFamily: this.props.changeFont }}>Font family</h3>
                    {this.props.company}<br></br>
                    {this.props.number}<br></br>
                    {this.props.address}<br></br>
                    {this.props.email}

                </div>
            </div>);
    }
}

export default Canva;