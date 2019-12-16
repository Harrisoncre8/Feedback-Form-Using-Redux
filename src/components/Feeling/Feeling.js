import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';

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
            this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling });
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
                <h3>1 - I'm stressed <br/> 5 - I'm feeling great</h3>
                <TextField 
                    type='number' 
                    placeholder='Feeling?' 
                    max='5'
                    value={this.state.feeling} 
                    onChange={(event)=>this.handleChange(event)} 
                />
                <br/>
                <br/>
                <Button variant="contained" color="primary" size="small" type='submit'>Next</Button>
            </form>
        );
    }
}

export default (withRouter(connect()(withStyles()(Feeling))));