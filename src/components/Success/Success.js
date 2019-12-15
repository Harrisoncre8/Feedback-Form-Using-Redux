import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Success extends Component{

    handleRestart = () => {
        this.props.dispatch({ type: 'ADD_FEELING', payload: 0 });
        this.props.dispatch({ type: 'ADD_UNDERSTAND', payload: 0 });
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: 0 });
        this.props.dispatch({ type: 'ADD_COMMENT', payload: '' });
        this.props.history.push('/');
    }
    
    render(){
        return(
            <>
            <h2>Thank You!</h2>
            <button onClick={this.handleRestart}>Leave New Feedback</button>
            </>
        )
    }
}

const putPropsOnReduxState = (reduxState) => ({
    reduxState
})

export default withRouter(connect(putPropsOnReduxState)(Success));