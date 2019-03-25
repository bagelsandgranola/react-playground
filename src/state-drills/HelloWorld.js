import React from 'react'

class HelloWorld extends React.Component {
    
   
    constructor(props) {
        super(props)

        this.state ={
            who: "world"
        }
    }
    
    render () {
    
    console.log(this.state.who)
    return (
     <div>
        <p>Hello, {this.state.who}</p>

        <button id="world" value="World" onClick={() => this.setState( {who: 'world'})}> World</button>
        <button id= "friend" value="Friend" onClick={() => this.setState( {who: 'friend'})}>Friend</button>
        <button id="react" value="React" onClick={() => this.setState( {who: 'react'})}> React</button>
    </div>
    )}
        
}

export default HelloWorld;