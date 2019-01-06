import React from 'react';
import { MDBJumbotron, MDBContainer, Row, Col, Fa } from 'mdbreact';
import {getMedicalHistory, getPatientRegistration} from '../../firebase';

const Cards = (props) => {
    const {lang, text} = props;
    return (
        <div className="forms-jumbotron">
            <MDBContainer className="mt-5 text-center">
                <MDBJumbotron>
                    <p className="lead">
                        Download and fill these out before your next visit!
                    </p>
                    <hr className="my-2" />
                    <br/>
                    <Row>
                        <Col>
                            <p className="lead">
                                Medical History
                            </p>
                            <a onClick={getMedicalHistory} href="#click"><Fa icon="download" size="3x"/></a>
                        </Col>
                        <Col>
                            <p className="lead">
                                Patient Registration
                            </p>
                            <a onClick={getPatientRegistration} href="#click"><Fa icon="download" size="3x"/></a>
                        </Col>
                    </Row>
                </MDBJumbotron>
            </MDBContainer>
        </div>
    )
};

export default Cards;