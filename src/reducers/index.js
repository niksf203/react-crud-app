import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import post from './post'
import user from './user'
import sidebar from './sidebar'
import confirmDialog from './confirmDialog'
import formDialog from './formDialog'
import message from './message'

export default combineReducers({
  post,
  user,
  sidebar,
  confirmDialog,
  formDialog,
  message,
  form: formReducer
})
