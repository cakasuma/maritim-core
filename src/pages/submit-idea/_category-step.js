import React from 'react'
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

const CategoryStep = ({ classes }) => (
    <StyledWrapper>
        <GridContainer className={classes.container}>
            <NavPills
                color="primary"
                tabs={[
                    {
                        tabButton: 'Energy',
                        tabIcon: Energy,
                        onClick: () => {
                            console.log('energy')
                        },
                    },
                    {
                        tabButton: 'IT',
                        tabIcon: IT,
                        onClick: () => {
                            console.log('it')
                        },
                    },
                    {
                        tabButton: 'Biomedic',
                        tabIcon: Biomedic,
                        onClick: () => {
                            console.log('biomedic')
                        },
                    },
                    {
                        tabButton: 'Food',
                        tabIcon: Food,
                        onClick: () => {
                            console.log('food')
                        },
                    },
                    {
                        tabButton: 'Others',
                        tabIcon: Other,
                        onClick: () => {
                            console.log('others')
                        },
                    },
                ]}
            />
        </GridContainer>
    </StyledWrapper>
)
export default withStyles(submitPageStyle)(CategoryStep)
