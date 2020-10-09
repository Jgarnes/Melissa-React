import React, { Component } from 'react';
import Header from './HeaderComponent'; 


var styles = {height: 100}
class About extends Component {

  render () {  
  return (
      <div>
      
        <div className="container">
          <header> <h1>About Me </h1></header>
            <div className="row">
                <div className="col">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue elit vel urna auctor, eleifend tincidunt tortor maximus. Duis nisi nunc, auctor ut molestie ornare, venenatis a sapien. Vivamus commodo ante vel risus tristique dapibus. Vivamus interdum orci ac neque luctus, a interdum nunc feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras maximus cursus mi, eget cursus lacus porta in. Quisque nulla lectus, pellentesque et maximus quis, pellentesque sed neque. Nulla tempor leo non nunc pretium, ac efficitur purus ornare.
                    <br /><br />
                    Quisque venenatis malesuada risus sit amet sodales. Aliquam erat volutpat. Pellentesque sodales ullamcorper luctus. Pellentesque tellus mi, imperdiet in eros nec, dapibus rhoncus enim. Phasellus id nunc id tellus congue fringilla nec et libero. Nam accumsan nisl eget nibh ultrices lobortis. Proin ullamcorper purus sed mi vestibulum, feugiat tempor urna molestie. Aenean quis vehicula augue, quis tempor magna. Curabitur ut tincidunt metus. Sed semper suscipit erat finibus condimentum. Donec congue, quam sit amet luctus mattis, libero lorem iaculis ipsum, sit amet laoreet tortor purus vel mauris. Cras imperdiet magna sed hendrerit consequat. Nulla pretium non quam vel rhoncus. Duis metus magna, tincidunt id hendrerit eu, feugiat eget ante. Pellentesque vulputate interdum dui ac gravida. Integer sit amet luctus justo, ut euismod mauris.
                    
                </div>
            <div className="col">
            <img src="assets/images/spicy.jpg" className="img-thumbnail about" />
            </div>
            </div>
        </div>
      </div>  
    );
  }
}


export default About;