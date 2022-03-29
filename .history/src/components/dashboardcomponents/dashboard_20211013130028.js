import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import style from '../styles/style.css';
import Earning from './Earning';
import Request from './Requests'

export class Dashboard extends Component {
    render() {
        return (   
            <div>
                <Row>
                    <Col lg={4s}>
                    <Earning />
                    </Col>
                    <Col lg={3}>
                    <Request />
                    </Col>
                </Row>
 
            </div>
        )
    }
}

export default Dashboard