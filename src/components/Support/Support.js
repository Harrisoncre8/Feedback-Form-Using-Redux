import React, { Component } from 'react';

class Support extends Component {

     // On click, routes to Comment Component
     goToComment = () => {        
        this.props.history.push('/comment');
    }

    render() {
        return (
            <>
                <button onClick={this.goToComment}>Next</button>
            </>
        );
    }
}

export default Support;