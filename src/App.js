import React from "react";
import "./App.css";
import Mail from "./Mail/Mail";
import EmailList from "./EmailList/EmailList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import SendMail from "./SendMail/SendMail";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app_body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        <SendMail />
      </div>
    </Router>
  );
}

export default App;
