/* eslint-disable react/prop-types */
import * as React from 'react'
import {ExpansionPanel, GridList, ParetoAlert, Typography, Tooltip} from '@paretointel/react-component-library'

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
            title={<>
                <div style={styles.titleStyle}>{id}. {title}</div>
                {/* <div style={styles.descriptionStyle}>{description}</div> */}
                <Tooltip display={description}><span style={styles.iconStyle}>i</span></Tooltip>
            </>}
            onChange={handleExpansion}
        >
            <div style={{...styles.flexCol, ...styles.flexCenter}}>
                <p style={styles.contentStyle}>{content}</p>
                <GridList 
                    items={[{label:'risks',id:itemId+'-risks',title,severity:'error'}]}
                    columns={{xs:1}}
                    listItemComponent={RuleDetails}
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