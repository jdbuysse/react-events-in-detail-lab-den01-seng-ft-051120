import React, {Component} from 'react';


export default class CoordinatesButton extends Component{
    handleClick = (event) => {
        let coords = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coords)

    }

    render(){
        //console.log(this.props)
        return <button onClick={this.handleClick}>Button</button>
    }
}
