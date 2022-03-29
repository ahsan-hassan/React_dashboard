import React, { Component } from 'react'
import style from '../styles/style.css'
import { Col , Row } from 'react-bootstrap';

export class Summary extends Component {
    render() {
        return (
            <div className='summary'>
                <h4>Summary</h4>
                <Row style={{textAlign:'center'}}>
                    <Col>
                    <h5>Attended</h5>
                    <p>02</p>
                    </Col>
                    <Col>
                    <h5>Appointments</h5>
                    <p>08</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Summary