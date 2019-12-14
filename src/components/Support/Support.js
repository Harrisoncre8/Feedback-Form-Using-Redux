import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        support: ''
    }

    // On click, routes to Comment Component
    goToComment = (event) => {        
        event.preventDefault();
        if(this.state.support === ''){
            alert('Support form cannot be blank.')
        } else {
            this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state });
            this.props.history.push('/comment');
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
            <form onSubmit={this.goToComment}>
                    <h2>How well are you being supported?</h2>
                    <input
                        type='number' 
                        placeholder='Support?' 
                        max='5'
                        value={this.state.support} 
                        onChange={(event)=>this.handleChange(event, 'support')} 
                    />
                    <button type='submit'>Next</button>
            </form>
        );
    }
}

export default connect()(withRouter(Support));