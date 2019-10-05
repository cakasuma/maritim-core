import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { FirebaseContext } from 'gatsby-plugin-firebase'
import { navigate } from 'gatsby'
// @material-ui/icons

// core components
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import Button from '../../components/shared/CustomButtons/Button.jsx'

import workStyle from '../../components/jss/maritim/views/landingPageSections/workStyle.jsx'

const WorkSection = ({ classes }) => {
    const firebase = React.useContext(FirebaseContext)
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                    <Button
                        className={classes.button}
                        type="button"
                        onClick={() => {
                            navigate('/login')
                        }}
                        color="primary"
                    >
                        Join us
                    </Button>
                </GridItem>
            </GridContainer>
        </div>
    )
}

WorkSection.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(workStyle)(WorkSection)
