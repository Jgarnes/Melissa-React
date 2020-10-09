import React, { Component } from 'react';
import { VIDEOS } from '../shared/video';
import Header from './HeaderComponent';
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
            <div >

                <div className="row row-content align-items-center" style={{ marginRight: "0px" }}>
                    <div key={this.state.videos[0].id} className="col">
                        <div className="media">
                            <div className="img-thumbnail" >
                            <ReactPlayer controls url={this.state.videos[0].film} type="video/M4V"  />
                                {/* <ReactPlayer controls url={'http://localhost:3001/video/monologue.MP4'} type="video/mp4" /> */}
                            </div>
                            <div className="media-body align-self-center">
                                <h3>{this.state.videos[0].caption}</h3>
                                <h4 className="d-none d-sm-block">{this.state.videos[0].title}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-content align-items-center" style={{ marginRight: "0px" }}>
                    <div key={this.state.videos[1].id} className="col">
                        <div className="media">
                            <div className="media-body align-self-center">
                                <h3>{this.state.videos[1].caption}</h3>
                                <h4 className="d-none d-sm-block">{this.state.videos[1].title}</h4>
                            </div>
                            <div className="img-thumbnail" >
                            <ReactPlayer controls url={this.state.videos[1].film} type="video/M4V"  />
                            {/* <ReactPlayer controls url={'http://localhost:3001/video/blackbox_trim.mp4'} type="video/mp4" /> */}
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row row-content align-items-center" style={{ marginRight: "0px" }}>
                    <div key={this.state.videos[2].id} className="col">
                        <div className="media">
                            <div className="img-thumbnail" >
                            <ReactPlayer controls url={this.state.videos[2].film} type="video/M4V"  />
                            {/* <ReactPlayer controls url={'http://localhost:3001/video/songset_trim.mp4'} type="video/mp4" /> */}
                            </div>
                            <div className="media-body align-self-center">
                                <h3>{this.state.videos[2].caption}</h3>
                                <h4 className="d-none d-sm-block">{this.state.videos[2].title}</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    };
}



export default Video;