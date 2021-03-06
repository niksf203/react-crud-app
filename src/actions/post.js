import * as type from '../constants/actionType'
import { Service } from '../service'

export const getAllPost = () => async (dispatch) => {
  try {
    const res = await Service.Post.getAllPost()
    if(res) {
      dispatch({
        type: type.POST.GET_ALL,
        payload: res.data
      })
    }
  } catch (err) {
    console.log('ACTION_GET_ALL_POST: ', err)
  }
}

export const getPostById = (id) => async (dispatch) => {
  try {
    const res = await Service.Post.getPostById(id)
    if(res) {
      dispatch({
        type: type.FORM_STATE.IS_EDITING,
        payload: res.data
      })
      dispatch({
        type: type.FORM_DIALOG.OPEN
      })
    }
  } catch (err) {
    console.log('ACTION_GET_POST_BY_ID: ', err)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await Service.Post.deletePost(id)
    if(res) {
      dispatch({
        type: type.POST.DELETE,
        payload: res.config.id
      })
      dispatch({
        type: type.MESSAGE.OPEN,
        payload: 'Delete Success'
      })
    }
  } catch (err) {
    console.log('ACTION_DELETE_POST: ', err)
  }
}

export const createPost = (value) => async (dispatch) => {
  try {
    const res = await Service.Post.createPost(value)
    if(res) {
      dispatch({
        type: type.POST.CREATE,
        payload: res.data
      })
      dispatch({
        type: type.SIDE_BAR.HIDE
      })
      dispatch({
        type: type.FORM_DIALOG.CLOSE
      })
      dispatch({
        type: type.MESSAGE.OPEN,
        payload: 'Create Success'
      })
    }
  } catch (err) {
    console.log('ACTION_CREATE_POST: ', err)
  }
}

export const editPost = (value) => async (dispatch) => {
  try {
    const res = await Service.Post.editPost(value)
    if(res) {
      dispatch({
        type: type.POST.EDIT,
        payload: res.data
      })
      dispatch({
        type: type.FORM_DIALOG.CLOSE
      })
      dispatch({
        type: type.MESSAGE.OPEN,
        payload: 'Update Success'
      })
      dispatch({
        type: type.FORM_STATE.RESET
      })
    }
  } catch(err) {
    console.log('ACTION_EDIT_POST: ', err)
  }
}
