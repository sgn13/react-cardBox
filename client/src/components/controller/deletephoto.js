import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ImageContainer = ({ newImage }) => {
    const [images, setImages] = useState([]);
    const [fallback, setFallback] = useState('');
    const getImages = async () => {
        try {
            const res = await axios.get('api/img');
            if (!res.data.files) {
                setFallback(res.data.msg);
                return;
            } else {
                setImages(res.data.files);
            }
        } catch (err) {
            console.log(err.message);
        }
    }
    useEffect(() => {
        getImages();
    }, [newImage]);

    const handleDelete=(e)=>{
        console.log(e.target.value);
        console.log(images);
        { if (window.confirm('Are you sure you wish to delete this item?')) 
        axios.delete(`/api/img/${e.target.value}`)
        .then(res => {
        window.location.reload();
        console.log(res);
        console.log(res.data);
        }
        )}
    }
    
    

    const configureImage = image => {
        return 'http://localhost:5000/' + image;
    }
    console.log(images);
    return (
        <div className="savedImage container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {images.length > 0 ?
                (
                    images.map((image,i) => (
                        
                            <div>
                                
                            <img src={configureImage(image)} key={images} alt={image} width="30%" className="image" style={{ margin: '10px 0' }}/>
                            <button onClick={handleDelete} value={image}>Delete</button>
                                
                            </div>
                        
                    ))
                )
                :
                <>
                    <h1>
                        {fallback}
                    </h1>
                    <hr />
                    <h3>Upload Image</h3>
                </>
            }
        </div>
    )
}
export default ImageContainer;