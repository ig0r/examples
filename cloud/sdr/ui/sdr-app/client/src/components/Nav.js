import React, {Component} from 'react'
import {
  InteriorLeftNav, InteriorLeftNavItem,
} from 'carbon-addons-cloud-react'
import {
  Link,
} from 'react-router-dom'

import './Nav.css'

class Nav extends Component {

  render() {

    let activeRoute = "global-keywords"

    let locationHref = window.location.href

    if (locationHref.includes("edge-nodes")) {
      activeRoute = "edge-nodes"
    }

    console.log('active route', activeRoute)
  

    return (
      <InteriorLeftNav className="nav-top-reset">
        <InteriorLeftNavItem className={activeRoute === 'global-keywords' && 'active-route'}>
          <Link to="/global-keywords">Global Keywords</Link>
        </InteriorLeftNavItem>
        <InteriorLeftNavItem className={activeRoute === 'edge-nodes' && 'active-route'}>
          <Link to="/edge-nodes">Edge Nodes</Link>
        </InteriorLeftNavItem>
      </InteriorLeftNav>
    )
  }
}

export default Nav