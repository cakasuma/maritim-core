import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { FirebaseContext } from 'gatsby-plugin-firebase'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import CircularProgress from '@material-ui/core/CircularProgress'

// @material-ui/icons

// core components
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import CustomInput from '../../components/shared/CustomInput/CustomInput.jsx'
import Button from '../../components/shared/CustomButtons/Button.jsx'
import InfoArea from '../../components/shared/InfoArea/InfoArea.jsx'

import PinDrop from '@material-ui/icons/PinDrop'
import Phone from '@material-ui/icons/Phone'
import BusinessCenter from '@material-ui/icons/BusinessCenter'

import feedbackStyle from '../../components/jss/maritim/views/landingPageSections/feedbackStyle.jsx'

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().required('Dibutuhkan'),
    email: Yup.string()
        .email('bukan alamat email')
        .required('Dibutuhkan'),
    title: Yup.string().required('Dibutuhkan'),
    message: Yup.string().required('Dibutuhkan'),
})
const feedbackInitial = {
    name: '',
    email: '',
    title: '',
    message: '',
}

const FeedbackSection = ({ classes }) => {
    const firebase = React.useContext(FirebaseContext)
    return (
        <div className={classes.section}>
            <GridContainer className={classes.container} justify="center">
                <GridItem xs={11} sm={11} md={11}>
                    <h2 className={classes.title}>Kirim pesan</h2>
                    <GridContainer>
                        <GridItem sm={6} md={6} className={classes.noPadding}>
                            <p className={classes.description}>
                                Kontak kita kapan saja tentang warung inovasi,
                                kita akan menjawab secepat mungkin
                                <br />
                            </p>
                            <Formik
                                initialValues={feedbackInitial}
                                validationSchema={FeedbackSchema}
                                onSubmit={(values, actions) => {
                                    console.log('hi')
                                    firebase
                                        .firestore()
                                        .collection('feedbacks')
                                        .doc()
                                        .set({
                                            name: values.name,
                                            email: values.email,
                                            title: values.title,
                                            message: values.message,
                                        })
                                        .then(snapshot => {
                                            actions.resetForm()
                                            actions.setSubmitting(false)
                                        })
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    isSubmitting,
                                    status,
                                }) => (
                                    <Form className={classes.form}>
                                        <CustomInput
                                            labelText="Nama..."
                                            id="name"
                                            error={
                                                errors.name && touched.name
                                                    ? true
                                                    : false
                                            }
                                            errorMessage={
                                                errors.name && touched.name
                                                    ? errors.name
                                                    : null
                                            }
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                type: 'text',
                                                name: 'name',
                                                value: values.name,
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                readOnly: isSubmitting,
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Email"
                                            id="email"
                                            error={
                                                errors.email && touched.email
                                                    ? true
                                                    : false
                                            }
                                            errorMessage={
                                                errors.email && touched.email
                                                    ? errors.email
                                                    : null
                                            }
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                type: 'text',
                                                name: 'email',
                                                value: values.email,
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                readOnly: isSubmitting,
                                                autoComplete: 'off',
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Topik"
                                            id="title"
                                            error={
                                                errors.title && touched.title
                                                    ? true
                                                    : false
                                            }
                                            errorMessage={
                                                errors.title && touched.title
                                                    ? errors.title
                                                    : null
                                            }
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                type: 'text',
                                                name: 'title',
                                                value: values.title,
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                readOnly: isSubmitting,
                                                autoComplete: 'off',
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Message"
                                            id="message"
                                            error={
                                                errors.message &&
                                                touched.message
                                                    ? true
                                                    : false
                                            }
                                            errorMessage={
                                                errors.message &&
                                                touched.message
                                                    ? errors.message
                                                    : null
                                            }
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                type: 'text',
                                                name: 'message',
                                                value: values.message,
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                readOnly: isSubmitting,
                                                autoComplete: 'off',
                                                multiline: true,
                                                rows: 5,
                                            }}
                                        />
                                        {isSubmitting ? (
                                            <CircularProgress
                                                className={
                                                    classes.circularProgress
                                                }
                                                color="secondary"
                                            />
                                        ) : (
                                            <Button
                                                color="primary"
                                                type="submit"
                                            >
                                                Kirim pesan
                                            </Button>
                                        )}
                                    </Form>
                                )}
                            </Formik>
                        </GridItem>
                        <GridItem md={4} sm={4} className={classes.mlAuto}>
                            <InfoArea
                                className={classes.infoAreaWrapper}
                                title="Lokasi kantor"
                                description={
                                    <p>
                                        Jakarta, <br /> Jabodetabek, <br />{' '}
                                        Jakarta
                                    </p>
                                }
                                icon={PinDrop}
                                iconColor="primary"
                            />
                            <InfoArea
                                className={classes.infoAreaWrapper}
                                title="Kontak kita"
                                description={
                                    <p>
                                        Warung inovasi <br /> +62-812-1846-2281{' '}
                                        <br /> Senin - Minggu, 8:00-22:00
                                    </p>
                                }
                                icon={Phone}
                                iconColor="primary"
                            />
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>
        </div>
    )
}

FeedbackSection.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(feedbackStyle)(FeedbackSection)
