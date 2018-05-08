import React from "react"
import Link from "gatsby-link"
import Counter from "./counter"

export default () => <div style={{color: 'red'}}>
                        <h1>Hello world!</h1>
                        <p>this is a paragraph</p>
                        <Link to="/">Home</Link> | <Link to="/page-2">Page 2</Link><br/>
                        <hr/>
                        <Counter color="blue" />
                        <hr/>
                        <img src="http://gordonfrench.com/15-Z28/right-side.jpg"/>
                        <p>npm run build</p>
                     </div>
