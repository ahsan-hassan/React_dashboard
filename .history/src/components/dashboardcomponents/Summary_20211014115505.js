import React, { Component } from 'react'
import style from './style.css'
import { Col , Row } from 'react-bootstrap';

export class Summary extends Component {
    render() {
        return (
            <div className='summary'>
                <h4>Summary</h4>
                <Row style={{margin:'0px'}}>
                    <Col lg={6}>
                    <p style={{marginBottom:'10px'}}><strong>Attended</strong></p>
                    <h5 style={{border:'1px solid aqua', backgroundColor:'aqua', height:'50px', width:'80px', padding:'10px' , textAlign:'center'}}>02</h5>
                    </Col>
                    <Col lg={6}>
                    <p style={{marginBottom:'10px'}}><strong>Appointments</strong></p>
                    <h5 style={{border:'1px solid orange', backgroundColor:'orange', height:'50px', width:'80px', padding:'10px' , textAlign:'center'}}>08</h5>
                    </Col>                    
                </Row>
                <Row style={{margin:'0px' , paddingTop:'5px'}}>
                    <Col lg={6}>
                    <p style={{marginBottom:'10px'}}><strong>Requests</strong></p>
                    <h5 style={{border:'1px solid purple', backgroundColor:'purple', height:'50px', width:'80px', padding:'10px' , textAlign:'center'}}>10</h5>
                    </Col>
                    <Col lg={6}>
                    <p style={{marginBottom:'10px'}}><strong>Cancelled</strong></p>
                    <h5 style={{border:'1px solid lightblue', backgroundColor:'lightblue', height:'50px', width:'80px', padding:'10px', textAlign:'center'}}>05</h5>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Summary