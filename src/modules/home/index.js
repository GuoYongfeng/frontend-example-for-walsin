import React, { Component } from 'react'
import yonyouLogoImg from 'assets/imgs/yonyou.jpg'

export default class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div style={{width: "100%"}} className="banner">
                <img src={yonyouLogoImg} />
            </div>
        )
    }
}