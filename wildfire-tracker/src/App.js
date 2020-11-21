import React, { Component } from 'react';
import Map from './components/Map';

class App extends Component {
    componentDidMount() {}

    render() {
        return <Map zoom={6} />;
    }
}

export default App;
