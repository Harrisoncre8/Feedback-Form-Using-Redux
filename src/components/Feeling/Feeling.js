import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Feeling extends Component {

    // On click, routes to Understanding Component
    goToUnderstand = () => {        
        this.props.history.push('/understanding');
    }

    render() {
        return (
            <>
                <button onClick={this.goToUnderstand}>Next</button>
            </>
        );
    }
}

export default withRouter(Feeling);