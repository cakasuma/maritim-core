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
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

const MyIdeas = ({ classes }) => {
    const firebase = React.useContext(FirebaseContext)
    const [products, setProducts] = React.useState([])
    const [user, setUser] = React.useState([])

    React.useEffect(() => {
        if (!firebase) {
            return
        }

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUser(user)
                console.log(user)

                const db = firebase.firestore()
                const query = db
                    .collection('innovation')
                    .where('innovator', '==', `${user.uid}`)

                query.get().then(hasil => {
                    const hasilProducts = []
                    hasil.forEach(async doc => {
                        const productDoc = {}
                        productDoc.id = doc.id
                        productDoc.data = doc.data()
                        hasilProducts.push(productDoc)
                    })
                    setProducts(hasilProducts)
                })
            } else {
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
                            <h1 className={classes.title}>Kumpulan inovasi</h1>
                            <h6 className={classes.titleDescription}>
                                Inilah kontribusi inovasi anda untuk Indonesia
                                maju
                            </h6>
                        </GridItem>
                    </GridContainer>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <GridContainer
                        className={classes.container}
                        justify="center"
                    >
                        {products &&
                            products.map((product, idx) => (
                                <GridItem key={idx} xs={12} sm={6} md={4}>
                                    <List>
                                        <ListItem
                                            className={classes.listItem}
                                            button
                                            onClick={
                                                () =>
                                                    alert(
                                                        'fitur ini belum tersedia utk saat ini',
                                                    )
                                                // navigate(
                                                //     `/my-ideas/edit?pid=${product.id}`,
                                                // )
                                            }
                                        >
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <img
                                                        src={
                                                            product.data.image_1
                                                        }
                                                    />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                className={classes.listItemText}
                                                primary={product.data.title}
                                                secondary={
                                                    product.data.subtitle
                                                }
                                            />
                                            <ListItemSecondaryAction>
                                                <IconButton
                                                    edge="end"
                                                    aria-label="comments"
                                                    onClick={
                                                        () =>
                                                            alert(
                                                                'fitur ini belum tersedia utk saat ini',
                                                            )
                                                        // navigate(
                                                        //     `/my-ideas/edit?pid=${product.id}`,
                                                        // )
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
