import React from 'react'
import Dashboard from '../components/dashboardcomponents/Dashboard'
import Header from '../components/header/header'
import Sidebar from '../components/Sidebar/Sidebar'

export default function Patients() {
    return (
        <div>
                <Row>
                    <Col lg={3}>
                    <Sidebar />
                    </Col>

                    <Col lg={9} style={{marginLeft:'-15px'}}>
                    <Header />

                    </Col>
                </Row>
        </div>
    )
}
