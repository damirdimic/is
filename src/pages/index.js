import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
//import Karta from "../components/karta"
//import NaslovnaHeader from "../components/naslovnaheader" <NaslovnaHeader />
import Layout from "../components/layout"
import Servis from "../components/servisi"
import Hero from "../components/hero"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    
    
    <Servis />
  </Layout>
)

export default IndexPage
