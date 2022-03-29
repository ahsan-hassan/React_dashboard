import React from 'react';
import Styles from '../Styles/Styles.css';
import { Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/header/header';

export default function Patients() {
    return (
        <div>
                <Row>
                    <Col lg={3}>
                    <Sidebar />
                    </Col>

                    <Col lg={9} style={{marginLeft:'-15px'}}>
                    <Header />
                    </Col>
                </Row>
        </div>
    )
}
