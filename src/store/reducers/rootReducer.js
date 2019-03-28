import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

import projectReducer from './projectReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({ 
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer
})

export default rootReducer