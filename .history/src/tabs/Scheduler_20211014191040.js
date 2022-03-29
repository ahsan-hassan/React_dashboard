import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Requests from '../components/dashboardcomponents/Requests';
import appointmenttable from '../components/schedulerpage/appointmenttable';
import Schedule from '../components/schedulerpage/schedule'


export default function Scheduler() {
    return (
        <div>
            <Row>
                <Col lg={9}>
                    <Schedule />
                </Col>

                <Col lg={3}>
                    <appointmenttable />
                    <Requests />
                </Col>
            </Row>    
        </div>
    )
}
