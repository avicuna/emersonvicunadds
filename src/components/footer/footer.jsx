import React from "react";
import { Col, Container, Row, Footer} from "mdbreact";

class FooterPage extends React.Component {
    render() {
        const {text} = this.props;
        return (
            <div className="footer">
                <Footer color="unique-color" className="page-footer font-small">
                    <Container fluid className="text-center text-md-left">
                        <Row>
                            <Col md="6">
                                <br/>
                                <h5 className="title">{text.footer.item1}</h5>
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
                                <br/>
                                <h5 className="title">{text.footer.item2}</h5>
                                    <Col>
                                        <ul>
                                            <li className="list-unstyled">
                                                <p>{text.footer.item3}</p>
                                            </li>
                                            {/*<li className="list-unstyled">*/}
                                                {/*<p>*Hours may vary</p>*/}
                                            {/*</li>*/}
                                        </ul>
                                    </Col>
                            </Col>
                        </Row>
                    </Container>
                    <div className="footer-copyright text-center py-3">
                        <Container fluid>
                            <p> {text.footer.item4} </p>
                        </Container>
                    </div>
                </Footer>
            </div>
        );
    }
}

export default FooterPage;