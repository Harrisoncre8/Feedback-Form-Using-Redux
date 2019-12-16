import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
                    <TextField
                        type='text' 
                        placeholder='Comments'
                        value={this.state.comment} 
                        onChange={(event)=>this.handleChange(event)} 
                    />
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary" size="small" onClick={this.backToSupport}>Back</Button>
                    <>&nbsp;</>
                    <Button variant="contained" color="primary" size="small" type='submit'>Next</Button>
                </form>
            </section>
        );
    }
}

export default  (withRouter(connect()(withStyles()(Comment))));