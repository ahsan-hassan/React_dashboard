
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Col , Row } from 'react-bootstrap';


function App() {
  return (        
            <div>
                <Row>
                    <Col lg={3}>
                    <Sidebar />
                    </Col>

                    <Col lg={9}>
                    <Header />
                    </Col>
                </Row>
            </div> 
  );
}

export default App;
