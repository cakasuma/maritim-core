import React from 'react'
import styled from 'styled-components'
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import submitPageStyle from '../../components/jss/maritim/views/submitPage.jsx'
import withStyles from '@material-ui/core/styles/withStyles'
// import { FirebaseContext } from 'gatsby-plugin-firebase'

const StyledWrapper = styled.section`
    padding: 40px 0;
`

const StyledGridContainer = styled(GridContainer)`
    flex-direction: column;
`

const TitleDescription = styled.h4`
    font-size: 16px;
    color: black;
    text-align: left;
    font-weight: 500;
    margin: 2rem 0;
`

const InvisibleInput = styled.input`
    display: none;
`

const UploadStep = ({ classes, innovation, setInnovation }) => {
    // const firebase = React.useContext(FirebaseContext)

    const handleFileUpload = e => {
        const new_innovation = {
            ...innovation,
        }
        new_innovation[e.target.getAttribute('name')] = e.target.files[0]
        setInnovation(new_innovation)
    }
    return (
        <StyledWrapper>
            <StyledGridContainer className={classes.container}>
                <TitleDescription>Upload first image</TitleDescription>
                <Input
                    accept="image/*"
                    className={classes.input}
                    id="file-image-1"
                    onChange={handleFileUpload}
                    name="image_1"
                    type="file"
                    required
                />
                <TitleDescription>Upload second image</TitleDescription>
                <Input
                    accept="image/*"
                    className={classes.input}
                    id="file-image-2"
                    name="image_2"
                    onChange={handleFileUpload}
                    type="file"
                    required
                />

                <TitleDescription>
                    Upload Supporting document (e.g. paper, experiment test, or
                    abstract)
                </TitleDescription>
                <Input
                    accept="image/*"
                    className={classes.input}
                    id="file-document"
                    onChange={handleFileUpload}
                    type="file"
                    name="abstract_file"
                    required
                />
            </StyledGridContainer>
        </StyledWrapper>
    )
}
export default withStyles(submitPageStyle)(UploadStep)
