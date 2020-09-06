import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <ReactBootStrap.Container fluid className="footer fixed-bottom">
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col className="d-flex align-items-center justify-content-center mb-2 mt-2 mb-lg-1 mt-lg-1">
                        <ReactBootStrap.Button variant="secondary" className="btn btn-social mx-1" target="_blank" rel="noopener noreferrer" href="https://github.com/KaribelBT">
                            <i className="fab fa-github fa-2x"></i>
                        </ReactBootStrap.Button>
                        <ReactBootStrap.Button variant="secondary" className="btn btn-social mx-1" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/karibel-barco-taboada-8b62218a/">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </ReactBootStrap.Button>
                        <ReactBootStrap.Button variant="secondary" className="btn btn-social mx-1" target="_blank" rel="noopener noreferrer" href="https://wa.me/5491121685966/">
                            <i className="fab fa-whatsapp fa-2x"></i>
                        </ReactBootStrap.Button>
                        <ReactBootStrap.Button variant="secondary" className="btn btn-social mx-1" target="_blank" rel="noopener noreferrer" href="mailto:karibel.barco@gmail.com">
                            <i className="far fa-envelope-open fa-2x"></i>
                        </ReactBootStrap.Button>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Container>
        );
    }
}

export default Footer;