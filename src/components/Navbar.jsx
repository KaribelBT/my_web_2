import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";

class Navbar extends Component {
    render() {
        return (
            <ReactBootStrap.Navbar className="text-uppercase justify-content-start fixed-top navbar-shrink" id="mainNav" bg="secondary" expand="lg">
                <ReactBootStrap.Navbar.Toggle className=" navbar-toggler bg-primary  rounded" aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootStrap.Nav>
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