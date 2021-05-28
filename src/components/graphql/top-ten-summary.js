import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { FiExternalLink } from 'react-icons/fi'
import { Tooltip } from '@paretointel/react-component-library'

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
            id
          }
        }
      }
    }
  `)
    return <>
        {data?.allDataJson?.edges.map(({node},i)=>{
            console.dir(node)
            const {title,subtitle,description,domain,path,year}=node
            if (!title) return null
            const urlOWASP = `${domain}/${path}/${year}`
            const textOWASP = 'See official OWASP site for more details'
            return (<div key={i}>
                <hgroup style={styles.headingGroupStyle}>
                    <h1 style={styles.headingStyles}>{title} - {year}</h1>
                    <h2 style={styles.headingStyles}>{subtitle}</h2>
                    <h3 style={{...styles.headingStyles, position:'relative'}}>{description}
                        <span style={{marginLeft:'0.25em', position:'absolute', top:'50%', transform:'translateY(-50%)'}} onClick={() => window.open(urlOWASP)}>
                            <Tooltip display={textOWASP}>
                                <FiExternalLink color="#0093b2" size={20} />
                            </Tooltip>
                        </span>
                    </h3>
                </hgroup>
            </div>)
        })}
    </>
}

export default TopTenSummary
