import React from 'react'

class Component extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let message = "I'm your component. Have at it."
        return (
            <div>
                {message}
            </div>
        )
    }
}

export default Component
