import {SET_ALERT, REMOVE_ALERT} from './types';
import uuid from 'uuid';

//alert: {id, msg, alertType}
//double arrow -> thunk middleware
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  //random id
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: {msg, alertType, id}
  });

  setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), timeout);
}