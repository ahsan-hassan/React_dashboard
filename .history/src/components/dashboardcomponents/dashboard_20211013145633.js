import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import style from '../styles/style.css';
import Earning from './Earning';
import Request from './Requests'
import Summary from './Summary';
import Calendar from './Calendar'


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
                    <Col lg={4}>
                    <Calen
                    </Col>
                </Row>
 
            </div>
        )
    }
}

export default Dashboard