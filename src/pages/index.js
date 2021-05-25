/* eslint-disable react/prop-types */
import * as React from 'react'
import data from '../library/data/topten.data'
import styles from '../library/styles/topten.styles'

const utmString = 'utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter'

const List = ({list=[]}) => {
    return (
        <ol style={styles.listStyles}>
            {list.map(item => (
                <li key={item.id} style={{ ...styles.listItemStyles, color: item.color }}>
                    <span>
                        <a
                            style={styles.linkStyle}
                            href={`${item.url}?${utmString}`}
                        >
                            {item.title}
                        </a>
                        <p style={styles.descriptionStyle}>{item.content}</p>
                    </span>
                </li>
            ))}
        </ol>
    )
}

const IndexPage = () => {
    return (
        <main style={styles.pageStyles}>
            <title>{data.title}</title>
            <hgroup>
                <h1 style={styles.headingStyles}>{data.title}</h1>
                <h3 style={styles.subheadingStyles}>{data.subtitle}</h3>
            </hgroup>
            <p style={styles.paragraphStyles}>{data.description}</p>
            <List list={data.content} />
        </main>
    )
}

export default IndexPage
