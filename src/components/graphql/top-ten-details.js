/* eslint-disable react/prop-types */
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ListItem from '../list-item'

import styles from '../../library/styles/topten.styles'

const TopTenDetails = ({id=''}) => {
    const data = useStaticQuery(graphql`
      {
        allDataJson {
          edges {
            node {
              content {
                content
                description
                id
                path
                title
                url
              }
            }
          }
        }
      }
    `)
    const list = data?.allDataJson?.edges?.[0]?.node?.content || []
    return (
        <ol key={`list-${id}`} style={{...styles.listStyles, margin:'-1rem'}}>
            {list.map(item => (
                <li key={`list-${id}-${item.id}`} style={{ ...styles.listItemStyles, color: item.color }}>
                    <ListItem item={item} />
                </li>
            ))}
        </ol>
    )
}

export default TopTenDetails