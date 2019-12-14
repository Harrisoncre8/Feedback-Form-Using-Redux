import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Comment extends Component {

    state = {
        comment: ''
    }

    // On click, send to redux, routes to Review Component
    goToReview = (event) => {
        event.preventDefault();
        if(this.state.comment === ''){
            alert('Comment form cannot be blank.')
        } else {
            this.props.dispatch({ type: 'ADD_COMMENT', payload: this.state });
            this.props.history.push('/review');
        }
    }

    // Change local state in Support Component
    handleChange = (event, propertyName)=>{
        this.setState({
          ...this.state,
          [propertyName]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.goToReview}>
                <h2>Any comments you want to leave?</h2>
                <input
                    type='text' 
                    placeholder='Comments' 
                    value={this.state.comment} 
                    onChange={(event)=>this.handleChange(event, 'comment')} 
                />
                <button type='submit'>Next</button>
            </form>
        );
    }
}

export default connect()(withRouter(Comment));