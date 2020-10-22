import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import About from './components/AboutmeComponent';


class Home extends Component {
    
    render () {
        return (   
        <div className="hero">
            <img style={{minHeight:"100vh", objectFit:"cover"}} src="assets/images/inspired.jpg" alt= " "/>
            <div className="hero-text">
                <div>
                    <div><h1 className="title">Melissa Victor</h1></div>
                    <div><h4>Singer | Dancer | Actor | Podcast Creator</h4></div>
                    <div className="box">
                        
                        <Link style={{color: "rgb(153, 77, 6)"}} to='/About'>Enter</Link> 
                        
                    </div>           
                </div>
            </div>
        </div> 
        );
    };
} 

export default Home;