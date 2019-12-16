import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
                    <h3>1 - I'm totally lost <br/> 5 - I've got this</h3>
                    <TextField
                        type='number' 
                        placeholder='Understanding?' 
                        max='5'
                        value={this.state.understand} 
                        onChange={(event)=>this.handleChange(event)} 
                    />
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary" size="small" onClick={this.backToFeeling}>Back</Button>
                    <>&nbsp;</>
                    <Button variant="contained" color="primary" size="small" type='submit'>Next</Button>
                </form>
            </section>
        );
    }
}

export default (withRouter(connect()(withStyles()(Understanding))));