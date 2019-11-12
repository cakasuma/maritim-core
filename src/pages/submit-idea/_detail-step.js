import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { Formik } from 'formik'
import * as Yup from 'yup'

// @material-ui/icons

// core components
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import CustomInput from '../../components/shared/CustomInput/CustomInput.jsx'
import CustomSelect from '../../components/shared/CustomSelect/CustomSelect.jsx'

import submitPageStyle from '../../components/jss/maritim/views/submitPage.jsx'

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Judul dibutuhkan'),
    subtitle: Yup.string().required('Sub judul dibutuhkan'),
    description: Yup.string().required('Deskripsi dibutuhkan'),
    development_stage: Yup.string().required('Tahap pengembangan dibutuhkan'),
    excellence: Yup.string().required('Pesan dibutuhkan'),
    patent_status: Yup.string().required('Tahap paten dibutuhkan'),
})

const workFormValues = {
    title: '',
    subtitle: '',
    description: '',
    development_stage: '',
    excellence: '',
    patent_status: '',
}

const DetailStep = ({ classes, setInnovation, innovation }) => {
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                    <Formik
                        initialValues={workFormValues}
                        validationSchema={validationSchema}
                    >
                        {({
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
                                            labelText="Judul"
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
                                            inputProps={{
                                                name: 'title',
                                                value: innovation.title || '',
                                                onChange: e => {
                                                    handleChange(e)
                                                    console.log(innovation)
                                                    const new_innovation = {
                                                        ...innovation,
                                                    }
                                                    new_innovation.title =
                                                        e.target.value
                                                    setInnovation(
                                                        new_innovation,
                                                    )
                                                },
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
                                            labelText="Sub judul"
                                            id="subtitle"
                                            error={
                                                errors.subtitle &&
                                                touched.subtitle
                                                    ? true
                                                    : false
                                            }
                                            errorMessage={
                                                errors.subtitle &&
                                                touched.subtitle
                                                    ? errors.subtitle
                                                    : null
                                            }
                                            inputProps={{
                                                name: 'subtitle',
                                                value:
                                                    innovation.subtitle || '',
                                                onChange: e => {
                                                    handleChange(e)
                                                    const new_innovation = {
                                                        ...innovation,
                                                    }
                                                    new_innovation.subtitle =
                                                        e.target.value
                                                    setInnovation(
                                                        new_innovation,
                                                    )
                                                },
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
                                            labelText="Deskripsi singkat"
                                            id="description"
                                            error={
                                                errors.description &&
                                                touched.description
                                                    ? true
                                                    : false
                                            }
                                            errorMessage={
                                                errors.description &&
                                                touched.description
                                                    ? errors.description
                                                    : null
                                            }
                                            inputProps={{
                                                name: 'description',
                                                value:
                                                    innovation.description ||
                                                    '',
                                                onChange: e => {
                                                    handleChange(e)
                                                    const new_innovation = {
                                                        ...innovation,
                                                    }
                                                    new_innovation.description =
                                                        e.target.value
                                                    setInnovation(
                                                        new_innovation,
                                                    )
                                                },
                                                onBlur: handleBlur,
                                                readOnly: isSubmitting,
                                                multiline: true,
                                                rows: 5,
                                            }}
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomSelect
                                            labelText="Tahap pengembangan"
                                            id="development_stage"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            error={
                                                errors.development_stage &&
                                                touched.development_stage
                                                    ? true
                                                    : false
                                            }
                                            errorMessage={
                                                errors.development_stage &&
                                                touched.development_stage
                                                    ? errors.development_stage
                                                    : null
                                            }
                                            inputProps={{
                                                type: 'text',
                                                name: 'development_stage',
                                                value:
                                                    innovation.development_stage ||
                                                    '',
                                                onChange: e => {
                                                    handleChange(e)
                                                    const new_innovation = {
                                                        ...innovation,
                                                    }
                                                    new_innovation.development_stage =
                                                        e.target.value
                                                    setInnovation(
                                                        new_innovation,
                                                    )
                                                },
                                                onBlur: handleBlur,
                                                readOnly: isSubmitting,
                                                menuItem: [
                                                    {
                                                        text:
                                                            'Pengumpulan data',
                                                        value:
                                                            'Pengumpulan data',
                                                    },
                                                    {
                                                        text:
                                                            'Riset dan pengembangan',
                                                        value:
                                                            'Riset dan pengembangan',
                                                    },
                                                    {
                                                        text: 'Prototipe',
                                                        value: 'Prototipe',
                                                    },
                                                    {
                                                        text: 'Siap jadi',
                                                        value: 'Siap jadi',
                                                    },
                                                ],
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Ketertarikan ide"
                                            id="excellence"
                                            error={
                                                errors.excellence &&
                                                touched.excellence
                                                    ? true
                                                    : false
                                            }
                                            errorMessage={
                                                errors.excellence &&
                                                touched.excellence
                                                    ? errors.excellence
                                                    : null
                                            }
                                            inputProps={{
                                                name: 'excellence',
                                                value:
                                                    innovation.excellence || '',
                                                onChange: e => {
                                                    handleChange(e)
                                                    const new_innovation = {
                                                        ...innovation,
                                                    }
                                                    new_innovation.excellence =
                                                        e.target.value
                                                    setInnovation(
                                                        new_innovation,
                                                    )
                                                },
                                                onBlur: handleBlur,
                                                readOnly: isSubmitting,
                                            }}
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomSelect
                                            labelText="Tahap paten"
                                            id="patent_status"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            error={
                                                errors.patent_status &&
                                                touched.patent_status
                                                    ? true
                                                    : false
                                            }
                                            errorMessage={
                                                errors.patent_status &&
                                                touched.patent_status
                                                    ? errors.patent_status
                                                    : null
                                            }
                                            inputProps={{
                                                type: 'text',
                                                name: 'patent_status',
                                                value:
                                                    innovation.patent_status ||
                                                    '',
                                                onChange: e => {
                                                    handleChange(e)
                                                    const new_innovation = {
                                                        ...innovation,
                                                    }
                                                    new_innovation.patent_status =
                                                        e.target.value
                                                    setInnovation(
                                                        new_innovation,
                                                    )
                                                },
                                                onBlur: handleBlur,
                                                readOnly: isSubmitting,
                                                menuItem: [
                                                    {
                                                        text: 'Belum terdaftar',
                                                        value:
                                                            'Belum terdaftar',
                                                    },
                                                    {
                                                        text:
                                                            'Menunggu persetujuan',
                                                        value:
                                                            'Menunggu persetujuan',
                                                    },
                                                    {
                                                        text:
                                                            'Persetujuan paten diterima',
                                                        value:
                                                            'Persetujuan paten diterima',
                                                    },
                                                    {
                                                        text: 'Terpatenkan',
                                                        value: 'Terpatenkan',
                                                    },
                                                ],
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                            </form>
                        )}
                    </Formik>
                </GridItem>
            </GridContainer>
        </div>
    )
}

DetailStep.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(submitPageStyle)(DetailStep)
