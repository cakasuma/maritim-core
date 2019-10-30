import React, { useEffect } from 'react'
import styled from 'styled-components'
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import CustomSelect from '../../components/shared/CustomSelect/CustomSelect.jsx'
import submitPageStyle from '../../components/jss/maritim/views/submitPage.jsx'
import withStyles from '@material-ui/core/styles/withStyles'

const StyledWrapper = styled.section`
    padding: 40px 0;
`

const CategoryStep = ({ classes, innovation, setInnovation }) => {
    return (
        <StyledWrapper>
            <GridContainer className={classes.container} center>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomSelect
                        labelText="Pilih kategori"
                        id="category"
                        formControlProps={{
                            fullWidth: true,
                        }}
                        inputProps={{
                            type: 'text',
                            name: 'category',
                            value: innovation ? innovation.category || '' : '',
                            onChange: e => {
                                const value = e.target.value
                                const new_innovation = { ...innovation }
                                new_innovation.category = value
                                setInnovation(new_innovation)
                                console.log(value)
                                console.log('test')
                            },
                            menuItem: [
                                {
                                    text: 'Energi',
                                    value: 'Energy',
                                },
                                {
                                    text: 'IT',
                                    value: 'IT',
                                },
                                {
                                    text: 'Biomedik',
                                    value: 'Biomedic',
                                },
                                {
                                    text: 'Olah pangan',
                                    value: 'Food',
                                },
                                {
                                    text: 'Lainnya..',
                                    value: 'Others',
                                },
                            ],
                        }}
                    />
                </GridItem>
            </GridContainer>
        </StyledWrapper>
    )
}
export default withStyles(submitPageStyle)(CategoryStep)
