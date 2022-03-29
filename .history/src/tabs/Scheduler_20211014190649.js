import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Requests from '../components/dashboardcomponents/Requests';
import Schedule from '../components/schedulerpage/schedule'


export default function Scheduler() {
    return (
        <div>
            <Row>
                <Col lg={9}>
                    <Schedule />
                </Col>

                <Col lg={3} style={{padding:'10px;'}}>
                    <Requests />
                    <Requests />
                </Col>
            </Row>    
        </div>
    )
}
