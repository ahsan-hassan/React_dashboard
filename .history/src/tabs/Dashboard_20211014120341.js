import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import Earning from '../components/dashboardcomponents/Earning';
import Request from '../components/dashboardcomponents/Requests'
import Summary from '../components/dashboardcomponents/Summary';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Appointments from '../components/dashboardcomponents/Appointments';
import Stylesheet from '../stylesheet/style.css'

export class Dashboard extends Component {
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
                    <Request />
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <Appointments />
                    </Col>
                    <Col lg={4}>
                    <Calendar />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard