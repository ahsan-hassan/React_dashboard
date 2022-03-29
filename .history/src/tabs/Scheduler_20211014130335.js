import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/header/header'
import Dashboard from '../components/dashboardcomponents/Dashboard'
import { Row, Col } from 'react-bootstrap'
import { Router } from 'react-router'
import { Row, Col } from 'react-bootstrap'

export default function Scheduler() {
    return (
        <div>
        <Row>
            <Col lg={3}>
            <Sidebar />
            </Col>

            <Col lg={9} style={{marginLeft:'-15px'}}>
            <Header />
            <Dashboard />
            </Col>
        </Row>
</div>
    )
}
