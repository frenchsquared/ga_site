import React from "react"
import Link from "gatsby-link"

export default ({ children }) =>
    <div>
        <div>
            <Link to="/">Home</Link> | <Link to="/page-2">Page 2</Link>
        </div>

        {children()}

        <div>&copy; Footer</div>
    </div>
