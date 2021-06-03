import { useStaticQuery, graphql } from 'gatsby'

export const risks = useStaticQuery(graphql`
    {
        allDataJson {
            edges {
                node {
                    content {
                        rank
                        risks {
                            impacts {
                                description
                                label
                                severity
                            }
                            weaknesses {
                                description
                                label
                                severity
                            }
                            vectors {
                                description
                                label
                                severity
                            }
                        }
                    }
                }
            }
        }
    }
`)

export default risks
