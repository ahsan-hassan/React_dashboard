
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Col , Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/header/header';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Scheduler from './tabs/Scheduler';
import Home from './tabs/Home'
import Patients from './tabs/Patients';
import Styles from './Styles/Styles.css'
import Dashboard from './components/dashboardcomponents/Dashboard';



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
                    <Switch>
                    <Route exact path='/'>
                    <Home />
                    </Route>
                    <Route path='/Scheduler'>
                    <Scheduler />
                    </Route>
                    <Route path='/Patients'>
                    <Patients />
                    </Route>
                    </Switch>
                    </Col>
                </Row>
            </div>
            </Router> 
  );
}

export default App;
