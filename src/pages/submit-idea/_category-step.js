import React, { useEffect } from 'react'
import styled from 'styled-components'
import NavPills from '../../components/shared/NavPills/NavPills.jsx'
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import Energy from '@material-ui/icons/Autorenew'
import Biomedic from '@material-ui/icons/NaturePeople'
import IT from '@material-ui/icons/DevicesOther'
import Food from '@material-ui/icons/Fastfood'
import Other from '@material-ui/icons/CardGiftcard'
import submitPageStyle from '../../components/jss/maritim/views/submitPage.jsx'
import withStyles from '@material-ui/core/styles/withStyles'

const StyledWrapper = styled.section`
    padding: 40px 0;
`

const CategoryStep = ({ classes, innovation, setInnovation }) => {
    return (
        <StyledWrapper>
            <GridContainer className={classes.container}>
                <NavPills
                    color="primary"
                    tabs={[
                        {
                            tabButton: 'Energi',
                            tabIcon: Energy,
                            onClick: () => {
                                const new_innovation = { ...innovation }
                                new_innovation.category = 'Energy'
                                setInnovation(new_innovation)
                                console.log('energy')
                            },
                        },
                        {
                            tabButton: 'IT',
                            tabIcon: IT,
                            onClick: () => {
                                const new_innovation = { ...innovation }
                                new_innovation.category = 'IT'
                                setInnovation(new_innovation)
                                console.log('it')
                            },
                        },
                        {
                            tabButton: 'Biomedik',
                            tabIcon: Biomedic,
                            onClick: () => {
                                const new_innovation = { ...innovation }
                                new_innovation.category = 'Biomedic'
                                setInnovation(new_innovation)
                                console.log('biomedic')
                            },
                        },
                        {
                            tabButton: 'Olah pangan',
                            tabIcon: Food,
                            onClick: () => {
                                const new_innovation = { ...innovation }
                                new_innovation.category = 'Food'
                                setInnovation(new_innovation)
                                console.log('food')
                            },
                        },
                        {
                            tabButton: 'Lainnya',
                            tabIcon: Other,
                            onClick: () => {
                                const new_innovation = { ...innovation }
                                new_innovation.category = 'Others'
                                setInnovation(new_innovation)
                                console.log(new_innovation)
                                console.log('others')
                            },
                        },
                    ]}
                />
            </GridContainer>
        </StyledWrapper>
    )
}
export default withStyles(submitPageStyle)(CategoryStep)
