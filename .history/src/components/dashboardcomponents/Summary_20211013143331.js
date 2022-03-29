import React, { Component } from 'react'
import style from '../styles/style.css'
import { Col  } from 'react-bootstrap';

export class Summary extends Component {
    render() {
        return (
            <div className='summary'>
                <h4>Summary</h4>
                <div>
                    <Col lg={6}>
                    <p><strong>Attended</strong></p>
                    <h5 style={{border:'1px solid aqua', backgroundColor:'aqua', height:'50px', width:'80px', padding:'10px'}}>02</h5>
                    </Col>
                    <Col lg={6}>
                    <p><strong>Appointments</strong></p>
                    <h5 style={{border:'1px solid aqua', backgroundColor:'aqua', height:'50px', width:'80px', padding:'10px'}}>02</h5>
                    </Col>
                </div>    
                <div>
                    <Col lg={6}>
                    <p><strong>Attended</strong></p>
                    <h5 style={{border:'1px solid aqua', backgroundColor:'aqua', height:'50px', width:'80px', padding:'10px'}}>02</h5>
                    </Col>
                    <Col lg={6}>
                    <p><strong>Appointments</strong></p>
                    <h5 style={{border:'1px solid aqua', backgroundColor:'aqua', height:'50px', width:'80px', padding:'10px'}}>02</h5>
                    </Col>
                    </div>
            </div>
        )
    }
}

export default Summary