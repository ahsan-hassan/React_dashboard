
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Col , Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/header/header';
import { BrowserRouter as Router, Link, Switch, withRouter } from "react-router-dom";
import Dashboard from './components/dashboardcomponents/Dashboard';
import Scheduler from './tabs/Scheduler';
import Patients from './tabs/Patients'


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
                    <Link to="/">Non</Link>
                    </Col>
                </Row>
            </div>
            </Router> 
  );
}

export default App;
