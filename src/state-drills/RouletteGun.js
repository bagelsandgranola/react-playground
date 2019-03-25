import React from 'react'

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    };

    state = {
        chamber: null,
        spinningTheChamber: false,
    };

componentWillUnmount() {
    clearTimeout(this.timeout)
}

handleButtonClick = () => {
    console.log("button clicked")
    this.setState({
        spinningTheChamber: true,
})

    this.timeout = setTimeout(() => {
        const randomChamber = Math.ceil(Math.random() *8)
        console.log(randomChamber);
    this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
})
}, 2000)

}
determinetext () {
//const { chamber, spinningTheChamber } = this.state
//const { bulletInChamber} = this.props

if (this.state.spinningTheChamber == true)
{
return "spinning the chamber and pulling the trigger!"
}
else if (this.state.chamber == this.props.bulletInChamber)
{
return "BANG!!!"
}
else return "you're safe"
}
render ()
{
return(
<div>
<p> {this.determinetext()} </p>
<button onClick={() => this.handleButtonClick()}> Pull the trigger! </button>
</div>
)
}
}

export default RouletteGun;