import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import style from '../styles/style.css';
import Earning from './Earning';
import Request from './Requests'
import Summary from './Summary';

export class Dashboard extends Component {
    render() {
        return (   
            <div>
                <Row>
                    <Col lg={3}>
                    <Summary />
                    </Col>
                    <Col lg={4}>
                    <Earning />
                    </Col>
                    <Col lg={4}>
                    <Request />
                    </Col>
                </Row>
 
            </div>
        )
    }
}

export default Dashboard