import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {

    state = {
        feedbackList: []
    }

    componentDidMount(){
        this.getFeedback()
    }
    
    // GET feedback from server
    getFeedback = () => {
        axios.get('/feedback')
        .then( response => {
            console.log('Back from server with:', response.data);
            // Set data to local state
            this.setState({
                feedbackList: response.data
            })
        })
        .catch( error => {
            console.log('Error getting feedback', error);
        })
    }

    // DELETE feedback in DB with confirmation
    deleteFeedback = (idToDelete) => {
        if(window.confirm('Are you sure you want to delete this feedback?')){
            axios.delete(`/feedback/${idToDelete}`)
        .then(response => {
            this.getFeedback();
        })
        .catch( error => {
            console.log('Error deleting item', error);
        })
        }
    }

    render(){
        return(
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Flag</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedbackList.map( value => {
                            return(<tr key={value.id}>
                                        <td>{value.feeling}</td>
                                        <td>{value.understanding}</td>
                                        <td>{value.support}</td>
                                        <td>{value.comments}</td>
                                        <td><button>Flag</button></td>
                                        <td><button 
                                            onClick={ () => this.deleteFeedback(value.id)}>
                                            Delete</button>
                                        </td>
                                   </tr>)
                        })}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default Admin;