import React from 'react'

export default function Home() {
    return (
        <div>
                <Row>
                    <Col lg={3}>
                    <Sidebar />
                    </Col>

                    <Col lg={9} style={{marginLeft:'-15px'}}>
                    <Header />
                    <Dashboard />
                    </Col>
                </Row>
        </div>
    )
}
