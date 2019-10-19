import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { navigate } from 'gatsby'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import InputAdornment from '@material-ui/core/InputAdornment'

// @material-ui/icons
import Email from '@material-ui/icons/Email'
import Face from '@material-ui/icons/Face'
import Functions from '@material-ui/icons/Functions'
import Phone from '@material-ui/icons/Phone'
import LockOutlined from '@material-ui/icons/LockOutlined'
// core components
import Button from '../../components/shared/CustomButtons/Button.jsx'
import CardBody from '../../components/shared/Card/CardBody.jsx'
import CardFooter from '../../components/shared/Card/CardFooter.jsx'
import CustomInput from '../../components/shared/CustomInput/CustomInput.jsx'
import CustomSelect from '../../components/shared/CustomSelect/CustomSelect.jsx'
import CircularProgress from '@material-ui/core/CircularProgress'
import InputLabel from '@material-ui/core/InputLabel'

import loginPageStyle from '../../components/jss/maritim/views/loginPage.jsx'
import { FirebaseContext } from 'gatsby-plugin-firebase'

const SignupSchema = Yup.object().shape({
    full_name: Yup.string()
        .min(2, 'too show')
        .max(15, 'too long')
        .required('Required!'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .required('Required'),
    phone: Yup.string().required('Phone is required'),
    type: Yup.string().required('Type is required'),
})

const signupFormValues = {
    full_name: '',
    email: '',
    password: '',
    phone: '',
    type: '',
}

const styledLabel = styled(InputLabel)`
    font-size: 14px;
`

const ErrorMessage = styled.p`
    color: red;
`

const StyledHeader = styled.h1`
    text-align: center;
`

const StyledParagraph = styled.p`
    text-align: center;
`

const SignupForm = ({ classes, toggleLogin }) => {
    const firebase = React.useContext(FirebaseContext)
    return (
        <Formik
            initialValues={signupFormValues}
            initialStatus={{}}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
                // same shape as initial values
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(
                        values.email,
                        values.password,
                    )
                    .then(authResponse => {
                        const user = authResponse.user
                        firebase
                            .firestore()
                            .collection('users')
                            .doc(user.uid)
                            .set({
                                name: values.full_name,
                                phone: values.phone,
                                type: values.type,
                                email: values.email,
                            })
                        user.updateProfile({
                            displayName: values.full_name,
                        })
                            .then(() => {
                                user.sendEmailVerification().then(() => {
                                    actions.resetForm()
                                    actions.setSubmitting(false)
                                    actions.setStatus({
                                        success:
                                            'Silahkan cek email kamu untuk memverifikasi akun anda',
                                    })
                                })
                            })
                            .catch(err => {
                                actions.setSubmitting(false)
                                actions.setStatus({
                                    error: err.message,
                                })
                            })
                    })
                    .catch(err => {
                        actions.setSubmitting(false)
                        actions.setStatus({
                            error: err.message,
                        })
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
                    {!status.success ? (
                        <>
                            <CardBody>
                                <CustomInput
                                    labelText="Nama lengkap"
                                    id="full_name"
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    error={
                                        errors.full_name && touched.full_name
                                            ? true
                                            : false
                                    }
                                    errorMessage={
                                        errors.full_name && touched.full_name
                                            ? errors.full_name
                                            : null
                                    }
                                    inputProps={{
                                        type: 'text',
                                        name: 'full_name',
                                        value: values.full_name,
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        readOnly: isSubmitting,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Face
                                                    className={
                                                        classes.inputIconsColor
                                                    }
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <CustomInput
                                    labelText="No tel"
                                    id="phone"
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
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
                                        type: 'text',
                                        name: 'phone',
                                        value: values.phone,
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        readOnly: isSubmitting,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Phone
                                                    className={
                                                        classes.inputIconsColor
                                                    }
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <CustomSelect
                                    labelText="Tipe akun"
                                    id="type"
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                    error={
                                        errors.type && touched.type
                                            ? true
                                            : false
                                    }
                                    errorMessage={
                                        errors.type && touched.type
                                            ? errors.type
                                            : null
                                    }
                                    inputProps={{
                                        type: 'text',
                                        name: 'type',
                                        value: values.type,
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        readOnly: isSubmitting,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Functions
                                                    className={
                                                        classes.inputIconsColor
                                                    }
                                                />
                                            </InputAdornment>
                                        ),
                                        menuItem: [
                                            {
                                                text: 'Investor',
                                                value: 'investor',
                                            },
                                            {
                                                text: 'Innovator',
                                                value: 'innovator',
                                            },
                                        ],
                                    }}
                                />
                                <CustomInput
                                    labelText="Alamat email"
                                    id="email"
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
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
                                        type: 'email',
                                        name: 'email',
                                        value: values.email,
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        readOnly: isSubmitting,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Email
                                                    className={
                                                        classes.inputIconsColor
                                                    }
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <CustomInput
                                    labelText="Kata kunci"
                                    id="pass"
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
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
                                                    className={
                                                        classes.inputIconsColor
                                                    }
                                                />
                                            </InputAdornment>
                                        ),
                                        autoComplete: 'off',
                                    }}
                                />
                            </CardBody>
                            <CardFooter className={classes.cardFooter}>
                                {status.error && (
                                    <ErrorMessage>{status.error}</ErrorMessage>
                                )}
                                {isSubmitting ? (
                                    <CircularProgress
                                        className={classes.circularProgress}
                                        color="secondary"
                                    />
                                ) : (
                                    <Button
                                        color="primary"
                                        size="md"
                                        type="submit"
                                    >
                                        Get started
                                    </Button>
                                )}
                                <br />
                                <Button
                                    simple
                                    color="primary"
                                    size="md"
                                    onClick={e => {
                                        e.preventDefault()
                                        toggleLogin()
                                    }}
                                >
                                    Sudah punya akun? Masuk disini
                                </Button>
                            </CardFooter>
                        </>
                    ) : (
                        <>
                            <CardBody>
                                <StyledHeader>
                                    Pendaftaran berhasil!
                                </StyledHeader>
                                <StyledParagraph>
                                    {status.success}
                                </StyledParagraph>
                            </CardBody>
                            <CardFooter className={classes.cardFooter}>
                                {' '}
                                <Button
                                    color="primary"
                                    size="md"
                                    type="submit"
                                    onClick={() => {
                                        navigate('/')
                                    }}
                                >
                                    Lihat semua inovasi
                                </Button>
                            </CardFooter>
                        </>
                    )}
                </Form>
            )}
        </Formik>
    )
}

export default withStyles(loginPageStyle)(SignupForm)
