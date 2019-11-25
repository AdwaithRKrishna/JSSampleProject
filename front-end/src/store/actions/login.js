import * as actionTypes from "../actionTypes";

export const doLogin = credentials => {
  return {
    type: actionTypes.LOGIN_ACTIONS.USER_LOGIN_REQUEST,
    credentials: credentials
  };
};
