
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Col , Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/header/header';
import dashboard from './components/dashboardcomponents/dashboard';


function App() {
  return (        
            <div>
                <Row>
                    <Col lg={3}>
                    <Sidebar />
                    </Col>

                    <Col lg={9}>
                    <Header />
                    <dashboard />
                    </Col>
                </Row>
            </div> 
  );
}

export default App;
