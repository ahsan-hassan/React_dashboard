import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'

export class Cards extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '19rem' , height: '38rem' , borderRadius: '25px' , border: '2px solid' , alignContent: 'center'}}>
                <Card.Body>
                    <Card.Title>Features</Card.Title>
                    <Card.Title>Learn The Features of Shipster</Card.Title>
                    <Card.Text>
                        Shipster provides you with a complete delivery management software solutions for pickup and delivery. Prioritize and assign your drivers with precision and efficiency.<br></br><br></br>
                        Shipster provides you with a complete delivery management software solutions for pickup and delivery. Prioritize and assign your drivers with precision and efficiency.<br></br><br></br>
                        Shipster provides you with a complete delivery management software solutions for pickup and delivery. Prioritize and assign your drivers with precision and efficiency.
                        
                    </Card.Text>
                    <Button class="cardbtn">Contact Us</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Cards
