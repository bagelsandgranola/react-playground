import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {
    static defaultProps =
    {
        count: 0,
        step: 1,
    };
    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        
        this.state = {count:0}
    }

handleButtonClick = () =>  {
    console.log('props in handleButtonClick', this.props)
    console.log('state in handleButtonClick', this.state)
    var stepNum = this.props.step;
    console.log(stepNum);
    this.setState({ count: this.state.count + stepNum})
}

render() {
    return (
        <div>
            <p>The current count: {this.state.count}</p>
            <button
            onClick= {this.handleButtonClick}
            >
                Add 1
            </button>
        </div>
    )
}

}

export default Counter;