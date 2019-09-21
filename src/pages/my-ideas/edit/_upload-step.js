import React from 'react'
import styled from 'styled-components'
import NavPills from '../../../components/shared/NavPills/NavPills.jsx'
import GridContainer from '../../../components/shared/Grid/GridContainer.jsx'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import submitPageStyle from '../../../components/jss/maritim/views/submitPage.jsx'
import withStyles from '@material-ui/core/styles/withStyles'

const StyledWrapper = styled.section`
    padding: 40px 0;
`

const StyledGridContainer = styled(GridContainer)`
    flex-direction: column;
`

const InvisibleInput = styled.input`
    display: none;
`

const UploadStep = ({ classes }) => (
    <StyledWrapper>
        <StyledGridContainer className={classes.container}>
            <InvisibleInput
                accept="image/*"
                className={classes.input}
                id="file-image-1"
                type="file"
                required
            />
            <label htmlFor="file-image-1">
                <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    className={classes.button}
                >
                    File image 1
                </Button>
            </label>
            <InvisibleInput
                accept="image/*"
                className={classes.input}
                id="file-image-2"
                type="file"
                required
            />
            <label htmlFor="file-image-2">
                <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    className={classes.button}
                >
                    File image 2
                </Button>
            </label>
            <InvisibleInput
                accept="image/*"
                className={classes.input}
                id="file-document"
                type="file"
                required
            />
            <label htmlFor="file-document">
                <Button
                    variant="contained"
                    component="span"
                    color="secondary"
                    className={classes.button}
                >
                    Supporting document (e.g. paper, experiment test, or
                    abstract)
                </Button>
            </label>
        </StyledGridContainer>
    </StyledWrapper>
)
export default withStyles(submitPageStyle)(UploadStep)
