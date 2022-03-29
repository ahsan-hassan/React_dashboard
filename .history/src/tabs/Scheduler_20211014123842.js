import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/header/header'
import Dashboard from '../components/dashboardcomponents/Dashboard'
import { Row, Col } from 'react-bootstrap'
import { Route } from 'react-router'
export default function Scheduler() {
    return (
        <Router>       
        <div>
            <Row>
                <Col lg={3}>
                <Sidebar />
                </Col>

                <Col lg={9} style={{marginLeft:'-15px'}}>
                <Header />
                <Dashboard />
                <h1>NOthing</h1>
                </Col>
            </Row>
        </div>
        </Router> 
    )
}
