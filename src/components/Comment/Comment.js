import React, { Component } from 'react';

class Comment extends Component {

      // On click, routes to Review Component
      goToReview = () => {        
        this.props.history.push('/review');
    }

    render() {
        return (
            <>
                <button onClick={this.goToReview}>Next</button>
            </>
        );
    }
}

export default Comment;