import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feeling: ''
    }

    // On click, send to redux, routes to Understanding Component
    goToUnderstand = (event) => {  
        event.preventDefault();
        if(this.state.feeling === ''){
            alert('Feeling form cannot be left blank.')
        } else {
            this.props.dispatch({ type: 'ADD_FEELINGS', payload: this.state.feeling });
            this.props.history.push('/understanding');
        }
    }

    // Change local state in Feeling Component
    handleChange = (event)=>{
        this.setState({
          feeling: event.target.value
        })
    }
    
    render() {
        return (
            <form onSubmit={this.goToUnderstand}>
                <h2>How are you feeling today?</h2>
                <input 
                    type='number' 
                    placeholder='Feeling?' 
                    max='5'
                    value={this.state.feeling} 
                    onChange={(event)=>this.handleChange(event)} 
                />
                <button type='submit'>Next</button>
            </form>
        );
    }
}

export default connect()(withRouter(Feeling));