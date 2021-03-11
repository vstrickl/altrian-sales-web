import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

export default function PageTemplate({ data }) {

    const page = data.page

  return (
    <Layout>
      <h2>{page.Title}</h2>
      <div dangerouslySetInnerHTML={{ __html: page.text }} />
    </Layout>
  )
}

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    page: strapiPages(slug: {eq: $slug}) {
        Title
        text
      }
  }
`