import React from "react"
import Link from "gatsby-link"

class Counter extends React.Component {
    constructor(){
        super()
        this.state = { count: 1 }
    }
    render(){
        return <div>
                    <h1>Counter</h1>
                    <Link to="/">Home</Link> | <Link to="/page-2">Page 2</Link> | <Link to="/counter">Counter</Link><br/>
                    <p>current count: {this.state.count}</p>
                    <button onClick={() => this.setState( {count: this.state.count + 1} )} >plus</button>
                    <button onClick={() => this.setState( {count: this.state.count - 1} )} >minus</button>
               </div>
    }
}

export default Counter