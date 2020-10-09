import React, { Component } from 'react';
import Home from './components/HomeComponent';
import About from './components/AboutmeComponent';
import Picture from './components/PictureComponent';
import Video from './components/VideosComponent';
import Podcast from './components/PodcastComponent';
import Contact from './components/ContactComponent';
import Header from './components/HeaderComponent';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';

class App extends Component {
   

  render() {
      var path = this.props.location.pathname;
      var showHeader = path !== '/' && path !== '/Podcast'
      
      return (
              
              <div style={{backgroundColor: "rgb(211, 128, 4)"}}>     
                  
                  {showHeader && <Header />}         
                   <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/About' component={About} />
                        <Route path='/Photos' component={Picture} />
                        <Route path='/Video' component={Video} />
                        <Route path='/Podcast' component={Podcast} />
                        <Route path='/Contact' component={Contact} />
                    </Switch>
                </div>  
                       
         
        
      );
   }
}

export default withRouter(App);