import React, { Component } from 'react';
import { VIDEOS } from '../shared/video';
import ReactPlayer from 'react-player';


class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: VIDEOS
        };

    }

    render() {
        return (
            <div class="container-fluid" style={{backgroundColor: "rgb(211, 128, 4)"}}>

                <div className="row row-content align-items-center" key={this.state.videos[0].id}>
                    <div className="col-md-6 img-thumbnail" >
                        <ReactPlayer width='100%' height='100%' controls url={this.state.videos[0].film} type="video/M4V"  />
                    </div>
                    <div className="col media-body">
                        <h4>{this.state.videos[0].caption}</h4>
                        <h5>{this.state.videos[0].title}</h5>
                    </div> 
                </div>

                <div className="row row-content align-items-center" key={this.state.videos[1].id}>
                    <div className="col-md-6 order-md-last img-thumbnail" >
                        <ReactPlayer width='100%' height='100%' controls url={this.state.videos[1].film} type="video/M4V"  />
                    </div>
                    <div className="col media-body">
                        <h4>{this.state.videos[1].caption}</h4>
                        <h5>{this.state.videos[1].title}</h5>
                    </div> 
                </div>

                <div className="row row-content align-items-center" key={this.state.videos[2].id}>
                    <div className="col-md-6 img-thumbnail" >
                        <ReactPlayer width='100%' height='100%' controls url={this.state.videos[2].film} type="video/M4V"  />
                    </div>
                    <div className="col media-body">
                        <h4>{this.state.videos[2].caption}</h4>
                        <h5>{this.state.videos[2].title}</h5>
                    </div> 
                </div>

            </div>
        )
    };
}



export default Video;