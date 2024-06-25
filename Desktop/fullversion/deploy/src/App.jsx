import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/main1.jsx';


const App = () => {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      <Footer />
    </Router>
  );
};

export default App;
