import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";

class Navbar extends Component {
    render() {
        return (
            <ReactBootStrap.Navbar className="text-uppercase fixed-top" id="mainNav" bg="secondary" expand="lg">
                <ReactBootStrap.Navbar.Toggle className=" navbar-toggler-right bg-primary text-white rounded" aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link className="nav-item mx-0 mx-lg-1 py-3 px-0 px-lg-3 rounded" href="#">Inicio</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link className="nav-item mx-0 mx-lg-1 py-3 px-0 px-lg-3 rounded" href="#">Sobre mi</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link className="nav-item mx-0 mx-lg-1 py-3 px-0 px-lg-3 rounded" href="#">Proyectos</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link className="nav-item mx-0 mx-lg-1 py-3 px-0 px-lg-3 rounded" href="#">Contacto</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        );
    }
}
export default Navbar;