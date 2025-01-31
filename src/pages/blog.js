import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../componets/layout'
import Seo from '../componets/seo.js'

const BlogPage = ({ data }) => {

    return (
        <Layout pageTitle='Blog Page'>
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const shit = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title='Blog Page'/>

export default BlogPage