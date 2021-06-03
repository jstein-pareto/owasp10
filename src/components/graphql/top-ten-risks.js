/* eslint-disable react/prop-types */
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ListItem from '../list-item'
import RiskGrid from '../risk-details'

import styles from '../../library/styles/topten.styles'

const TopTenRisks = () => {

    const data = useStaticQuery(graphql`
      fragment DataJsonContentRisksFragment on DataJsonContentRisks {
        weaknesses {
          severity
          label
          description
        }
        vectors {
          severity
          label
          description
        }
        impacts {
          description
          label
          severity
        }
      }
  `)

    return <pre>{JSON.stringify(data, null, 4)}</pre>

    // const nodes = data?.allDataJson?.nodes || []
    // console.log('nodes: ', nodes)

    // const merged = nodes
    //     .reduce((acc,obj)=>{
    //         const {risks,content} = obj
    //         if (risks != null) {
    //             return [...acc,risks]
    //         }
    //         if (content != null) {
    //             return [...acc,content]
    //         }
    //     },[])
    // console.log('merged: ',merged)

    // const unified = merged[0].map((obj,i)=>{
    //     // obj.title = merged?.[1]?.[i]?.title
    //     return {...obj, ...merged?.[1]?.[i]}
    // })
    // console.log('unified: ',unified)

    // return (
    //     <ol key={`list-${rank}`} style={{...styles.reset, ...styles.listStyles, margin:'-1rem'}}>
    //         {unified.map((item,i) => {
    //             return (
    //                 <li key={`list-${rank}-${item.rank}-${i}`} style={{ ...styles.listItemStyles, color: item.color, margin:'0' }}>
    //                     <RiskGrid item={item} />
    //                 </li>
    //             )
    //         })}
    //     </ol>
    // )
}

export default TopTenRisks