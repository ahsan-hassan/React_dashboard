import React from 'react'
import PatientProfile from './patient_profile'
import { Row , Col } from 'react-bootstrap'

export default function Patients_details() {

    const data = [
        {
            id: 1,
            name: 'Ahsan',
            gender:'Male',
            age: 45,
            appointment: 5,
        },
        {
            id: 2,
            name: 'khawar',
            gender:'Male',
            age: 25,
            appointment: 10,
        },
        {
            id: 3,
            name: 'fahad',
            gender:'Male',
            age: 45,
            appointment: 5,
        },
        {
            id: 4,
            name: 'ammar',
            gender:'Male',
            age: 45,
            appointment: 5,
        },
        {
            id: 5,
            name: 'rizwan',
            gender:'Male',
            age: 45,
            appointment: 5,
        },
        {
            id: 6,
            name: 'abdullah',
            gender:'Male',
            age: 45,
            appointment: 5,
        },
        {
            id: 7,
            name: 'maria',
            gender:'Female',
            age: 45,
            appointment: 5,
        },
        {
            id: 8,
            name: 'ahmed',
            gender:'Male',
            age: 45,
            appointment: 5,
        },
        {
            id: 9,
            name: 'Arshad',
            gender:'Male',
            age: 45,
            appointment: 5,
        },
        {
            id: 10,
            name: 'Mohsin',
            gender:'Male',
            age: 45,
            appointment: 5,
        },
        {
            id: 11,
            name: 'Zeeshan',
            gender:'Male',
            age: 45,
            appointment: 5,
        },
        {
            id: 12,
            name: 'Umer',
            gender:'Male',
            age: 45,
            appointment: 5,
        },

    ]



    return (
        <div>

            <div className="row">

                {data.map((data, index) => {
                    return(
                        <PatientProfile dataSet = {data} key={index}/>
                    )
                })}
            </div>
            


            {/* <Row>
                <Col>
                <PatientProfile  />
                </Col>
                <Col>
                <PatientProfile />
                </Col>
                <Col>
                <PatientProfile />
                </Col>
            </Row>
            <Row>
                <Col>
                <PatientProfile />
                </Col>
                <Col>
                <PatientProfile />
                </Col>
                <Col>
                <PatientProfile />
                </Col>
            </Row>
            <Row>
                <Col>
                <PatientProfile />
                </Col>
                <Col>
                <PatientProfile />
                </Col>
                <Col>
                <PatientProfile />
                </Col>
            </Row>
            <Row>
                <Col>
                <PatientProfile />
                </Col>
                <Col>
                <PatientProfile />
                </Col>
                <Col>
                <PatientProfile />
                </Col>
            </Row> */}
        </div>
    )
}
