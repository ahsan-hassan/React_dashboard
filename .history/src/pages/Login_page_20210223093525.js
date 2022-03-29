import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Login_form from '../components/Login_form';
import {Row,Button, Col} from 'react-bootstrap';
import illustration from '../components/LoginImage'


export class Login_page extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col lg={5}>
                        <img src={illustration} className="loginImage" />
                    </Col>
                    <Col lg={6}>
                    <Login_form /> 
                    </Col>    
                </Row>

            </div>    
        )
    }
}

export default Login_page
