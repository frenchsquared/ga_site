import React from "react"
import Link from "gatsby-link"

class Counter extends React.Component {
    constructor(){
        super()
        this.state = { count: 1 }
    }
    render(){
        return <div>
                    <p>I am a color variable passed in: {this.props.color}</p>
                    <p>current count: {this.state.count}</p>
                    <button onClick={() => this.setState( {count: this.state.count + 1} )} >plus</button>
                    <button onClick={() => this.setState( {count: this.state.count - 1} )} >minus</button>
               </div>
    }
}

export default Counter