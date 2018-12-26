import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Container, Modal, ModalBody, ModalHeader, ModalFooter, Row } from 'mdbreact';

class ServiceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            modal2: false,
            modal3: false
        };
    }

    toggle(nr) {
        let modalNumber = 'modal' + nr;
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }
    render() {
        return (
            <Row>
                <div>
                    <Card className="service" style={{ width: "22rem" }}>
                        <CardImage
                            className="img-fluid"
                            // src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                            waves
                        />
                        <CardBody>
                            <CardTitle className="card-title">Service 1</CardTitle>
                            <Container>
                                <Button size="sm" onClick={() => this.toggle(1)}>Learn More</Button>
                                <Modal isOpen={this.state.modal1} toggle={() => this.toggle(1)}>
                                    <ModalHeader toggle={() => this.toggle(1)}>Service 1</ModalHeader>
                                    <ModalBody>
                                        (...)
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.toggle(1)}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                            </Container>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card className="service" style={{ width: "22rem" }}>
                        <CardImage
                            className="img-fluid"
                            // src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                            waves
                        />
                        <CardBody>
                            <CardTitle className="card-title">Service 2</CardTitle>
                            <Container>
                                <Button size="sm" onClick={() => this.toggle(2)}>Learn More</Button>
                                <Modal isOpen={this.state.modal2} toggle={() => this.toggle(2)}>
                                    <ModalHeader toggle={() => this.toggle(2)}>Service 2</ModalHeader>
                                    <ModalBody>
                                        (...)
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.toggle(2)}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                            </Container>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card className="service" style={{ width: "22rem" }}>
                        <CardImage
                            className="img-fluid"
                            // src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                            waves
                        />
                        <CardBody>
                            <CardTitle className="card-title">Service 3</CardTitle>
                            <Container>
                                <Button size="sm" onClick={() => this.toggle(3)}>Learn More</Button>
                                <Modal isOpen={this.state.modal3} toggle={() => this.toggle(3)}>
                                    <ModalHeader toggle={() => this.toggle(3)}>Service 3</ModalHeader>
                                    <ModalBody>
                                        (...)
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.toggle(3)}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                            </Container>
                        </CardBody>
                    </Card>
                </div>
            </Row>
        )
    }
}

export default ServiceList;