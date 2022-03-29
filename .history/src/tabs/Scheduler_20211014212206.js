import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Requests from '../components/dashboardcomponents/Requests';
import Appointmenttable from '../components/schedulerpage/appointmenttable';
import Schedule from '../components/schedulerpage/schedule'


export default function Scheduler() {
    return (
        <div>
            <Row>
                <Col lg={8}>
                    <Schedule />
                </Col>

                <Col lg={4}>
                    <Appointmenttable/>
                    <Requests />
                </Col>
            </Row>    
        </div>
    )
}
