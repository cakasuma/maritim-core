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
import LockOutlined from '@material-ui/icons/LockOutlined'
// core components
import Button from '../../components/shared/CustomButtons/Button.jsx'
import CardBody from '../../components/shared/Card/CardBody.jsx'
import CardFooter from '../../components/shared/Card/CardFooter.jsx'
import CustomInput from '../../components/shared/CustomInput/CustomInput.jsx'

import loginPageStyle from '../../components/jss/maritim/views/loginPage.jsx'

const SignupSchema = Yup.object().shape({
    first_name: Yup.string()
        .min(2, 'too show')
        .max(15, 'too long'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .required('Required'),
})

const SignupForm = ({ classes }) => {
    return (
        <Formik
            initialValues={{
                first_name: '',
                email: '',
                password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values)
            }}
        >
            {({ errors, touched }) => (
                <Form className={classes.form}>
                    <CardBody>
                        <CustomInput
                            labelText="First Name..."
                            id="first"
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                type: 'text',
                                name: 'first_name',
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Email
                                            className={classes.inputIconsColor}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            error={errors.email}
                        />
                        <CustomInput
                            labelText="Email..."
                            id="email"
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                type: 'email',
                                name: 'email',
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Email
                                            className={classes.inputIconsColor}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            error={errors.email}
                        />
                        <CustomInput
                            labelText="Password"
                            id="pass"
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                type: 'password',
                                name: 'password',
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <LockOutlined
                                            className={classes.inputIconsColor}
                                        />
                                    </InputAdornment>
                                ),
                                autoComplete: 'off',
                            }}
                            error={errors.password}
                        />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                        <Button color="primary" size="md" type="submit">
                            Get started
                        </Button>
                        Or
                        <Button
                            simple
                            color="primary"
                            size="md"
                            onClick={e => {
                                e.preventDefault()
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

export default withStyles(loginPageStyle)(SignupForm)
