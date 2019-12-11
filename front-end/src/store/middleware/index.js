import login from "./login";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  debugger;
  console.log("bow bow is this world going");
  yield all([fork(login)]);
}
