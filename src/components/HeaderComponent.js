import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);

        
        this.state = {
            isNavOpen: false,
        };
 
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    } 

    render() {
        const middle = {
            justifyContent: "center",
        }
        return (
            <div style={middle}>
                
                <Navbar sticky="top" className="bg-dark" expand="md" >
                    <div className="container"  >
                        <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
                        <NavbarToggler className="navbar-dark" onClick={this.toggleNav} />
                        
                        <Collapse style={{justifyContent: 'center'}} isOpen={this.state.isNavOpen} navbar>
                            <Nav Navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <i className="fa fa-info fa-lg" /> About Me
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Photos">
                                        <i className="fa fa-camera fa-lg" /> Pictures
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Video">
                                        <i className="fa fa-film fa-lg" /> Videos 
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Podcast">
                                        <i className="fa fa-podcast fa-lg" /> Stoopkids 
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Contact">
                                        <i className="fa fa-address-card fa-lg" /> Contact 
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            
                        </Collapse>
                    </div>
                </Navbar>             
            </div>
        );
    }
}

export default Header;