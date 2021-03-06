/* eslint-disable react/prop-types */
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { Tooltip } from '@paretointel/react-component-library'

export const LinkOutbound = ({text='',tooltip='',url=''}) => {

    return (<div style={{position:'relative'}}>
        <span>{text}</span>
        <span style={{marginLeft:'0.25rem', position:'absolute', top:'50%', transform:'translateY(-50%)'}} onClick={() => window.open(url)}>
            <Tooltip display={tooltip}>
                <FiExternalLink color="#0093b2" size={20} />
            </Tooltip>
        </span>
    </div>)
}

export default LinkOutbound