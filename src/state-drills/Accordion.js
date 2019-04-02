import React from 'react';

class Accordion extends React.Component {

    static defaultProps = {sections:[]}

    state = {
        currentContentIndex: null,
    }

    renderButtons () {
        console.log("renderedbuttons");
        const displayedContent = this.props.sections[this.state.currentContentIndex];

        return (
        this.props.sections.map((section, index) => (
            <li> 
               <button onClick={() => this.handleClick(index)}> {section.title}</button>
               {this.state.currentContentIndex == index && (
               <p> {displayedContent.content} </p> )}
            </li>
        )))

        }

    handleClick (index) {
        console.log("button clicked at", index)
        this.setState( {currentContentIndex: index} )
        this.renderContent()
    }

    renderContent () {
        console.log("rendered content")
        const displayedContent = this.props.sections[this.state.currentContentIndex];
        return (
            <p> {displayedContent.content} </p>
        )

    }
    
    render () {

        return (
        <ul> 
            {this.renderButtons()}
        </ul>
        )
    }
}

export default Accordion;