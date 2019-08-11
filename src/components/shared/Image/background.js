import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'

const Background = ({ children, img_name, className, style, ...props }) => (
    <StaticQuery
        query={graphql`
            query {
                allImageSharp {
                    edges {
                        node {
                            fluid(quality: 90, maxWidth: 4160) {
                                ...GatsbyImageSharpFluid_withWebp
                                originalName
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            const image = data.allImageSharp.edges.find(
                edge => edge.node.fluid.originalName === img_name,
            )
            if (!image) return null

            return (
                <BackgroundImage Tag='div' className={className} style={style} fluid={image.node.fluid} {...props}>{children}</BackgroundImage>
            )
        }}
    />
)

Background.propTypes = {
    img_name: PropTypes.string,
    children: PropTypes.node,
}
export default Background
