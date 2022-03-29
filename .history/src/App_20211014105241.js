import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Header from './components/header/header';
import Sidebar from './components/Sidebar/Sidebar'



function App() {
  return (
            <Router>           
                    <div>
                        <Sidebar />
                        <Header />
                    </div>
                </Router> 
  );
}

export default App;
