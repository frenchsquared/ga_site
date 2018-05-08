import React from "react"
import Link from "gatsby-link"

// load another file
import Counter from "./counter"

export default ({data}) => <div style={{color: 'red'}}>
                        <h1>Hello world! {data.site.siteMetadata.title}</h1>
                        
                        <p>this is a paragraph {data.site.siteMetadata.author}</p>
                        <hr/>
                        <Counter color="blue" />
                        <hr/>
                        <img src="http://gordonfrench.com/15-Z28/right-side.jpg"/>
                        <p>npm run build</p>
                     </div>

export const query = graphql`
    query FirstQuery {
        site {
            siteMetadata {
                title
                author
            }
        }
    }
`
