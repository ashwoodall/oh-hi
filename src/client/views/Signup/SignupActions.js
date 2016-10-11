import cookie from 'react-cookie'

import constants from 'core/constants'
import configureApi from 'core/configureApi'

const api = (user) => {
  let url = '/api/register'
  let key = 'user'

  return configureApi(url, key, user)
}

export const register = (user) => {
  return (dispatch) => {
    dispatch({ type: constants.reducerActions.CALL_API, api: api(user) })
    	.then(response => { cookie.save('username', response.response.email) })
  }
}
