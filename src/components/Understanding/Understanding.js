import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understand: ''
    }

    // On click, send to redux, routes to Supprt Component
    goToSupport = (event) => {        
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_UNDERSTAND', payload: this.state });
        if(this.state.understand === ''){
            alert('Understanding form cannot be blank.')
        } else {
            this.props.history.push('/support');
        }
    }

    // Change local state in Understanding Component
    handleChange = (event, propertyName)=>{
        this.setState({
          ...this.state,
          [propertyName]: event.target.value
        })
    }

    render() {
        return (
                <form onSubmit={this.goToSupport}>
                    <h2>How well are you understanding the content?</h2>
                    <input
                        type='number' 
                        placeholder='Understanding?' 
                        max='5'
                        value={this.state.understand} 
                        onChange={(event)=>this.handleChange(event, 'understand')} 
                    />
                    <button type='submit'>Next</button>
                </form>
        );
    }
}

export default connect()(withRouter(Understanding));