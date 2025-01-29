// Step 1: Import React
import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../componets/layout.js'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
        <div>
          <h1>Welcome to my Gatsby site!</h1>
          <p>I'm making this by following the Gatsby Tutorial.</p>
        </div>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage