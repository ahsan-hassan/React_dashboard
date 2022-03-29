import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/header/header'
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
            </Col>
        </Row>
</div>
    )
}
