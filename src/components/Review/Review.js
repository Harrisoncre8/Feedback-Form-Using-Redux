import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class Review extends Component {
    
    state = {
        feeling: this.props.reduxState.feelingReducer,
        understand: this.props.reduxState.understandReducer,
        support: this.props.reduxState.supportReducer,
        comment: this.props.reduxState.commentReducer
    }

    backToComment = () => {
        this.props.history.push('/comment');
    }

    // On submit, send to DB
    handleSubmit = (event) => {
        event.preventDefault();
        // Axios request to server to add feedback
        axios.post('/feedback', this.state)
        .then( response => {
            console.log('Adding feedback', this.state);
            this.props.history.push('/success');
        })
        .catch( error => {
            console.log('Error with POST', error);
        })
    }

    render() {
        return (
            <section>
                <header>
                    <h1>Review Your Feedback</h1>
                </header>
                <form onSubmit={this.handleSubmit}>
                    <p>Feelings: {this.props.reduxState.feelingReducer}</p>
                    <p>Understanding: {this.props.reduxState.understandReducer}</p>
                    <p>Support: {this.props.reduxState.supportReducer}</p>
                    <p>Comments: {this.props.reduxState.commentReducer}</p>
                    <Button variant="contained" color="primary" size="small" type="submit">Submit</Button>
                </form>
                <br/>
                <Button variant="contained" color="primary" size="small" onClick={this.backToComment}>Back</Button>
            </section>
        );
    }
}

const putPropsOnReduxState = (reduxState) => ({
    reduxState
})

export default (withRouter(connect(putPropsOnReduxState)(withStyles()(Review))));