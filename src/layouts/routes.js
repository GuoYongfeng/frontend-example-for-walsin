
import React from 'react'
import { Route, withRouter, Switch } from 'mirrorx'

import Home from '../modules/home'
import ConnectedDetail from '../modules/detail/container'
import Corp from '../modules/corp'

const MainRoutes = () => (
    <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/corp" component={Corp} />
        <Route path="/detail" component={ConnectedDetail} />
    </div>
)

export default MainRoutes

