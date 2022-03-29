import React from 'react'
import Reqno from '../dashboardcomponents/Reqno'
import { Row , Col } from 'react-bootstrap'

export default function Patients_details() {
    return (
        <div>
            <Row>
                <Col>
                <Patient_profile />
                </Col>
                <Col>
                <Reqno />
                </Col>
                <Col>
                <Reqno />
                </Col>
            </Row>
        </div>
    )
}
