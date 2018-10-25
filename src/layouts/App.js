import React from 'react'
import { Router, Link } from 'mirrorx';

import Icon from './Icon'
import './index.less'
import MainRoutes from './routes'

export default class App extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="app"> 
                <Router>
                    <div className="main">
                        <div className="header">
                            <Link to="/">Home 首页</Link>
                            <Link to="/corp">corp 企业信息</Link>
                            <Link to="/detail">Detail 详情</Link>
                        </div>
                        <MainRoutes />
                    </div>
                </Router>
            </div>
        )
    }
}

