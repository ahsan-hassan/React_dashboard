
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Col , Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/header/header';
import Dashboard from './components/dashboardcomponents/Dashboard';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import stylesheet from '../src/components/stylesheet/mystyle.css'


function App() {
  return ( 
          <Router>       
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
            </Router> 
  );
}

export default App;
