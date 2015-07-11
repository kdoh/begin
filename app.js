import React from 'react'
import Component from './src/component.js'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<Component />)
    }
}

React.render(<App />, document.querySelector('#app'))
