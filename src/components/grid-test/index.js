/* eslint-disable react/prop-types */
import * as React from 'react'
import {Grid} from '@paretointel/react-component-library'

const GridTest = () => {
    return (
        <Grid 
            spacing={16}
            className={'primary'}
            cellHeight='auto'
            rows='2' 
            items={[
                {
                    title:'the quick brown...',
                    content:'lorem ipsum dolor...',
                    columns:{xs:1},
                },
                {
                    title:'the quick brown...',
                    content:'lorem ipsum dolor...',
                    columns:{xs:1},
                },
                {
                    title:'the quick brown...',
                    content:'lorem ipsum dolor...',
                    columns:{xs:1},
                },
                {
                    title:'the quick brown...',
                    content:'lorem ipsum dolor...',
                    columns:{xs:2},
                },
                {
                    title:'the quick brown...',
                    content:'lorem ipsum dolor...',
                    columns:{xs:3},
                },
                {
                    title:'the quick brown...',
                    content:'lorem ipsum dolor...',
                    columns:{xs:4},
                },
                {
                    title:'the quick brown...',
                    content:'lorem ipsum dolor...',
                    columns:{xs:4},
                },
                {
                    title:'the quick brown...',
                    content:'lorem ipsum dolor...',
                    columns:{xs:3},
                },
                {
                    title:'the quick brown...',
                    content:'lorem ipsum dolor...',
                    columns:{xs:2},
                },
                {
                    title:'the quick brown...',
                    content:'lorem ipsum dolor...',
                    columns:{xs:1},
                },
                {
                    title:'the quick brown...',
                    content:'lorem ipsum dolor...',
                    columns:{xs:1},
                },
                {
                    title:'the quick brown...',
                    content:'lorem ipsum dolor...',
                    columns:{xs:1},
                },
            ]} />
    )
}

export default GridTest