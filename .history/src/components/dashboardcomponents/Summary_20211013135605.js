import React, { Component } from 'react'
import style from '../styles/style.css'

export class Summary extends Component {
    render() {
        return (
            <div className='summary'>
                <h4>Summary</h4>
                <Row>
                    <Col>
                    <h5>Attended</h5>
                    <p>02</p>
                    </Col>
                    <Col>
                    <h5>Appointments</h5>
                    <p>08</p>
                    </Col>
                </Row>
                <div>
                    <h5>Attended</h5>
                    <p>02</p>
                    <h5>Appointments</h5>
                    <p>08</p>
                </div>
            </div>
        )
    }
}

export default Summary