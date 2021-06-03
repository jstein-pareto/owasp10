/* eslint-disable react/prop-types */
import * as React from 'react'
import {Grid} from '@paretointel/react-component-library'

import Layout from '../components/layout'
import TopTenSummary from '../components/graphql/top-ten-summary'
import TopTenList from '../components/graphql/top-ten-list'
// import TopTenRisks from '../components/graphql/top-ten-risks'
// import GridTest from '../components/grid-test'

import styles from '../library/styles/topten.styles'

// const utmString = 'utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter'

const HomePage = () => {
    return (
        <Layout>
            <main style={styles.pageStyles}>
                <title>OWASP Top Ten - 2017</title>
                {/* <TopTenRisks /> */}
                <Grid items={[
                    {content: <TopTenSummary key='grid-summary' id='grid-summary' />,columns: {xs:12}},
                    {content: <TopTenList key='grid-details' id='grid-details' />,columns: {xs:12}},
                    // {content: <GridTest key='grid-test' id='grid-test' />,columns:{xs:12}},
                ]} />
            </main>
        </Layout>
    )
}

export default HomePage