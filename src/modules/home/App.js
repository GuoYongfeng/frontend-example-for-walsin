import React from 'react'

import Icon from './componnts/Icon'
import Banner from './componnts/Banner'
import Corp from './componnts/Corp'

const App = () => (
    <div className="app"> 
        <div className="header">
            <h3>华新丽华应用平台<Icon type="chaxun" size="40" /></h3>
        </div>
        <Banner />
        <Corp />
    </div>
)

export default App;