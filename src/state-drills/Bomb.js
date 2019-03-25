import React from 'react'

class Bomb extends React.Component {

  state = {
            content: "tick",
            count: 0
        }

    componentDidMount(){
       this.interval = setInterval( () => {
        
            console.log(this.state.count)
            this.setState(
                {
                    count: this.state.count + 1
                }
            )
        }, 1000)

    }

    componentWillUnmount()
    {
        clearInterval(this.interval)
    }

    determinetext() {
        var count = this.state.count;

        if (count >= 8)
        {
            clearInterval(this.interval)
            return 'BOOM!!!!!'
        }

        else if (count % 2 === 0)
       {
           return 'tick'
       }
        else return 'tock'
      
    }

    render ()
    {
        
        return (<div>
            <p>{this.determinetext()}</p>
        </div>
        )
    }
}

export default Bomb;