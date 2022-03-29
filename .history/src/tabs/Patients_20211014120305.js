import React, { Component } from 'react'
import Appointments from '../components/dashboardcomponents/Appointments'
import Stylesheet from '../stylesheet/style.css'
import { Col , Row } from 'react-bootstrap';
import Summary from '../components/dashboardcomponents/Summary';
import Earning from '../components/dashboardcomponents/Earning';

export class Requests extends Component {
    render() {
        return (
<div>
                <Row>
                    <Col lg={4}>
                    <Summary />
                    </Col>
                    <Col lg={4}>
                    <Earning />
                    </Col>
                    <Col lg={4}>
                    <Appointments />
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <Appointments />
                    </Col>
                    <Col lg={4}>
                        <Appointments />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Requests