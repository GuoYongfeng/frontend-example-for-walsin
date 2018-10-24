import React, { Component } from 'react'

import 'assets/iconfont/iconfont.css'

export default class Icon extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <i style={{fontSize: `${this.props.size}px`}} 
                className={`icon iconfont icon-${this.props.type}`}>
            </i>
        )
    }
}