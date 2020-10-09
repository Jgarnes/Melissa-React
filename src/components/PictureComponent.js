import React, { Component } from 'react';
import { PHOTOS } from '../shared/photos';
import Header from './HeaderComponent';

class Picture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: PHOTOS
        };
    }

    render() {
        const picture = this.state.photos.map(photo => {
            return (
                <div key={photo.id} className="col-md-4">
                    <img src={photo.image} alt ={photo.name} className="pos img-thumbnail" style={{height:"350px"}}/>
                </div>
            )
        })
        return (
            <div style={{backgroundColor: "rgb(211, 128, 4)"}}>
            <div className="container">
                <div className="row">
                    {picture}
                </div>
            </div>
            </div>
        );
    }
}

export default Picture;