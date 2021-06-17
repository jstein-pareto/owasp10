/* eslint-disable react/prop-types */
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { Tooltip } from '@paretointel/react-component-library'

export const Icon = ({text='',tooltip=''}) => {

    return (<div style={{position:'relative'}}>
        <span>{text}</span>
        <span>
            <Tooltip display={tooltip}>
                <FiExternalLink color="#0093b2" size={20} />
            </Tooltip>
        </span>
    </div>)
}

export default Icon