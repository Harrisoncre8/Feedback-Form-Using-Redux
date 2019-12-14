import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Review extends Component {
    render() {
        return (
            <section>
                <header>
                        <h1>Review Your Feedback</h1>
                    </header>
                <form>
                    {this.props.reduxState.feelingReducer.map( (value, i) => {
                        return(<p key={i} value={value}>Feelings: {value.feelings}</p>)
                    })}

                    {this.props.reduxState.understandReducer.map( (value, i) => {
                        return(<p key={i} value={value}>Understanding: {value.understand}</p>)
                    })}

                    {this.props.reduxState.supportReducer.map( (value, i) => {
                        return(<p key={i} value={value}>Support: {value.support}</p>)
                    })}
                    
                    {this.props.reduxState.commentReducer.map( (value, i) => {
                        return(<p key={i} value={value}>Comments: {value.comment}</p>)
                    })}
                    <button>Submit</button>
                </form>
            </section>
        );
    }
}

const putPropsOnReduxState = (reduxState) => ({
    reduxState
})

export default withRouter(connect(putPropsOnReduxState)(Review));