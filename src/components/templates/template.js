import React, { Component } from 'react';
import '../../css/template.css'
class Template extends Component {
    state = {}
    render() {
        return (
            <div className="template_collection" >
                <div className='template1' style={{ backgroundColor: this.props.color }}>
                    <div className='text'>
                        <h4>Your logo</h4>
                    </div>
                    <div className='tem1'>

                    </div>
                    <div className="info">
                        {this.props.company}<br></br>
                        {this.props.number}<br></br>
                        {this.props.address}<br></br>
                        {this.props.email}
                    </div>

                </div>


            </div>
        );
    }
}

export default Template;