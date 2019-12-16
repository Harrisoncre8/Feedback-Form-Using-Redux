import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Support extends Component {

    state = {
        support: ''
    }

    // On click, send to redux, back to Understanding Component
    backToUnderstand = () => {        
            this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support });
            this.props.history.push('/understanding');
    }

    // On click, routes to Comment Component
    goToComment = (event) => {        
        event.preventDefault();
        if(this.state.support === ''){
            alert('Support form cannot be blank.')
        } else {
            this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support });
            this.props.history.push('/comment');
        }
    }

    // Change local state in Support Component
    handleChange = (event)=>{
        this.setState({
          support: event.target.value
        })
    }

    render() {
        return (
            <section>
                <form onSubmit={this.goToComment}>
                    <h2>How well are you being supported?</h2>
                    <h3>1 - I feel abandoned <br/> 5 - I feel supported</h3>
                        <TextField
                            type='number' 
                            placeholder='Support?' 
                            max='5'
                            value={this.state.support} 
                            onChange={(event)=>this.handleChange(event)} 
                        />
                        <br/>
                        <br/>
                        <Button variant="contained" color="primary" size="small" onClick={this.backToUnderstand}>Back</Button>
                        <>&nbsp;</>
                        <Button variant="contained" color="primary" size="small" type='submit'>Next</Button>
                </form>
            </section>
        );
    }
}

export default (withRouter(connect()(withStyles()(Support))));