
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



function App() {
  return ( 
          <Router>       
            <div>
                <Row>
                    <Switch>
                    <Route path='/'>
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
