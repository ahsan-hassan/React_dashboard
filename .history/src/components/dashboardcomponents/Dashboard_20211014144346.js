import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import Earning from './Earning';
import Request from './Requests'
import Summary from './Summary';
import stylesheet from '../../stylesheet/style.css'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Appointments from './Appointments';


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