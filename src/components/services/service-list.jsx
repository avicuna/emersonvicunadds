import React from 'react';
import {
        Button, Card, CardBody, CardImage, CardTitle,
        Container, Modal, ModalBody, ModalHeader, ModalFooter, Row
} from 'mdbreact';
import {Animation} from 'mdbreact';
import extraction from '../../assets/extraction.png';
import filling from '../../assets/filling.png';
import crown from '../../assets/027-molar-crown.png';
import rootCanal from '../../assets/root-canal.png';
import wisdomTooth from '../../assets/029-wisdom-tooth.png';
import smile from '../../assets/009-smile.png';
import denture from '../../assets/004-denture.png';
import partials from '../../assets/partial-denture.jpeg';
import dentureRepair from '../../assets/repair.png';
import bridge from '../../assets/030-bridge.png';
import veneers from '../../assets/010-protection.png';
import implants from '../../assets/034-implants.png';


class ServiceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            modal2: false,
            modal3: false,
            modal4: false,
            modal5: false,
            modal6: false,
            modal7: false,
            modal8: false,
            modal9: false,
            modal10: false,
            modal11: false,
            modal12: false
        };
    }

    toggle(nr) {
        let modalNumber = 'modal' + nr;
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }
    render() {
        const {text} = this.props;
        return (
            <Animation type="fadeIn" duration="2s">
                <Row>
                    <Card className="service" style={{ width: "22rem" }}>
                        <CardImage
                            className="dental-icon img-fluid"
                            src={extraction}
                            waves
                        />
                        <CardBody>
                            <CardTitle className="card-title">{text.services.service1.name}</CardTitle>
                            <Container>
                                <Button size="sm" onClick={() => this.toggle(1)}>{text.services.button1}</Button>
                                <Modal isOpen={this.state.modal1} toggle={() => this.toggle(1)} centered>
                                    <ModalHeader toggle={() => this.toggle(1)}>{text.services.service1.name}</ModalHeader>
                                    <ModalBody>
                                        {text.services.service1.description}
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.toggle(1)}>{text.services.button2}</Button>
                                    </ModalFooter>
                                </Modal>
                            </Container>
                        </CardBody>
                    </Card>
                    <Card className="service" style={{ width: "22rem" }}>
                        <CardImage
                            className="dental-icon img-fluid"
                            src={filling}
                            waves
                        />
                        <CardBody>
                            <CardTitle className="card-title">{text.services.service2.name}</CardTitle>
                            <Container>
                                <Button size="sm" onClick={() => this.toggle(2)}>{text.services.button1}</Button>
                                <Modal isOpen={this.state.modal2} toggle={() => this.toggle(2)} centered>
                                    <ModalHeader toggle={() => this.toggle(2)}>{text.services.service2.name}</ModalHeader>
                                    <ModalBody>
                                        {text.services.service2.description}
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.toggle(2)}>{text.services.button2}</Button>
                                    </ModalFooter>
                                </Modal>
                            </Container>
                        </CardBody>
                    </Card>
                    <Card className="service" style={{ width: "22rem" }}>
                        <CardImage
                            className="dental-icon img-fluid"
                            src={crown}
                            waves
                        />
                        <CardBody>
                            <CardTitle className="card-title">{text.services.service3.name}</CardTitle>
                            <Container>
                                <Button size="sm" onClick={() => this.toggle(3)}>{text.services.button1}</Button>
                                <Modal isOpen={this.state.modal3} toggle={() => this.toggle(3)} centered>
                                    <ModalHeader toggle={() => this.toggle(3)}>{text.services.service3.name}</ModalHeader>
                                    <ModalBody>
                                        {text.services.service3.description}
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.toggle(3)}>{text.services.button2}</Button>
                                    </ModalFooter>
                                </Modal>
                            </Container>
                        </CardBody>
                    </Card>
                    <Card className="service" style={{ width: "22rem" }}>
                        <CardImage
                            className="dental-icon img-fluid"
                            src={rootCanal}
                            waves
                        />
                        <CardBody>
                            <CardTitle className="card-title">{text.services.service4.name}</CardTitle>
                            <Container>
                                <Button size="sm" onClick={() => this.toggle(4)}>{text.services.button1}</Button>
                                <Modal isOpen={this.state.modal4} toggle={() => this.toggle(4)} centered>
                                    <ModalHeader toggle={() => this.toggle(4)}>{text.services.service4.name}</ModalHeader>
                                    <ModalBody>
                                        {text.services.service4.description}
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.toggle(4)}>{text.services.button2}</Button>
                                    </ModalFooter>
                                </Modal>
                            </Container>
                        </CardBody>
                    </Card>
                    <Card className="service" style={{ width: "22rem" }}>
                        <CardImage
                            className="dental-icon img-fluid"
                            src={wisdomTooth}
                            waves
                        />
                        <CardBody>
                            <CardTitle className="card-title">{text.services.service5.name}</CardTitle>
                            <Container>
                                <Button size="sm" onClick={() => this.toggle(5)}>{text.services.button1}</Button>
                                <Modal isOpen={this.state.modal5} toggle={() => this.toggle(5)} centered>
                                    <ModalHeader toggle={() => this.toggle(5)}>{text.services.service5.name}</ModalHeader>
                                    <ModalBody>
                                        {text.services.service5.description}
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.toggle(5)}>{text.services.button2}</Button>
                                    </ModalFooter>
                                </Modal>
                            </Container>
                        </CardBody>
                    </Card>
                    <Card className="service" style={{ width: "22rem" }}>
                        <CardImage
                            className="dental-icon img-fluid"
                            src={smile}
                            waves
                        />
                        <CardBody>
                            <CardTitle className="card-title">Bleaching</CardTitle>
                            <Container>
                                <Button size="sm" onClick={() => this.toggle(6)}>Learn More</Button>
                                <Modal isOpen={this.state.modal6} toggle={() => this.toggle(6)} centered>
                                    <ModalHeader toggle={() => this.toggle(6)}>Bleaching</ModalHeader>
                                    <ModalBody>
                                        {text.services.service6.description}
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.toggle(6)}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                            </Container>
                        </CardBody>
                    </Card>
                    <Card className="service" style={{ width: "22rem" }}>
                        <CardImage
                            className="dental-icon img-fluid"
                            src={denture}
                            waves
                        />
                        <CardBody>
                            <CardTitle className="card-title">Dentures</CardTitle>
                            <Container>
                                <Button size="sm" onClick={() => this.toggle(7)}>Learn More</Button>
                                <Modal isOpen={this.state.modal7} toggle={() => this.toggle(7)} centered>
                                    <ModalHeader toggle={() => this.toggle(7)}>Dentures</ModalHeader>
                                    <ModalBody>
                                        {text.services.service7.description}
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.toggle(7)}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                            </Container>
                        </CardBody>
                    </Card>
                    <Card className="service" style={{ width: "22rem" }}>
                        <CardImage
                            className="dental-icon img-fluid"
                            src={partials}
                            waves
                        />
                        <CardBody>
                            <CardTitle className="card-title">Partials</CardTitle>
                            <Container>
                                <Button size="sm" onClick={() => this.toggle(8)}>Learn More</Button>
                                <Modal isOpen={this.state.modal8} toggle={() => this.toggle(8)} centered>
                                    <ModalHeader toggle={() => this.toggle(8)}>Partials</ModalHeader>
                                    <ModalBody>
                                        {text.services.service8.description}
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.toggle(8)}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                            </Container>
                        </CardBody>
                    </Card>
                    <Card className="service" style={{ width: "22rem" }}>
                        <CardImage
                            className="dental-icon img-fluid"
                            src={dentureRepair}
                            waves
                        />
                        <CardBody>
                            <CardTitle className="card-title">Denture Repair</CardTitle>
                            <Container>
                                <Button size="sm" onClick={() => this.toggle(9)}>Learn More</Button>
                                <Modal isOpen={this.state.modal9} toggle={() => this.toggle(9)} centered>
                                    <ModalHeader toggle={() => this.toggle(8)}>Denture Repair</ModalHeader>
                                    <ModalBody>
                                        {text.services.service9.description}
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.toggle(9)}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                            </Container>
                        </CardBody>
                    </Card>
                    <Card className="service" style={{ width: "22rem" }}>
                        <CardImage
                            className="dental-icon img-fluid"
                            src={bridge}
                            waves
                        />
                        <CardBody>
                            <CardTitle className="card-title">Bridges</CardTitle>
                            <Container>
                                <Button size="sm" onClick={() => this.toggle(10)}>Learn More</Button>
                                <Modal isOpen={this.state.modal10} toggle={() => this.toggle(10)} centered>
                                    <ModalHeader toggle={() => this.toggle(10)}>Bridges</ModalHeader>
                                    <ModalBody>
                                        {text.services.service10.description}
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.toggle(10)}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                            </Container>
                        </CardBody>
                    </Card>
                    <Card className="service" style={{ width: "22rem" }}>
                        <CardImage
                            className="dental-icon img-fluid"
                            src={veneers}
                            waves
                        />
                        <CardBody>
                            <CardTitle className="card-title">Veneers</CardTitle>
                            <Container>
                                <Button size="sm" onClick={() => this.toggle(11)}>Learn More</Button>
                                <Modal isOpen={this.state.modal11} toggle={() => this.toggle(11)} centered>
                                    <ModalHeader toggle={() => this.toggle(11)}>Veneers</ModalHeader>
                                    <ModalBody>
                                        {text.services.service11.description}
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.toggle(11)}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                            </Container>
                        </CardBody>
                    </Card>
                    <Card className="service" style={{ width: "22rem" }}>
                        <CardImage
                            className="dental-icon img-fluid"
                            src={implants}
                            waves
                        />
                        <CardBody>
                            <CardTitle className="card-title">Implants</CardTitle>
                            <Container>
                                <Button size="sm" onClick={() => this.toggle(12)}>Learn More</Button>
                                <Modal isOpen={this.state.modal12} toggle={() => this.toggle(12)} centered>
                                    <ModalHeader toggle={() => this.toggle(12)}>Implants</ModalHeader>
                                    <ModalBody>
                                        {text.services.service12.description}
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.toggle(12)}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                            </Container>
                        </CardBody>
                    </Card>
                </Row>
                <div id="icons-credit">Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </Animation>
        )
    }
}

export default ServiceList;