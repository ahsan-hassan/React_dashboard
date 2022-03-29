
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Col , Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/header/header';
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
                                <Route path="/pages/ContactUs">
                                    <ContactUs/>
                                </Route>
                                <Route path="/pages/OrderSummary">
                                    <OrderSummary/>
                                </Route>

                                <Route path="/pages/Login_page">
                                    <Login_page/>
                                </Route>
                                <Route path="/pages/Signup">
                                    <Signup/>
                                </Route>
                                <Route path="/pages/Track_page">
                                    <Track_page/>
                                </Route>
                                <Route path="/">
                                <HomePage/>
                                </Route>
                            </Switch>
                    </Col>
                </Row>
            </div>
            </Router> 
  );
}

export default App;
