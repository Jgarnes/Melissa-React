import React, { Component } from 'react';
import Header from './HeaderComponent';

class Podcast extends Component {
    
    render() {
        
        
        return (
        <div className="linear">
            <Header />
        <div className="container" style={{minHeight:"95vh"}}>
            <div className="mx-auto" width="100%">
                <img  src="assets/images/stoopkids.jpg" alt=" "/>;
            </div>
            <div className="row">
            <div className="col" style= {{textAlign: "center"}}>
            <h1>Welcome to StoopKids</h1>
            </div>
            </div>
            <div className="row">
                <div className="col"  style= {{textAlign: "center", color: 'white'}}>
            Quisque venenatis malesuada risus sit amet sodales. Aliquam erat volutpat. Pellentesque sodales ullamcorper luctus. Pellentesque tellus mi, imperdiet in eros nec, dapibus rhoncus enim. Phasellus id nunc id tellus congue fringilla nec et libero. Nam accumsan nisl eget nibh ultrices lobortis. Proin ullamcorper purus sed mi vestibulum, feugiat tempor urna molestie. Aenean quis vehicula augue, quis tempor magna. Curabitur ut tincidunt metus. Sed semper suscipit erat finibus condimentum. Donec congue, quam sit amet luctus mattis, libero lorem iaculis ipsum, sit amet laoreet tortor purus vel mauris. Cras imperdiet magna sed hendrerit consequat. Nulla pretium non quam vel rhoncus. Duis metus magna, tincidunt id hendrerit eu, feugiat eget ante. Pellentesque vulputate interdum dui ac gravida. Integer sit amet luctus justo, ut euismod mauris.
            </div>
            </div>
            <div className="row" style={{marginTop: "50px"}}>
            <div className="col"  style= {{textAlign: "center"}}>
            <h1>Follow us at</h1>
            <h5 ><a style={{color:"purple"}}href="https://podcasts.apple.com/us/podcast/stoopkid-stories/id1497168868" target="_blank" rel="noopener noreferrer"><i class="fa fa-podcast fa-lg"></i> StoopKids Stories</a></h5>
            </div>
            </div>
        </div> 
        </div>
        );
    }
}

export default Podcast;