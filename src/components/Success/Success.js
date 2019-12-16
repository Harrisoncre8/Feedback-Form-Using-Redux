import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
            <Button variant="contained" color="primary" size="small" onClick={this.handleRestart}>Leave New Feedback</Button>
            </>
        )
    }
}

const putPropsOnReduxState = (reduxState) => ({
    reduxState
})

export default (withRouter(connect(putPropsOnReduxState)(withStyles()(Success))));