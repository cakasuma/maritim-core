/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

// core components
import GridContainer from '../Grid/GridContainer.jsx'
import GridItem from '../Grid/GridItem.jsx'

import navPillsStyle from '../../jss/maritim/components/navPillsStyle.jsx'

class NavPillsStatic extends React.Component {
    render() {
        const { classes, tabs, horizontal, alignCenter } = this.props
        const flexContainerClasses = classNames({
            [classes.flexContainer]: true,
            [classes.horizontalDisplay]: horizontal !== undefined,
        })
        const tabButtons = (
            <Tabs
                classes={{
                    root: classes.root,
                    fixed: classes.fixed,
                    flexContainer: flexContainerClasses,
                    indicator: classes.displayNone,
                }}
                value={0}
                onChange={this.handleChange}
                centered={alignCenter}
            >
                {tabs.map((prop, key) => {
                    var icon = {}
                    if (prop.tabIcon !== undefined) {
                        icon['icon'] = (
                            <prop.tabIcon className={classes.tabIcon} />
                        )
                    }
                    const pillsClasses = classNames({
                        [classes.pills]: true,
                        [classes[prop.color]]: true,
                        [classes.horizontalPills]: horizontal !== undefined,
                        [classes.pillsWithIcons]: prop.tabIcon !== undefined,
                    })
                    return (
                        <Tab
                            label={prop.tabButton}
                            key={key}
                            {...icon}
                            classes={{
                                root: pillsClasses,
                            }}
                        />
                    )
                })}
            </Tabs>
        )

        return horizontal !== undefined ? (
            <GridContainer>
                <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
            </GridContainer>
        ) : (
            <div>{tabButtons}</div>
        )
    }
}

NavPillsStatic.defaultProps = {
    color: 'primary',
}

NavPillsStatic.propTypes = {
    classes: PropTypes.object.isRequired,
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            tabButton: PropTypes.string,
            tabIcon: PropTypes.object,
            color: PropTypes.oneOf([
                'primary',
                'warning',
                'danger',
                'success',
                'info',
                'rose',
            ]),
        }),
    ).isRequired,
    horizontal: PropTypes.shape({
        tabsGrid: PropTypes.object,
        contentGrid: PropTypes.object,
    }),
    alignCenter: PropTypes.bool,
}

export default withStyles(navPillsStyle)(NavPillsStatic)
