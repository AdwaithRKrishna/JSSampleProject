import { takeEvery, all, call } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import apiCalls from "../../services/backend-services";
import utils from "../utils"

function* watchUserLogin() {
  yield takeEvery(actionTypes.LOGIN_ACTIONS.USER_LOGIN_REQUEST, userLoginWithDetails);
}

function* userLoginWithDetails(action){
  try{
    debugger
    let response = yield call( apiCalls.userLogin, action.credentials );
    utils.storeUserToken( response.data.token )
  }catch(err){
    console.log("The error is---", err);
  }
}

export default function* login() {
  yield all([watchUserLogin()]);
}
