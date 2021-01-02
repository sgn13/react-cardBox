import React, { Component } from 'react';
class ImageF extends Component {
    state = {}
    render() {
        return (
            <div className="main-image" style={this.props.getImageStyle} >

                {this.props.img && <img src={URL.createObjectURL(this.props.img)} ></img>}

            </div>);
    }
}

export default ImageF;