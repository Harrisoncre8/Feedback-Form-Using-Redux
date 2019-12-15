import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
// React Router
import { HashRouter as Router, Route} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import Success from '../Success/Success';

class App extends Component {

  componentDidMount(){
    this.getFeedback()
  }

  // GET feedback from server
  getFeedback = () => {
    axios.get('/feedback')
    .then( response => {
        console.log('Back from server with:', response.data);
        // Dispatch this to redux state
        this.props.dispatch({
            type: 'SET_FEEDBACK', 
            payload: response.data})
    })
    .catch( error => {
            console.log('Error getting feedback', error);
    })
  }

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
          </div> 
        </Router>
      </div>
    );
  }
}

export default connect()(App);
