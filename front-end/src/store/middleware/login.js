import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import userLogin from "../../services/backend-services/login";

function* watchUserLogin() {
  console.log("here in the user login");
  yield takeEvery(actionTypes.LOGIN_ACTIONS.USER_LOGIN_REQUEST, userLogin);
}

export default function* login() {
  yield all([watchUserLogin()]);
}
