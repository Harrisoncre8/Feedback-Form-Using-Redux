import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Review extends Component {

    state = {
        feelings: this.props.reduxState.feelingReducer.map( (value, i) => {
            return(<p key={i} value={value}>Feelings: {value.feelings}</p>)
        }),
        understand: this.props.reduxState.understandReducer.map( (value, i) => {
            return(<p key={i} value={value}>Understanding: {value.understand}</p>)
        }),
        support: this.props.reduxState.supportReducer.map( (value, i) => {
            return(<p key={i} value={value}>Support: {value.support}</p>)
        }),
        comment: this.props.reduxState.commentReducer.map( (value, i) => {
            return(<p key={i} value={value}>Comments: {value.comment}</p>)
        })

    }

    handleSubmit = () => {

    }

    render() {
        return (
            <section>
                <header>
                        <h1>Review Your Feedback</h1>
                    </header>
                <div>
                    {this.state.feelings}
                    {this.state.understand}
                    {this.state.support}
                    {this.state.comment}
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </div>
            </section>
        );
    }
}

const putPropsOnReduxState = (reduxState) => ({
    reduxState
})

export default withRouter(connect(putPropsOnReduxState)(Review));