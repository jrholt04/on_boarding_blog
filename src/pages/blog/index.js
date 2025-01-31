import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../componets/layout'
import Seo from '../../componets/seo.js'
import{
  navLinks,
  navLinkItem,
  navLinkText,
} from '/Users/jacksonholt/Developer/awesomeInc/on_boarding_blog/src/componets/layout.module.css'

const BlogPage = ({ data }) => {

    return (
        <Layout pageTitle='My Blog Page'>
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <Link to={`/blog/${node.frontmatter.slug}`} className={navLinkText}>
                          {node.frontmatter.title}
                        </Link>
                        <p>Posted: {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )

}

export const name_querey = graphql`
    query MyQuery {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  } 
`

export const Head = () => <Seo title='Blog Page'/>

export default BlogPage