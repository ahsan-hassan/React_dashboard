import React, { Component } from 'react';
import { Col , Row } from 'react-bootstrap';
import location from '../components/location.jpg'
import Footer from '../components/Footer';

export class ContactUs extends Component {
    render() {
        return (
            <div>
                <h2 className="ContactUs">Contact Us</h2>
                <Row className="ContactRow">
                    <Col className="Contactcol1">
                    <img src={location} className="contactimg" style={{width: '60%'}} />
                    </Col>

                    <Col>
                    <h5>Phone No: 102831029381</h5>
                    <h5>Email: Shipster@gmail.com</h5>
                    <h5>Address: CIS Technology Park G5 Islamabad</h5>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ContactUs
