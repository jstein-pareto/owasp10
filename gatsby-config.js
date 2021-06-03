module.exports = {
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-transformer-json',
            options: {
                typeName: 'Json',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: `${__dirname}/src/library/data/`,
            },
            __key: 'data',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'styles',
                path: `${__dirname}/src/library/styles/`,
            },
            __key: 'styles',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/`,
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages/`,
            },
            __key: 'pages',
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'OWASP Top Ten Security Risks',
                short_name: 'OWASP Top Ten',
                start_url: '/',
                background_color:'#ffffff',
                theme_color:'#bada55',
                display: 'browser',
                icon: './src/images/favicon-32x32.png',
            },
        },
    ],
}
