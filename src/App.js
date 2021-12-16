import './App.css';
import Login from '../src/components/screens/Login';
import Dashboard from '../src/components/screens/Dashboard';
import { BrowserRouter as Router , Route ,Switch } from "react-router-dom"
import Main from '../src/components/include/Main'
import Contact from './components/screens/Contact';
import Single from './components/screens/Single';
import React from 'react';

export const UserContext = React.createContext()

function App() {
  return( 
    <Router>
  <>  
    <Switch>
      <Route path = "/" exact component={Login}/>
      <Route path = "/dashboard"  component={Dashboard} />
      <Route path = "/contact"  component={Contact} />
      <Route path = "/single"  component={Single} />
    </Switch>
  </>
  </Router>
 
  )
}

export default App;
