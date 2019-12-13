import React, { Component } from 'react';

class Understanding extends Component {

       // On click, routes to Supprt Component
       goToSupport = () => {        
        this.props.history.push('/support');
    }

    render() {
        return (
            <>
                <button onClick={this.goToSupport}>Next</button>
            </>
        );
    }
}

export default Understanding;