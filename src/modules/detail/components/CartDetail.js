
import React, { Component } from 'react'
import mirror, { actions} from 'mirrorx'

export default class CartDetail extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        actions.detail.loadCorpInfo()
    }
    render() {
        console.log(this.props);

        return (
            <div className="cart-detail">
                <h3>location, { this.props.info.regLocation }</h3>
            </div>
        )
    }
}