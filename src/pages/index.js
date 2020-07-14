import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../css/main_css.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Makaira Indica" />
    <div class="w3-container w3-content w3-center w3-padding-64" id="myProfile">
        <h2 class="w3-wide">About Me</h2>
        <p class="w3-opacity"><i>Programmer</i></p>
        <p class="w3-justify">I'm a Senior Programmer who knows several programming languages. At the moment I'm focusing on the solution architecture of an enterprise application, so the application can adapt to technological developments .</p>
    </div> 

    <div class="w3-container w3-content w3-padding-64" id="contact">
        <h2 class="w3-wide w3-center">CONTACT</h2>
        <p class="w3-opacity w3-center"><i>Fan? Drop a note!</i></p>
        <div class="w3-row w3-padding-32">
        <div class="w3-col m6 w3-large w3-margin-bottom">
        </div>
        </div>
    </div>

    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
