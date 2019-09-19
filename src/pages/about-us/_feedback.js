import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { FirebaseContext } from 'gatsby-plugin-firebase'
import { Formik } from 'formik'
import * as Yup from 'yup'
import CircularProgress from '@material-ui/core/CircularProgress'

// @material-ui/icons

// core components
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import CustomInput from '../../components/shared/CustomInput/CustomInput.jsx'
import Button from '../../components/shared/CustomButtons/Button.jsx'

import workStyle from '../../components/jss/maritim/views/landingPageSections/workStyle.jsx'

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string()
        .email('E-mail is not valid!')
        .required('E-mail is required!'),
    company: Yup.string().required('Company is required!'),
    phone: Yup.string().required('Phone is required!'),
    message: Yup.string().required('Message is required!'),
})

const feedbackFormValues = {
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
}

const FeedbackSection = ({ classes }) => {
    const firebase = React.useContext(FirebaseContext)
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Work with us</h2>
                    <h4 className={classes.description}>
                        You can become one of the most influential investor by
                        signing up to our program, choose the idea and happy
                        hunting.
                    </h4>
                    <Formik
                        initialValues={feedbackFormValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            actions.setSubmitting(true)
                            const db = firebase.firestore()
                            db.collection('company')
                                .add({
                                    name: values.name,
                                    email: values.email,
                                    company: values.company,
                                    phone: values.phone,
                                    message: values.message,
                                })
                                .then(function(docRef) {
                                    console.log(
                                        'Document written with ID: ',
                                        docRef.id,
                                    )
                                    actions.setSubmitting(false)
                                    actions.resetForm()
                                })
                                .catch(function(error) {
                                    console.error(
                                        'Error adding document: ',
                                        error,
                                    )
                                    actions.setSubmitting(false)
                                })
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            handleReset,
                            isSubmitting,
                        }) => (
                            <form onReset={handleReset} onSubmit={handleSubmit}>
                                <GridContainer justify="center">
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Your Name"
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
                                            inputProps={{
                                                name: 'name',
                                                value: values.name,
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                readOnly: isSubmitting,
                                            }}
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Your Email"
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
                                            inputProps={{
                                                name: 'email',
                                                value: values.email,
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                readOnly: isSubmitting,
                                            }}
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Your Company"
                                            id="company"
                                            error={
                                                errors.company &&
                                                touched.company
                                                    ? true
                                                    : false
                                            }
                                            errorMessage={
                                                errors.company &&
                                                touched.company
                                                    ? errors.company
                                                    : null
                                            }
                                            inputProps={{
                                                name: 'company',
                                                value: values.company,
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                readOnly: isSubmitting,
                                            }}
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Your Phone Number"
                                            id="phone"
                                            error={
                                                errors.phone && touched.phone
                                                    ? true
                                                    : false
                                            }
                                            errorMessage={
                                                errors.phone && touched.phone
                                                    ? errors.phone
                                                    : null
                                            }
                                            inputProps={{
                                                name: 'phone',
                                                value: values.phone,
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                readOnly: isSubmitting,
                                            }}
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                        />
                                    </GridItem>
                                    <CustomInput
                                        labelText="Describe a little bit about you"
                                        id="message"
                                        error={
                                            errors.message && touched.message
                                                ? true
                                                : false
                                        }
                                        errorMessage={
                                            errors.message && touched.message
                                                ? errors.message
                                                : null
                                        }
                                        inputProps={{
                                            name: 'message',
                                            value: values.message,
                                            multiline: true,
                                            rows: 5,
                                            onChange: handleChange,
                                            onBlur: handleBlur,
                                            readOnly: isSubmitting,
                                        }}
                                        formControlProps={{
                                            fullWidth: true,
                                            className: classes.textArea,
                                        }}
                                    />
                                    <GridContainer
                                        justify="center"
                                        className={classes.fullWidth}
                                    >
                                        <GridItem
                                            xs={12}
                                            sm={12}
                                            md={4}
                                            className={classes.textCenter}
                                        >
                                            {isSubmitting ? (
                                                <CircularProgress
                                                    className={
                                                        classes.circularProgress
                                                    }
                                                    color="secondary"
                                                />
                                            ) : (
                                                <Button
                                                    type="submit"
                                                    color="primary"
                                                >
                                                    Join
                                                </Button>
                                            )}
                                        </GridItem>
                                    </GridContainer>
                                </GridContainer>
                            </form>
                        )}
                    </Formik>
                </GridItem>
            </GridContainer>
        </div>
    )
}

FeedbackSection.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(workStyle)(FeedbackSection)
