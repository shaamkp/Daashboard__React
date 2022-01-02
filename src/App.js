import "./App.css";
import Login from "../src/components/screens/Login";
import Dashboard from "../src/components/screens/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../src/components/include/Main";
import Contact from "./components/screens/Contact";
import Single from "./components/screens/Single";
import React, { useState, useEffect } from "react";

export const UserContext = React.createContext();

function App() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user_data")));
    setLoading(false);
  }, []);


  return loading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <UserContext.Provider value={{userData}}>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/contact" component={Contact} />
            <Route path="/single" component={Single} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
