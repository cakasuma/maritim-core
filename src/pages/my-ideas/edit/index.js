import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../../components/shared/Grid/GridItem.jsx'
import CustomButton from '../../../components/shared/CustomButtons/Button.jsx'
import Layout from '../../../components/layout/layout.js'
import SEO from '../../../components/layout/seo.js'
import Parallax from '../../../components/shared/Parallax/Parallax.jsx'
import submitPageStyle from '../../../components/jss/maritim/views/submitPage.jsx'

import CategoryStep from './_category-step'
import DetailStep from './_detail-step'
import UploadStep from './_upload-step'

function getSteps() {
    return [
        'Select which category your idea is',
        'Explain the details',
        'File upload',
    ]
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <CategoryStep />
        case 1:
            return <DetailStep />
        case 2:
            return <UploadStep />
        default:
            return 'unknown step'
    }
}

const SubmitIdea = ({ classes }) => {
    const [activeStep, setActiveStep] = React.useState(0)
    const [innovation, setInnovation] = React.useState(null)
    const steps = getSteps()

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
    }

    function handleFinish() {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
        console.log('finish')
    }

    function handleReset() {
        setActiveStep(0)
    }
    return (
        <Layout>
            <SEO title="Home" />
            <div>
                <Parallax
                    className={classes.parallax}
                    filter
                    image={require('../../../images/bg3.jpg')}
                >
                    <GridContainer className={classes.container}>
                        <GridItem xs={12} sm={12} md={12}>
                            <h1 className={classes.title}>Edit your idea</h1>
                        </GridItem>
                    </GridContainer>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.root}>
                            <Stepper activeStep={activeStep} alternativeLabel>
                                {steps.map(label => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            <div>
                                {activeStep === steps.length ? (
                                    <div>
                                        <Typography
                                            className={classes.instructions}
                                        >
                                            All steps completed
                                        </Typography>
                                        <Button onClick={handleReset}>
                                            Reset
                                        </Button>
                                    </div>
                                ) : (
                                    <div>
                                        {getStepContent(activeStep)}
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                className={classes.backButton}
                                            >
                                                Back
                                            </Button>
                                            {activeStep === steps.length - 1 ? (
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleFinish}
                                                >
                                                    Finish
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleNext}
                                                >
                                                    Next
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default withStyles(submitPageStyle)(SubmitIdea)
