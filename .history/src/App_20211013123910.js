
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Sidebar  from '../components/Sidebar/Sidebar';
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
