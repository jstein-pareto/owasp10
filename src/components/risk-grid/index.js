/* eslint-disable react/prop-types */
import * as React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
// import { FiInfo } from 'react-icons/fi'
// import { Tooltip } from '@paretointel/react-component-library'

import styles from './risk-grid.styles'

const labels = {
    vector: 'vector',
    weakness: 'weakness',
    impact: 'impact',

}

/* grid elements */
/* grid rows */
/* grid cols */
/* grid cells */
export const GridCell = styled.div`
    // background: rgba(127,127,255,0.25);
    padding: 0.5rem;
    margin:0;
    text-align: center;
    vertical-align: middle;
`
export const GridColHeader = styled(GridCell)`
    background:rgba(127,255,127,0.5)
`
export const GridRowHeader = styled(GridCell)`
    background: rgba(255,127,127,0.75);
    color: white;
    font-weight: 400;
    font-size: 0.875em;
    font-family: 'Menlo','Lucida Console','Monaco',monospace;
    letter-spacing: 1px;
    text-align: right;
`
export const RiskItemLabel = styled(GridCell)`
    font-size:1.25rem;
    font-weight:600;
    // margin: 0;
    padding: 0.25rem;
`
export const GridCellSeverity = styled(GridCell)`
    font-size:1.5rem;
    font-weight:700;
    background-color: black;
    color: white;
    &:before {
        font-size:1rem;
        font-weight:500;
        content:'severity: ';
    }
`
export const GridCellDescription = styled(GridCell)`
    font-size: 0.75rem;
    font-weight: 300;
    text-align: left;
    vertical-align: top;
    height: 100%;
    background-color: rgba(255,255,255,0.5);
`
const RiskItem = (props) => {
    // console.log('props: ',props)
    const { label, severity, description, count=1, type } = props
    return (
        <div style={{...styles.riskItem, width:`${100/count}%`, ...styles[`severity${severity}`]}}>
            <RiskItemLabel style={{gridArea:`${label}-name`}}>
                <div style={{textTransform:'lowercase'}}>{type}<br />{label||'n/a'}</div>
            </RiskItemLabel>
            <GridCellSeverity style={{gridArea:`${label}-severity`, ...styles.severity}}><span style={{}}>{severity||'?'}</span></GridCellSeverity>
            <GridCellDescription style={{gridArea:`${label}-description`}}>{description||'n/a'}</GridCellDescription>
        </div>
    )
}

const RiskGroup = ({items=[],type='',common}) => {
    console.log(type)
    console.log(common)
    if (!items) return null
    // if (common && type===labels.vector) items.unshift(common)
    // if (common && type===labels.impact) items.push(common)
    const count = items.length || 1
    return <div style={styles.riskGroup}>
        {/* <h4 style={styles.riskGroupLabel}>{type}</h4> */}
        <div style={styles.riskTypes}>
            {items.map((item={},i)=>{
                // console.log('item: ',item)
                return (<RiskItem key={`vectors-${i}`} {...item} count={count} type={type} />)
            })}
        </div>
    </div>
}

const RiskGrid = ({risks={}}) => {

    const {allDataJson={}} = useStaticQuery(graphql`{
        allDataJson {
            nodes {
                commonImpacts {
                    severity
                    label
                    description
                }
                commonVectors {
                    description
                    label
                    severity
                }
            }
        }
    }`)

    // console.log(risks)
    const {vectors=[],weaknesses=[],impacts=[]} = risks

    const commonVectors = allDataJson?.nodes?.[0]?.commonVectors || {}
    const commonImpacts = allDataJson?.nodes?.[0]?.commonImpacts || {}

    return (<div style={{...styles.riskGrid}}>
        <RiskGroup type={labels.vector} items={vectors} common={commonVectors} />
        <RiskGroup type={labels.weakness} items={weaknesses} />
        <RiskGroup type={labels.impact} items={impacts} common={commonImpacts} />
    </div>)

}

export default RiskGrid