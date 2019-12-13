import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feelings: ''
    }

    // On click, routes to Understanding Component
    goToUnderstand = (event) => {  
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_FEELINGS', payload: this.state });
        this.props.history.push('/understanding');
    }

    // Change local state in Feeling Component
    handleChange = (event, propertyName)=>{
        this.setState({
          ...this.state,
          [propertyName]: event.target.value
        })
    }
    
    render() {
        return (
            <form >
                <h2>How are you feeling today?</h2>
                <input 
                    type='number' 
                    placeholder='Feeling?' 
                    max='5'
                    value={this.state.feelings} 
                    onChange={(event)=>this.handleChange(event, 'feelings')} 
                />
                <button onClick={this.goToUnderstand}>Next</button>
            </form>
        );
    }
}

export default connect()(withRouter(Feeling));