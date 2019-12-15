import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understand: ''
    }

    // On click, send to redux, back to Feeling Component
    backToFeeling = () => {        
            this.props.dispatch({ type: 'ADD_UNDERSTAND', payload: this.state.understand });
            this.props.history.push('/');
    }

    // On click, send to redux, routes to Supprt Component
    goToSupport = (event) => {        
        event.preventDefault();
        if(this.state.understand === ''){
            alert('Understanding form cannot be blank.')
        } else {
            this.props.dispatch({ type: 'ADD_UNDERSTAND', payload: this.state.understand });
            this.props.history.push('/support');
        }
    }

    // Change local state in Understanding Component
    handleChange = (event)=>{
        this.setState({
          understand: event.target.value
        })
    }

    render() {
        return (
            <section>
                <form onSubmit={this.goToSupport}>
                    <h2>How well are you understanding the content?</h2>
                    <input
                        type='number' 
                        placeholder='Understanding?' 
                        max='5'
                        value={this.state.understand} 
                        onChange={(event)=>this.handleChange(event)} 
                    />
                    <button type='submit'>Next</button>
                </form>
                <button onClick={this.backToFeeling}>Back</button>
            </section>
        );
    }
}

export default connect()(withRouter(Understanding));