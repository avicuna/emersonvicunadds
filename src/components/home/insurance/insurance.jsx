import React from 'react';
import {Row, Col, Jumbotron} from 'mdbreact';

const Insurance = (props) => {
    const {text} = props;
    return (
        <div className="custom-jumbotron">
            <Jumbotron>
                <h1 className="display-4">{text.home.insurance.header}</h1>
                <hr className="my-2" />
                <br/>
                <Row>
                    <Col>
                        <h1>United Healthcare</h1>
                    </Col>
                    <Col>
                        <h1>Delta Dental</h1>
                    </Col>
                    <Col>
                        <h1>MetLife</h1>
                    </Col>
                    <Col>
                        <h1>Guardian</h1>
                    </Col>
                    <Col>
                        <h1>Ameritas Group</h1>
                    </Col>
                    <Col>
                        <h1>Cigna</h1>
                    </Col>
                    <Col>
                        <h1>Medicaid</h1>
                    </Col>
                    <Col>
                        <h1>Principal</h1>
                    </Col>
                    <Col>
                        <h1>United Concordia</h1>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

export default Insurance;