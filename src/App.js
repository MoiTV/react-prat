import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        console.log('constrctor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('unmount');
    }

    render() {
        console.log('render');
        return <div>Hello World</div>;
    }
}

export default App;
