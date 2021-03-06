import React , {useReducer} from 'react'
import alertContext from './alertContext'
import alertReducer from './alertReducer'
import {SET_ALERT,REMOVE_ALERT} from '../types'

const AlertState = props => {
  
    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState);

    const showAlert = (msg, type) => {
        dispatch({
            type:SET_ALERT,
            payload:{msg,type}
         } ); //{msg:msg, type:type}과 같음
        setTimeout(() => dispatch({type:REMOVE_ALERT}), 2000);
      };

      return <alertContext.Provider
    value={{ 
        alert:state,
        showAlert
    }}>
        {props.children}
    </alertContext.Provider>
}

export default AlertState
