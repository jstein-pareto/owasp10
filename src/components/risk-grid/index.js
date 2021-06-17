/* eslint-disable react/prop-types */
import * as React from 'react'
import styled from 'styled-components'
// import { FiInfo } from 'react-icons/fi'
// import { Tooltip } from '@paretointel/react-component-library'

import styles from './risk-grid.styles'

/* grid elements */
export const GridRow = styled.div``
export const GridCol = styled.div``
/* grid rows */
export const GridRowType = styled(GridRow)`
    grid-area:'label-type';
    background:rgba(255,0,0,0.5);
`
/* grid cols */
export const GridColLabels = styled(GridCol)`
    grid-area:'col-labels';
    background:rgba(127,127,127,0.5);
`
export const GridColVectors = styled(GridCol)`
    grid-area:'GridColVectors';
    background:rgba(255,0,0,0.5);
`
export const GridColWeaknesses = styled(GridCol)`
    grid-area:'GridColVectors';
    background:rgba(0,0,255,0.5);
`
export const GridColImpacts = styled(GridCol)`
    grid-area:'GridColVectors';
    background:rgba(0,255,0,0.5);
`

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
    font-size:1.125rem;
    font-weight:500;
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
    font-size:0.75rem;
    font-weight:300;
    text-align: left;
    vertical-align: top;
    height: 100%;
    // max-height: 2.5rem;
    // overflow: hidden;
    // display: -webkit-box;
    // -webkit-line-clamp: 3;
    // -webkit-box-orient: vertical;
    background-color: rgba(255,255,255,0.5);
`
const RiskItem = (props) => {
    console.log('props: ',props)
    const { label, severity, description, count=1 } = props
    return (
        <div style={{...styles.riskItem, width:`${100/count}%`, ...styles[`severity${severity}`]}}>
            <RiskItemLabel style={{gridArea:`${label}-name`}}>
                {label||'n/a'}
            </RiskItemLabel>
            <GridCellSeverity style={{gridArea:`${label}-severity`}}><span style={{...styles.severity}}>{severity||'n/a'}</span></GridCellSeverity>
            <GridCellDescription style={{gridArea:`${label}-description`}}>{description||'n/a'}</GridCellDescription>
        </div>
    )
}

const RiskGroup = ({items=[],type=''}) => {
    if (!items) return null
    const count = items.length || 1
    return <div style={styles.riskGroup}>
        <h3 style={styles.riskGroupLabel}>{type}</h3>
        <div style={styles.riskTypes}>
            {items.map((item={},i)=>{
                console.log('item: ',item)
                return (<RiskItem key={`vectors-${i}`} {...item} count={count} />)
            })}
        </div>
    </div>
}

const RiskGrid = ({risks={}}) => {

    // console.log(risks)
    const {vectors=[],weaknesses=[],impacts=[]} = risks

    return (<div style={{...styles.riskGrid}}>
        <RiskGroup type='Vectors' items={vectors} />
        <RiskGroup type='Weaknesses' items={weaknesses} />
        <RiskGroup type='Impacts' items={impacts} />
    </div>)

    // const {id='',title='',ratings=[]}=item
    // const columnSize = 100/ratings.length+'%'
    // return (<div key={id}>
    //     <h3 style={{...styles.heading}}>{id} - {title}</h3>
    //     {/* <Grid> */}
    //     {/* START header row for column labels */}
    //     {/* {['labels', 'agent', 'exploitability', 'prevelance', 'detectability', 'technical', 'business'].map(heading => <GridColHeader key={`col-${heading}`} style={{gridArea:`col-${heading}`}}><div style={styles.tableLabel}>{heading}</div></GridColHeader>)} */}
    //     {/* START row colors */}
    //     {['type','name','severity','description']
    //         .map(heading => <GridRow key={`row-${heading}`} style={{gridArea:`row-${heading}`}} />)}
    //     {/* START columns colors */}
    //     {/* {['agent', 'exploitability', 'prevelance', 'detectability', 'technical', 'business']
    //             .map(heading => <GridCol key={`col-${heading}`} style={{gridArea:`col-${heading}`}} />)} */}
    //     <GridColVectors key={'GridColVectors'} />
    //     <GridColWeaknesses key={'GridColWeaknesses'} />
    //     <GridColImpacts key={'GridColImpacts'} />
    //     {/* START heading column */}
    //     {['type','name','severity','description'].map(heading => <GridRowHeader key={`label-${heading}`} style={{gridArea:`label-${heading}`}}><div style={styles.tableLabel}>{heading}</div></GridRowHeader>)}
    //     {/* START content columns */}
    //     {ratings.map(({label,type,severity,description},j) => <RiskItem key={`risk-ratings--${j}`} label={label} type={type} severity={severity} description={description} size={columnSize} />)}
    //     {/* </Grid> */}
    //     <hr />
    // </div>)
}

export default RiskGrid