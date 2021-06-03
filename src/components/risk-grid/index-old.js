/* eslint-disable react/prop-types */
import * as React from 'react'
import styled from 'styled-components'

const styles={
    heading:{
        display: 'flex',
        flexFlow: 'row nowrap',
        margin: '0',
        padding: '1rem 1rem 0 1rem',
    },
    label: {
        fontWeight: '700', 
        fontSize: '0.75em', 
        display: 'none',
    },
    tableLabel: {
    },
}

/* grid */
export const Grid = styled.div`
    display: grid;
    // justify-items: stretch;
    // align-items: stretch;
    // justify-content: stretch;
    // align-content: stretch;
    grid-template-columns: auto repeat(6, 1fr);
    grid-template-rows: auto repeat(6, auto);
    column-gap: 3px;
    row-gap: 3px;
    grid-template-areas:
        // 'col-labels col-agent col-exploitability col-prevelance col-detectability col-technical col-business'
        'label-type agent-type exploitability-type prevelance-type detectability-type technical-type business-type'
        'label-name agent-name exploitability-name prevelance-name detectability-name technical-name business-name'
        'label-severity agent-severity exploitability-severity prevelance-severity detectability-severity technical-severity business-severity'
        'label-description agent-description exploitability-description prevelance-description detectability-description technical-description business-description';
    margin: 0;
    padding: 1rem;
    background:rgba(255,127,0,0.125);
`
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
export const GridColAgent = styled(GridCol)`
    grid-area:'col-agent';
    background:rgba(255,255,127,0.5);
`
export const GridColExploitability = styled(GridCol)`
    grid-area:'col-exploitability';
    background:rgba(127,255,255,0.5);
`
export const GridColPrevelance = styled(GridCol)`
    grid-area:'col-prevelance';
    background:rgba(255,127,127,0.5);
`
export const GridColDetectability = styled(GridCol)`
    grid-area:'col-detectability';
    background:rgba(255,127,127,0.5);
`
export const GridColTechnical = styled(GridCol)`
    grid-area:'col-technical';
    background:rgba(255,127,127,0.5);
`
export const GridColBusiness = styled(GridCol)`
    grid-area:'col-business';
    background:rgba(255,127,127,0.5);
`
/* grid cells */
export const GridCells = styled.div``
export const GridCell = styled.div`
    background:rgba(127,127,127,0.25);
    padding:0.5rem;
`
export const GridColHeader = styled(GridCell)`
    background:rgba(127,255,127,0.5)
`
export const GridRowHeader = styled(GridCell)`
    background: rgba(127,127,127,0.75);
    color: white;
    font-weight: 400;
    font-size: 0.875em;
    font-family: 'Menlo','Lucida Console','Monaco',monospace;
    letter-spacing: 1px;
    text-align: right;
`
export const GridCellType = styled(GridCell)`
    background:rgba(127,255,127,0.25);
`
export const GridCellName = styled(GridCell)`
    background:rgba(255,127,127,0.25);
`
export const GridCellSeverity = styled(GridCell)`
    background:rgba(127,127,255,0.25);
`
export const GridCellDescription = styled(GridCell)``

const RiskListItem = ({ label, type, severity, description }) => {
    return (
        <>
            <GridCellType style={{gridArea:`${label}-type`}}>{type||'n/a'}</GridCellType>
            <GridCellName style={{gridArea:`${label}-name`}}>{label||'n/a'}</GridCellName>
            <GridCellSeverity style={{gridArea:`${label}-severity`}}>{severity||'n/a'}</GridCellSeverity>
            <GridCellDescription style={{gridArea:`${label}-description`}}>{description||'n/a'}</GridCellDescription>
        </>
    )
}

const RiskGrid = ({item={}}) => {
    const {rank='',title='',ratings=[]}=item
    const columnSize = 100/ratings.length+'%'
    return (<div key={rank}>
        <h3 style={{...styles.heading}}>{rank} - {title}</h3>
        {/* <Grid> */}
        {/* START header row for column labels */}
        {/* {['labels', 'agent', 'exploitability', 'prevelance', 'detectability', 'technical', 'business'].map(heading => <GridColHeader key={`col-${heading}`} style={{gridArea:`col-${heading}`}}><div style={styles.tableLabel}>{heading}</div></GridColHeader>)} */}
        {/* START row colors */}
        {['type','name','severity','description']
            .map(heading => <GridRow key={`row-${heading}`} style={{gridArea:`row-${heading}`}} />)}
        {/* START columns colors */}
        {/* {['agent', 'exploitability', 'prevelance', 'detectability', 'technical', 'business']
                .map(heading => <GridCol key={`col-${heading}`} style={{gridArea:`col-${heading}`}} />)} */}
        <GridColAgent key={'GridColAgent'} />
        <GridColExploitability key={'GridColExploitability'} />
        <GridColPrevelance key={'GridColPrevelance'} />
        <GridColDetectability key={'GridColDetectability'} />
        <GridColTechnical key={'GridColTechnical'} />
        <GridColBusiness key={'GridColBusiness'} />
        {/* START heading column */}
        {['type','name','severity','description'].map(heading => <GridRowHeader key={`label-${heading}`} style={{gridArea:`label-${heading}`}}><div style={styles.tableLabel}>{heading}</div></GridRowHeader>)}
        {/* START content columns */}
        {ratings.map(({label,type,severity,description},j) => <RiskListItem key={`risk-ratings--${j}`} label={label} type={type} severity={severity} description={description} size={columnSize} />)}
        {/* </Grid> */}
        <hr />
    </div>)
}

export default RiskGrid