import React, { Component } from 'react';
import {Form, Button , Col , Row } from 'react-bootstrap';

export class OrderSummary extends Component {
    render() {
        return (
            <div>
                <div className="ordersummary">
                <Row className="summary_row">
                <h3 style={{textAlign:'center' , width:'100%', marginTop:'25px'}}>Summary</h3>       
                <Col lg={6} style={{marginTop: '60px'}}>
                <Form className="orderform" >
                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>PickUp Location</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>Dropoff Location</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    

                    <Form.Group controlId="formBasicCheckbox" className="form_group">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Form.Group controlId="formBasicRange" className="form_group">
                    <Form.Label>Estimates price</Form.Label>
                    <Form.Control type="range" />

                    <input type="range" 
                     id="customRange" 
min="0.1" max="1.0" step="0.05" 
value={this.state.opacity}
onChange={event => this.setState({ opacity: event.target.value })} >
</input>
                    </Form.Group>
                </Form>
                </Col>
                <Col lg={6}  style={{marginTop: '60px'}}>
                <Form className="orderform">

                    <Form.Group controlId="formBasicEmail" className="form_group">
                    <Form.Text >
                        Pick up Location
                    </Form.Text>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="form_group">
                    <Form.Text >
                        Dropoff Location
                    </Form.Text>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="form_group">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    </Form>
                </Col>
                <div>
                <Button variant="primary" type="submit" style={{backgroundColor: 'white', color: '#0660A5', marginBottom: '30px',marginRight: '30px' , width: '130px' }}>
                        Edit
                </Button>
                <Button variant="primary" type="submit" style={{backgroundColor: 'white', color: '#0660A5', marginBottom: '30px', width: '130px'}}>
                        Confirm
                </Button>
                </div>
                </Row>
                </div>
                
            </div>
        )
    }
}

export default OrderSummary
