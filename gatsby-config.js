require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: `Warung inovasi`,
        description: `Mulailah berinovasi di negeri kita, dapatkan pengalaman dan usaha di warunginovasi.`,
        author: `@cakasuma`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Warung inovasi`,
                short_name: `Warunginovasi`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/Logo.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true,
                },
            },
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: 'gatsby-plugin-firebase',
            options: {
                features: {
                    auth: true,
                    database: false,
                    firestore: true,
                    storage: true,
                    messaging: false,
                    functions: false,
                },
            },
        },
        `gatsby-plugin-offline`,
    ],
}
