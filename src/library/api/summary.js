import { useStaticQuery, graphql } from 'gatsby'

export const summary = useStaticQuery(graphql`
    {
        allDataJson {
            edges {
                node {
                    title
                    subtitle
                    description
                    domain
                    year
                    path
                }
            }
        }
    }
`)

export default summary
