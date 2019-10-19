import React from 'react'
import classNames from 'classnames'
import { navigate } from 'gatsby'
import { FirebaseContext } from 'gatsby-plugin-firebase'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import CustomButton from '../../components/shared/CustomButtons/Button.jsx'
import Layout from '../../components/layout/layout.js'
import SEO from '../../components/layout/seo.js'
import Parallax from '../../components/shared/Parallax/Parallax.jsx'
import myIdeaPageStyle from '../../components/jss/maritim/views/myIdeaPage.jsx'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'
import WorkIcon from '@material-ui/icons/Work'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

const MyIdeas = ({ classes }) => {
    const firebase = React.useContext(FirebaseContext)

    React.useEffect(() => {
        if (!firebase) {
            return
        }

        firebase.auth().onAuthStateChanged(function(user) {
            if (!user) {
                navigate('/login')
                return
            }
        })
    }, [firebase])
    return (
        <Layout>
            <SEO title="Home" />
            <div>
                <Parallax
                    className={classes.parallax}
                    filter
                    image={require('../../images/bg4.jpg')}
                >
                    <GridContainer className={classes.container}>
                        <GridItem xs={12} sm={12} md={12}>
                            <h1 className={classes.title}>
                                Here is the list of your innovation ideas
                            </h1>
                        </GridItem>
                    </GridContainer>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <GridContainer
                        className={classes.container}
                        justify="center"
                    >
                        {new Array(6).fill(6).map((em, idx) => (
                            <GridItem key={idx} xs={12} sm={6} md={4}>
                                <List>
                                    <ListItem
                                        className={classes.listItem}
                                        button
                                        onClick={() =>
                                            navigate('/my-ideas/edit')
                                        }
                                    >
                                        <ListItemAvatar>
                                            <Avatar>
                                                <ImageIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            className={classes.listItemText}
                                            primary="Photos"
                                            secondary="Jan 9, 2014"
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton
                                                edge="end"
                                                aria-label="comments"
                                                onClick={() =>
                                                    navigate('/my-ideas/edit')
                                                }
                                            >
                                                <EditIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                </List>
                            </GridItem>
                        ))}
                    </GridContainer>
                </div>
            </div>
        </Layout>
    )
}

export default withStyles(myIdeaPageStyle)(MyIdeas)
