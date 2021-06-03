/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { ExpansionPanel } from '@paretointel/react-component-library'

import RiskGrid from '../risk-grid'
import LinkOutbound from '../link-outbound'

import styles from '../../library/styles/topten.styles'

const ListItem = ({item={}}) => {
    console.log('item: ',item)
    const {
        rank='',
        title='',
        description='',
        content='',
        url='',
        risks={},
    } = item
    console.log('risks: ',risks)
    const [expanded, setExpanded] = useState(rank===2)
    function handleExpansion () {
        setExpanded(!expanded)
    }
    // const itemId = rank+'-item'
    return (
        <ExpansionPanel
            expanded={expanded}
            title={<span style={{...styles.flexRow, alignItems: 'center', justifyContent: 'start'}}>
                <div style={styles.titleStyle}><span style={styles.numberStyle}>{rank}</span>{title}</div>
            </span>}
            onChange={handleExpansion}
        >
            <div style={{...styles.flexCol, ...styles.flexCenter}}>
                <blockquote style={{fontSize:'1.5rem',padding:'0.875em 1.25rem',margin:'0',background:'lightblue',borderRadius:'1rem'}}>{description}</blockquote>
                <p style={styles.paragraphStyles}>{content}</p>
                <LinkOutbound text={'read more...'} tooltip={'opens new browser window/tab'} url={url}/>
                <RiskGrid rank={rank} />
            </div>
        </ExpansionPanel>
    )
}

export default ListItem