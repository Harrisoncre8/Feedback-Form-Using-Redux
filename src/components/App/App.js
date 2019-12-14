import React, { Component } from 'react';
import './App.css';
import Feeling from '../Feeling/Feeling';
// React Router
import { HashRouter as Router, Route} from 'react-router-dom';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';

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
          </div> 
        </Router>
      </div>
    );
  }
}

export default App;
