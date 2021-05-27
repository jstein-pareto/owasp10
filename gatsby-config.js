module.exports = {
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
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
                icon: '/src/images/favicon-32x32.png',
                // icons:[
                //     {
                //         'src': 'src/images/favicon.ico',
                //         'type': 'image/png',
                //         'sizes': '48x48',
                //     },
                //     {
                //         'src': 'src/images/favicon-16x16.png',
                //         'type': 'image/png',
                //         'sizes': '16x16',
                //     },
                //     {
                //         'src': 'src/images/favicon-32x32.png',
                //         'type': 'image/png',
                //         'sizes': '32x32',
                //     },
                // ],
            },
        },
    ],
}
