import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
                    <button type="submit">Submit</button>
                </form>
                <button onClick={this.backToComment}>Back</button>
            </section>
        );
    }
}

const putPropsOnReduxState = (reduxState) => ({
    reduxState
})

export default withRouter(connect(putPropsOnReduxState)(Review));

    // For Admin page:
    // {this.props.reduxState.setFeedbackReducer.map( (value, i) => {
    //     return(<p key={i} value={value}>Feelings: {value.feeling}</p>)
    //         })}

    // feelings: this.props.reduxState.feedbackReducer.map( (value, i) => {
    //     return(<p key={i} value={value}>Feelings: {value.feelings}</p>)
    // }),
    // understand: this.props.reduxState.feedbackReducer.map( (value, i) => {
    //     return(<p key={i} value={value}>Understanding: {value.understand}</p>)
    // }),
    // support: this.props.reduxState.feedbackReducer.map( (value, i) => {
    //     return(<p key={i} value={value}>Support: {value.support}</p>)
    // }),
    // comment: this.props.reduxState.feedbackReducer.map( (value, i) => {
    //     return(<p key={i} value={value}>Comments: {value.comment}</p>)
    // })