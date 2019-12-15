import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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
                        <input
                            type='number' 
                            placeholder='Support?' 
                            max='5'
                            value={this.state.support} 
                            onChange={(event)=>this.handleChange(event)} 
                        />
                        <button type='submit'>Next</button>
                </form>
                <button onClick={this.backToUnderstand}>Back</button>
            </section>
        );
    }
}

export default connect()(withRouter(Support));