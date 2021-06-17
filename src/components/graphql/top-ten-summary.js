import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import LinkOutbound from '../link-outbound'

import styles from '../../library/styles/topten.styles'

const TopTenSummary = () => {
    const data = useStaticQuery(graphql`
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
    return <>
        {data?.allDataJson?.edges.map(({node},i)=>{
            // console.dir(node)
            const {title,subtitle,description,domain,path,year}=node
            if (!title) return null
            const urlOWASP = `${domain}/${path}/${year}`
            const textOWASP = 'See official OWASP site for more details'
            return (<div key={i} style={{padding:'1rem'}}>
                <hgroup style={styles.reset}>
                    <h1 style={styles.reset}>{title} - {year}</h1>
                    <h2 style={styles.reset}>{subtitle}</h2>
                </hgroup>
                <p>
                    {description}
                </p>
                <LinkOutbound text={'read more'} tooltip={textOWASP} url={urlOWASP} />
            </div>)
        })}
    </>
}

export default TopTenSummary
