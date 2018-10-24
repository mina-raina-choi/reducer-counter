import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContainer';

class App extends Component {
    render() {
        return (
            <div>
                Counter
                <CounterContainer/>
            </div>
        )
    }
}

export default App;