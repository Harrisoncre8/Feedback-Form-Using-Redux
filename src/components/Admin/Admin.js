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
                                        <td><button>Delete</button></td>
                                   </tr>)
                        })}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default Admin;