import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Link from '../components/shared/link';

const Copyright = () => (
	<Typography variant="body2" color="textSecondary" align="center">
		{'Copyright © '}
		<MuiLink color="inherit" href="https://material-ui.com/">
			Your Website
      </MuiLink>{' '}
		{new Date().getFullYear()}
		{'. Built with '}
		<MuiLink color="inherit" href="https://material-ui.com/">
			Material-UI.
      </MuiLink>
	</Typography>
)
const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Container maxWidth="sm">
			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
					Gatsby v4-beta example
        </Typography>
				<Link to="/login" color="secondary">
					Go to the login page
        </Link>
				<Copyright />
			</Box>
		</Container>
	</Layout >
)

export default IndexPage
