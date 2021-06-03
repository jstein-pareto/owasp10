/* eslint-disable react/prop-types */
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ListItem from '../list-item'

import styles from '../../library/styles/topten.styles'

const TopTenList = ({rank=''}) => {
    const {allDataJson={}} = useStaticQuery(graphql`
      {
        allDataJson {
          nodes {
            content {
              rank
              title
              description
              content
              url
              path
              risks {
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
                impacts {
                  description
                  label
                  severity
                }
              }
            }
            id
            description
            domain
            year
            title
            subtitle
            path
          }
        }
        }
    `)
    // console.log('data: ', data)
    const topTenList = allDataJson?.nodes?.[0]?.content || []
    return (
        <ol key={`list-${rank}`} style={{...styles.reset, ...styles.listStyles, margin:'-1rem'}}>
            {topTenList.map(item => (
                <li key={`list-${rank}-${item.rank}`} style={{ ...styles.listItemStyles, color: item.color }}>
                    <ListItem item={item} />
                </li>
            ))}
        </ol>
    )
}

export default TopTenList