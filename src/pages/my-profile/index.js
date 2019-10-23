import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
import { navigate } from 'gatsby'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons

import { FirebaseContext } from 'gatsby-plugin-firebase'
// core components
import Layout from '../../components/layout/layout.js'
import Button from '../../components/shared/CustomButtons/Button.jsx'
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'

import Parallax from '../../components/shared/Parallax/Parallax.jsx'

import styles from '../../components/jss/maritim/views/profilePage.jsx'

const useStyles = makeStyles(styles)

export default function ProfilePage(props) {
    const firebase = React.useContext(FirebaseContext)
    const [user, setUser] = React.useState()
    const classes = useStyles()
    const { ...rest } = props
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid,
    )
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)

    React.useEffect(() => {
        if (!firebase) {
            return
        }

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log(user)

                const db = firebase.firestore()
                const query = db.collection('users').doc(user.uid)

                query.get().then(hasil => {
                    setUser(hasil.data())
                })
            } else {
                navigate('/login')
                return
            }
        })
    }, [firebase])

    return (
        <Layout>
            <Parallax
                small
                filter
                image={require('../../images/profile-bg.jpg')}
            />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img
                                            src="https://1.bp.blogspot.com/_bCYQxIvMQ2U/TQOQAXHapkI/AAAAAAAAAQw/dIjtEHBe5cc/s640/anonymous_international_black_sticker-p217501226871431885qjcl_400.jpg"
                                            alt="..."
                                            className={imageClasses}
                                        />
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>
                                            {user && user.name}
                                        </h3>
                                        <h6>{user && user.type}</h6>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>{user && user.email}</p>
                            <p>{user && user.phone}</p>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
