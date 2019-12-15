import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


class Admin extends Component {

    componentDidMount(){
        this.getFeedback()
    }
    
    // GET feedback from server
    getFeedback = () => {
        axios.get('/feedback')
        .then( response => {
            console.log('Back from server with:', response.data);
            // Dispatch this to redux state
            this.props.dispatch({
                type: 'SET_FEEDBACK', 
                payload: response.data})
        })
        .catch( error => {
                console.log('Error getting feedback', error);
        })
    }

    render(){
        return(
            <section>
            </section>
        )
    }
}

export default connect()(Admin);