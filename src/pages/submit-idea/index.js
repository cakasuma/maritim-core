import React from 'react'
import styled from 'styled-components'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { FirebaseContext } from 'gatsby-plugin-firebase'
import classNames from 'classnames'
import { navigate, Link } from 'gatsby'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import Image from '../../components/shared/Image/image'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import Layout from '../../components/layout/layout.js'
import SEO from '../../components/layout/seo.js'
import Parallax from '../../components/shared/Parallax/Parallax.jsx'
import submitPageStyle from '../../components/jss/maritim/views/submitPage.jsx'

import CategoryStep from './_category-step'
import DetailStep from './_detail-step'
import UploadStep from './_upload-step'

const ImageWrapper = styled.div`
    max-width: 400px;
    margin: auto;
`

function getSteps() {
    return ['Pilih kategori', 'Detail inovasi', 'Unggah gambar dan dokumen']
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
    const [currentUser, setCurrentUser] = React.useState()
    const [isLoading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')
    const firebase = React.useContext(FirebaseContext)

    React.useEffect(() => {
        if (!firebase) {
            return
        }

        const new_innovation = { ...innovation }
        new_innovation.category = 'Energy'
        setInnovation(new_innovation)

        firebase.auth().onAuthStateChanged(function(user) {
            if (!user) {
                navigate('/login')
                return
            }
            setCurrentUser(user)
        })
    }, [firebase])

    const steps = getSteps()

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
    }

    const handleFinish = async () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
        setLoading(true)
        let hasError = false

        if (!innovation.hasOwnProperty('title')) {
            setError(error + ' title is required ')
            hasError = true
        }
        if (!innovation.hasOwnProperty('subtitle')) {
            setError(error + ' subtitle is required ')
            hasError = true
        }
        if (!innovation.hasOwnProperty('description')) {
            setError(error + ' description is required ')
            hasError = true
        }
        if (!innovation.hasOwnProperty('development_stage')) {
            setError(error + ' development_stage is required ')
            hasError = true
        }
        if (!innovation.hasOwnProperty('image_1')) {
            setError(error + ' image 1 is required ')
            hasError = true
        }

        if (hasError) {
            setLoading(false)
            return
        }
        console.log('start interact with firebase storage')
        const storage = firebase.storage()
        const storageRef = storage.ref()
        const imagesRef = storageRef.child(`images/${currentUser.uid}`)
        const image1Ref = imagesRef.child(innovation.image_1.name)
        const image2Ref = innovation.image_2
            ? imagesRef.child(innovation.image_2.name)
            : null
        const abstractRef = innovation.abstract_file
            ? imagesRef.child(innovation.abstract_file.name)
            : null
        await image1Ref.put(innovation.image_1)
        innovation.image_2 && (await image2Ref.put(innovation.image_2))
        innovation.abstract_file &&
            (await abstractRef.put(innovation.abstract_file))

        const new_innovation = { ...innovation }
        const url_image_1 = await image1Ref.getDownloadURL()
        const url_image_2 = innovation.image_2
            ? await image1Ref.getDownloadURL()
            : ''
        const url_abstract_file = innovation.abstract_file
            ? await abstractRef.getDownloadURL()
            : ''

        new_innovation.image_1 = url_image_1
        new_innovation.image_2 = url_image_2
        new_innovation.abstract_file = url_abstract_file
        new_innovation.viewers = 0
        new_innovation.liked = 0

        new_innovation.innovator = currentUser.uid
        new_innovation.timestamp = new Date().getTime()
        setInnovation(new_innovation)

        const db = firebase.firestore()
        db.collection('innovation')
            .doc()
            .set(new_innovation)
        console.log(new_innovation)
        setInnovation(null)
        console.log('finish')
        setLoading(false)
    }

    function handleNewSubmit() {
        setActiveStep(0)
    }
    return (
        <Layout>
            <SEO title="Submit idea" />
            <div>
                <Parallax
                    className={classes.parallax}
                    filter
                    image={require('../../images/bg3.jpg')}
                >
                    <GridContainer className={classes.container}>
                        <GridItem xs={12} sm={12} md={12}>
                            <h1 className={classes.title}>
                                Mari tunjukkan idemu
                            </h1>
                            <h4 className={classes.titleSecondary}>
                                Publikasi inovasimu dapat membantu meningkatkan
                                eksistensi idemu, dan juga membuat investor
                                tertarik untuk mendonasi inovasimu.
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
                                        <StepLabel classes={classes.myLabel}>
                                            {label}
                                        </StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            <div>
                                {activeStep === steps.length ? (
                                    <div>
                                        {isLoading ? (
                                            <CircularProgress
                                                className={
                                                    classes.circularProgress
                                                }
                                                color="secondary"
                                            />
                                        ) : (
                                            <div>
                                                {error ? (
                                                    <div>
                                                        <Typography
                                                            className={
                                                                classes.error
                                                            }
                                                        >
                                                            {error}
                                                        </Typography>
                                                        <Button
                                                            disabled={
                                                                activeStep === 0
                                                            }
                                                            onClick={handleBack}
                                                            className={
                                                                classes.backButton
                                                            }
                                                        >
                                                            Back
                                                        </Button>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <ImageWrapper>
                                                            <Image
                                                                img_name="success.png"
                                                                alt="Sukses!"
                                                            />
                                                        </ImageWrapper>
                                                        <Typography
                                                            className={
                                                                classes.instructions
                                                            }
                                                        >
                                                            Selamat!, ide sudah
                                                            terkumpul
                                                        </Typography>
                                                        <Button
                                                            onClick={
                                                                handleNewSubmit
                                                            }
                                                        >
                                                            Daftar ide baru
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>
                                        )}
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
                            <h6 className={classes.hint}>
                                Untuk mempublish inovasimu, kita membutuhkan
                                data personal data seperti KTP atau SIM, umur,
                                dan email untuk memproses ketahap selanjutnya.
                                Inofrmasi ini digunakan untuk mencegah pemalsuan
                                data. Catatan: setelah publish, anda tidak bisa
                                mengedit atau mendelete inovasi anda, tolong
                                kontak kami melalui nomor telepon tertera di
                                laman <Link to="/about-us">Tentang kami</Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default withStyles(submitPageStyle)(SubmitIdea)
