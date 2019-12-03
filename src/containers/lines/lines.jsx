import React, { Component } from 'react';



class LinesContainer extends Component {

    constructor(props) {
        super(props)
        console.log(props);

        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <div>
                <h1>This is Lines Container</h1>
            </div>
        )
    }
}

export default LinesContainer;