import React, { Component } from 'react'
import axios from 'axios'

export default class Corp extends Component {
    constructor(props){
        super(props)
        this.state = {
            info: {}
        }
    }
    componentWillMount(){
        this.getCorpData()
    }
    getCorpData(){
        axios.get('/mes/info')
            .then((res) => {
                let { code, data, msg } = res.data;

                this.setState({
                    info: data
                })
            })
    }
    render() {
        let { name, regLocation} = this.state.info;
      
        return (
            <div style={{width: "100%"}} className="banner">
                <h3>{name}</h3>
                <p>公司地点：{regLocation}</p>
                
            </div>
        )
    }
}