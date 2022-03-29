
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header';
import Sidebar  from './components/Sidebar';
import { Col , Row } from 'react-bootstrap';


function App() {
  return (        
            <div>
                <Row>
                    <Col lg={3}>
                    <Sidebar />
                    </Col>

                    <Col>
                    <Header />
                    </Col>
                </Row>
            </div> 
  );
}

export default App;
