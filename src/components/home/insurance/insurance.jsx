import React from 'react';
import {Row, Col, Jumbotron} from 'mdbreact';

const Insurance = (props) => {
    const {text} = props;
    return (
        <div className="custom-jumbotron">
            <Jumbotron>
                <p className="insurance-header">{text.home.insurance.header}</p>
                <hr className="my-2" />
                <br/>
                <Row>
                    <Col>
                        <p>United Healthcare</p>
                    </Col>
                    <Col>
                        <p>Delta Dental</p>
                    </Col>
                    <Col>
                        <p>MetLife</p>
                    </Col>
                    <Col>
                        <p>Guardian</p>
                    </Col>
                    <Col>
                        <p>Ameritas Group</p>
                    </Col>
                    <Col>
                        <p>Cigna</p>
                    </Col>
                    <Col>
                        <p>Medicaid</p>
                    </Col>
                    <Col>
                        <p>Principal</p>
                    </Col>
                    <Col>
                        <p>United Concordia</p>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

export default Insurance;