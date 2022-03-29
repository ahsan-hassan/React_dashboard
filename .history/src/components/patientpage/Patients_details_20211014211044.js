import React from 'react'
import Patient_profile from './patient_profile'
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
