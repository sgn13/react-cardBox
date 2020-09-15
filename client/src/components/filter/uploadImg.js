import React, { Component } from 'react';
import { Form } from 'react-bootstrap'
import { storage } from '../../components/firebase/firebaseConfig'

class UploadImage extends Component {

    state = {
        filterURL: ''
    }

    handleImageUpload = (e) => {
        if (e.target.files[0]) {
            const image = (e.target.files[0]);
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on("state_changed",
                (snapshot) => {
                    console.log(snapshot);
                },
                (error) => {
                    console.log(error)
                },
                () => {
                    storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        this.setState({ filterURL: url });
                        this.props.storeURL(url)
                    })
                }
            )
        }
    }

    render() {
        const url = this.state.filterURL;


        return (
            <div>
                {/* <input type="file" id="upload-file"></input>
                <label for="upload-file">Browse</label> */}
                <Form>
                    <Form.File
                        id="custom-file"
                        label="Choose image"
                        custom
                        onChange={this.handleImageUpload}
                    />
                </Form>
            </div>
        );
    }
}

export default UploadImage;