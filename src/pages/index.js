// Step 1: Import React
import * as React from 'react'
import Layout from '../componets/layout.js'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
        <div>
         <p>I'm making this by following the Gatsby Tutorial.</p>
         <StaticImage
          alt="the pic did't f'ing load"
          src="../images/IMG_6872.JPG"
        />
        </div>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage