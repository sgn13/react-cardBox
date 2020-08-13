import React, { Component } from 'react';
import Canva from '../canva/canva'
class Text extends Component {
    state = {
        color: ''
    }
    pickColor = (e) => {
        e.preventDefault();
        var pick = e.target.id;
        this.setState({
            color: pick
        })
        this.props.selected(pick);
    }

    render() {

        return (<div>
            <div className="text-color-grid">
                <div className="text-color-picker red" onClick={this.pickColor} id="red"></div>
                <div className="text-color-picker blue" onClick={this.pickColor} id="blue"></div>
                <div className="text-color-picker orange" onClick={this.pickColor} id="orange"></div>
                <div className="text-color-picker yellow" onClick={this.pickColor} id="yellow"></div>
                <div className="text-color-picker purple" onClick={this.pickColor} id="purple"></div>
                <div className="text-color-picker aliceblue" onClick={this.pickColor} id="aliceblue"></div>
                <div className="text-color-picker orangered" onClick={this.pickColor} id="orangered"></div>
                <div className="text-color-picker brown" onClick={this.pickColor} id="brown"></div>
                <div className="text-color-picker black" onClick={this.pickColor} id="black"></div>
                <div className="text-color-picker white" onClick={this.pickColor} id="white"></div>
            </div>
            {/* <Canva /> */}
        </div>);
    }
}

export default Text;