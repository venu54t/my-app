import { networkmiddleware } from './../middleware/networkmiddleware';
import React from 'react'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk';



export const getEnhancers = () => (
  applyMiddleware(networkmiddleware, thunk)
)