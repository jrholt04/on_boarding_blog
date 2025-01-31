//File: about.js
//Jackson Holt about page 
//Awesome Inc 
import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../componets/layout'
import Seo from '../componets/seo.js'

const AboutPage = () => {
    return (
    <Layout pageTitle='About Page'>
        <div>
            <h1>
                About Me
            </h1>
            <p>
                I am a junoir CS student at Transy. I also play soccer and I am the president of pike
            </p>
        </div>
    </Layout>
    )
}

export const Head = () => <Seo title='About Page'/>

export default AboutPage