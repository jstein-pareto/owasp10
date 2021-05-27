/* eslint-disable react/prop-types */
import * as React from 'react'

import List from '../components/list'

import data from '../library/data/topten.data'
import styles from '../library/styles/topten.styles'

// const utmString = 'utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter'

const HomePage = () => {
    const {title,subtitle,description,content=[],domain,path,year} = data
    return (
        <main style={styles.pageStyles}>
            <title>{title} - {year}</title>
            <hgroup>
                <h1 style={styles.headingStyles}>{title} - {year}</h1>
                <h3 style={styles.subheadingStyles}>{subtitle}</h3>
            </hgroup>
            <p style={styles.paragraphStyles}>{description}<br /><a href={`${domain}/${path}/${year}`}>more info...</a></p>
            <List list={content} />
        </main>
    )
}

export default HomePage
