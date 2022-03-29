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
                <Patient_profile />
                </Col>
                <Col>
                <Patient_profile />
                </Col>
            </Row>
        </div>
    )
}
