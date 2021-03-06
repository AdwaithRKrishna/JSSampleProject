import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {
  email: "",
  password: ""
};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.LOGIN_ACTIONS.USER_LOGIN_REQUEST:
      console.log("am in the reducer")
      return {
        ...state,
        ...action.credentials
      };
    default:
      return state;
  }
}
