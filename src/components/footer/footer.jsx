import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
    render() {
        return (
            <Footer color="blue" className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                        <Col md="6">
                            <h5 className="title">Get In Touch</h5>
                            <br/>
                            <p>
                                <i className="fa fa-map-marker" aria-hidden="true"></i> 1010 Bridge Blvd SW, Suite F
                                Albuquerque, NM
                            </p>
                            <p>
                                <i className="fa fa-phone" aria-hidden="true"></i> +1 (505)-877-1113
                            </p>
                            <p>
                                <i className="fa fa-envelope" aria-hidden="true"></i> emersonvicunadds@gmail.com
                            </p>
                        </Col>
                        <Col md="6">
                            <h5 className="title">Hours</h5>
                                <Col>
                                    <ul>
                                        <li className="list-unstyled">
                                            <p>Monday - Friday: 9AM - 5PM</p>
                                        </li>
                                        <li className="list-unstyled">
                                            <p>*Hours may vary</p>
                                        </li>
                                    </ul>
                                </Col>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        <p> HANDMADE FOR EMERSON VICUNA, DDS BY ALEJANDRO VICUNA </p>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;