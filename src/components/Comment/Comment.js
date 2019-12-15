import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Comment extends Component {

    state = {
        comment: ''
    }

    // On click, send to redux, back to Support Component
    backToSupport = () => {
        this.props.dispatch({ type: 'ADD_COMMENT', payload: this.state.comment });
        this.props.history.push('/support');
    }

    // On click, send to redux, routes to Review Component
    goToReview = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_COMMENT', payload: this.state.comment });
        this.props.history.push('/review');
    }

    // Change local state in Support Component
    handleChange = (event)=>{
        this.setState({
         comment: event.target.value
        })
    }

    render() {
        return (
            <section>
                <form onSubmit={this.goToReview}>
                    <h2>Any comments you want to leave?</h2>
                    <input
                        type='text' 
                        placeholder='Comments'
                        value={this.state.comment} 
                        onChange={(event)=>this.handleChange(event)} 
                    />
                    <button type='submit'>Next</button>
                </form>
                <button onClick={this.backToSupport}>Back</button>
            </section>
        );
    }
}

export default connect()(withRouter(Comment));