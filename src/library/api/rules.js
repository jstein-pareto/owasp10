import { useStaticQuery, graphql } from 'gatsby'

export const rules = useStaticQuery(graphql`
    {
        allDataJson {
            edges {
                node {
                    content {
                        content
                        description
                        rank
                        path
                        title
                        url
                    }
                }
            }
        }
    }
`)

export default rules
