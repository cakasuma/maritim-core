import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import InputAdornment from '@material-ui/core/InputAdornment'
// @material-ui/icons
import Email from '@material-ui/icons/Email'
import People from '@material-ui/icons/People'
import LockOutlined from '@material-ui/icons/LockOutlined'
// core components
import Button from '../../components/shared/CustomButtons/Button.jsx'
import CardBody from '../../components/shared/Card/CardBody.jsx'
import CardFooter from '../../components/shared/Card/CardFooter.jsx'
import CustomInput from '../../components/shared/CustomInput/CustomInput.jsx'

import loginPageStyle from '../../components/jss/maritim/views/loginPage.jsx'
import { FirebaseContext } from 'gatsby-plugin-firebase'

const SigninSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .required('Required'),
})

const signinFormValues = {
    email: '',
    password: '',
}

const LoginForm = ({ classes, toggleLogin }) => {
    const firebase = React.useContext(FirebaseContext)
    return (
        <Formik
            initialValues={signinFormValues}
            validationSchema={SigninSchema}
            onSubmit={(values, actions) => {
                // same shape as initial values
                firebase
                    .auth()
                    .signInWithEmailAndPassword(values.email, values.password)
                    .then(authResponse => {
                        actions.resetForm()
                        actions.setSubmitting(false)
                    })
                    .catch(err => {
                        console.log(err)
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
            }) => (
                <Form className={classes.form}>
                    <CardBody>
                        <CustomInput
                            labelText="Email..."
                            id="email"
                            error={errors.email && touched.email ? true : false}
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
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Email
                                            className={classes.inputIconsColor}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <CustomInput
                            labelText="Password"
                            id="pass"
                            error={
                                errors.password && touched.password
                                    ? true
                                    : false
                            }
                            errorMessage={
                                errors.password && touched.password
                                    ? errors.password
                                    : null
                            }
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                type: 'password',
                                name: 'password',
                                value: values.password,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                readOnly: isSubmitting,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <LockOutlined
                                            className={classes.inputIconsColor}
                                        />
                                    </InputAdornment>
                                ),
                                autoComplete: 'off',
                            }}
                        />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                        <Button color="primary" size="md" type="submit">
                            Login
                        </Button>
                        Or
                        <Button
                            simple
                            color="primary"
                            size="md"
                            onClick={e => {
                                e.preventDefault()
                                toggleLogin()
                            }}
                        >
                            Register here
                        </Button>
                    </CardFooter>
                </Form>
            )}
        </Formik>
    )
}

export default withStyles(loginPageStyle)(LoginForm)
