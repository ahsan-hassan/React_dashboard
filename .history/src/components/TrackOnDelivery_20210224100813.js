import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'

export class TrackOnDelivery extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' , backgroundColor:'#0660A5' , color:'white' }}>
                <Card.Body>
                    <Card.Title{this.props.title}</Card.Title>
                    <Card.Text>
                    Placed on: 11th December, 2020 23:11:27
                    <hr style={{color:'white', height:'1px' , backgroundColor:'white'}}></hr>
                    <p style={{fontWeight:'bold'}}>Aqib Sheikh</p>
                    {this.props.description}
                    </Card.Text>
                    <Button style={{backgroundColor:'white' , color:'#0660A5' }}>{this.props.Detailbtn}</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default TrackOnDelivery
