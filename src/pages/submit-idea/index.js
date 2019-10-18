import React from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import Layout from '../../components/layout/layout.js'
import SEO from '../../components/layout/seo.js'
import Parallax from '../../components/shared/Parallax/Parallax.jsx'
import submitPageStyle from '../../components/jss/maritim/views/submitPage.jsx'

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

function getStepContent(stepIndex, innovation, setInnovation) {
    switch (stepIndex) {
        case 0:
            return (
                <CategoryStep
                    innovation={innovation}
                    setInnovation={setInnovation}
                />
            )
        case 1:
            return (
                <DetailStep
                    innovation={innovation}
                    setInnovation={setInnovation}
                />
            )
        case 2:
            return (
                <UploadStep
                    innovation={innovation}
                    setInnovation={setInnovation}
                />
            )
        default:
            return 'unknown step'
    }
}

const SubmitIdea = ({ classes }) => {
    const [activeStep, setActiveStep] = React.useState(0)
    const [innovation, setInnovation] = React.useState(null)

    // /* name of the properties */
    // const [abstract_file, setAbstractFile] = React.useState(null)
    // const [description, setDescription] = React.useState(null)
    // const [development_stage, setDevelopmentStage] = React.useState(null)
    // const [excellence, setExcellence] = React.useState(null)
    // const [image, setImage] = React.useState(null)
    // const [innovator_id, setInnovatorId] = React.useState(null)
    // const [patent_status, setPatentStatus] = React.useState(null)
    // const [ready_stage, setReadyStage] = React.useState(null)
    // const [subtitle, setSubtitle] = React.useState(null)
    // const [title, setTitle] = React.useState(null)
    const steps = getSteps()

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
    }

    function handleFinish() {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
        console.log(innovation)
        setInnovation(null)
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
                    image={require('../../images/bg3.jpg')}
                >
                    <GridContainer className={classes.container}>
                        <GridItem xs={12} sm={12} md={12}>
                            <h1 className={classes.title}>
                                Lets show the world your idea
                            </h1>
                            <h4 className={classes.titleSecondary}>
                                We publish your innovation to help investor peek
                                at your innovation and communicate with you. We
                                believe Indonesia is a country full of inventor
                                and it will help its glory because of you too!.
                            </h4>
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
                                        {getStepContent(
                                            activeStep,
                                            innovation,
                                            setInnovation,
                                        )}
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
