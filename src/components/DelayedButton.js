import React, {Component} from 'react';

export default class DelayedButton extends Component{
    handleClick = (event) => {
        //const save = event.target
        event.persist()
        window.setTimeout(this.props.onDelayedClick(event), this.props.delay)
    }

    render(){
        return <button onClick={this.handleClick}>Delayed</button>
    }
}
