import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './pages/Projects';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;