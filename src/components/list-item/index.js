/* eslint-disable react/prop-types */
import * as React from 'react'
import {ExpansionPanel, GridList, Tooltip} from '@paretointel/react-component-library'

import RiskDetails from '../risk-details'
import RuleDetails from '../rule-details'

import styles from '../../library/styles/topten.styles'

const ListItem = ({item={}}) => {
    const {id='',
        title='',
        description='',
        content=''} = item
    const [expanded, setExpanded] = React.useState(id==='A1')
    function handleExpansion () {
        setExpanded(!expanded)
    }
    const itemId = id+'-item'
    return (
        <ExpansionPanel
            expanded={expanded}
            title={<span style={{...styles.flexRow, alignItems: 'center', justifyContent: 'start'}}>
                <div style={styles.titleStyle}><span style={styles.numberStyle}>{id}</span>{title}</div>
                {/* <Tooltip display={description}><span style={styles.iconStyle}>i</span></Tooltip> */}
            </span>}
            onChange={handleExpansion}
        >
            <div style={{...styles.flexCol, ...styles.flexCenter}}>
                <p style={styles.paragraphStyles}>{content}</p>
                <GridList 
                    items={[{label:'risks',id:itemId+'-risks',title,severity:'error'}]}
                    columns={{xs:1}}
                    listItemComponent={RiskDetails}
                />
                <hr />
                <GridList 
                    items={[
                        {label:'vulnerability',id:itemId+'-vulnerability',title,severity:'warning'},
                        {label:'prevention',id:itemId+'-prevention',title,severity:'success'},
                        {label:'scenarios',id:itemId+'-scenarios',title},
                        {label:'references',id:itemId+'-references',title},
                    ]}
                    columns={{xs:1,sm:2,md:4}}
                    listItemComponent={RuleDetails}
                />
            </div>
        </ExpansionPanel>

    )
}

export default ListItem