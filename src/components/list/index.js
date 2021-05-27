/* eslint-disable react/prop-types */
import * as React from 'react'

import ListItem from '../list-item'

import styles from '../../library/styles/topten.styles'

const List = ({list=[]}) => {
    return (
        <ol style={styles.listStyles}>
            {list.map(item => (
                <li key={item.id} style={{ ...styles.listItemStyles, color: item.color }}>
                    <ListItem item={item} />
                </li>
            ))}
        </ol>
    )
}

export default List