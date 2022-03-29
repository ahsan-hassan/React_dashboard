import React from 'react'
import Dashboard from '../components/dashboardcomponents/Dashboard'
import Header from '../components/header/header'
import Sidebar from '../components/Sidebar/Sidebar'
import { Row , Col } from 'react-bootstrap'

export default function Home() {
    return (
        <div>
                <Row>
                    <Dashboard />
                    </Col>
                </Row>
        </div>
    )
}
