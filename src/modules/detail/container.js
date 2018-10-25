import React from 'react'
import mirror, { connect } from 'mirrorx';

import model from './model'
if(!(model.name in mirror.actions)){    mirror.model(model);}

import CartDetail from './components/CartDetail'

const ConnectedDetail = connect( state => state.detail, null )(CartDetail)
export default ConnectedDetail