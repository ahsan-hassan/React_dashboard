import React, { Component } from 'react'
import Appointments from '../components/dashboardcomponents/Appointments'
import style from '../styles/style.css'

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