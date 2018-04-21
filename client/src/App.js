import React, { Component } from 'react';
import Counter from './components/Counter';
import RoutesContainer from './routes/RoutesContainer';

class App extends Component {
    render() {
        return (
            <div>
                <RoutesContainer />
            </div>
        );
    }
}

export default App;
