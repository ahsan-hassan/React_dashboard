import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import style from '../styles/style.css'
import Header from './components/header/header';


function App() {
  return (
            <Router>           
                    <div>
                        <Sidebar />
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
                    </div>
                </Router> 
  );
}

export default App;
