import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { fetchComments } from "../services/comment";
import { REQUEST_API_COMMENTS, receiveAPIComments } from "./actions";

function* getAPIComments(action) {
  try {
    const data = yield call(fetchComments);
    yield put(receiveAPIComments(data));
  } catch (e) {
    console.log("ERROR", e);
  }
}

export default function* mainSaga() {
  yield takeLatest(REQUEST_API_COMMENTS, getAPIComments);
}
