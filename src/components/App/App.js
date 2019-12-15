import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
// React Router
import { HashRouter as Router, Route} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>

          <div>
            <Route exact path="/" component={ Feeling } />
            <Route path="/understanding" component={ Understanding } />
            <Route path="/support" component={ Support } />
            <Route path="/comment" component={ Comment } />
            <Route path="/review" component={ Review } />
            <Route path="/success" component={ Success } />
            <Route path="/admin" component={ Admin } />
          </div> 
        </Router>
      </div>
    );
  }
}

export default connect()(App);
