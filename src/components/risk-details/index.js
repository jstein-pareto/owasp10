/* eslint-disable react/prop-types */
import * as React from 'react'
import {ParetoAlert} from '@paretointel/react-component-library'

import styles from '../../library/styles/topten.styles'

/**
 * Expected data format:
 * { vectors: {}, weaknesses: {}, impacts: {}}
 */

const RiskDetails = (props) => {
    const {label='',id='',title='',style={},severity='info'} = props
    // use `id` to get data from JSON/GraphQL
    return (<div key={id}><ParetoAlert style={{...styles.ruleDetailStyle, ...style, ...styles.flexCol, ...styles.flexCenter}} severity={severity} display={`${id} ${title} ${label}`} /></div>)
}

export default RiskDetails