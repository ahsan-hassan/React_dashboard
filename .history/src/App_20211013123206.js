
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header';
import Sidebar  from './components/Sidebar';
import { Col , Row } from 'react-bootstrap';


function App() {
  return (        
            <div>
                <Row>
                    <Col>
                    <Sidebar />
                    </Col>
                </Row>

                <Header />
            </div> 
  );
}

export default App;
