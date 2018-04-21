import React, { Component } from 'react';
import PropTypes from 'proptypes';

class App extends Component {

    render() {
        let { children } = this.props;
        return (
            <div>
                { children }
            </div>
        );
    }
}

App.propTypes = {};

export default App;