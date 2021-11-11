//import "regenerator-runtime/runtime"
import { call, put, takeLatest } from "redux-saga/effects";
import get from "lodash/get";

import {
  getCategoryListSuccess,
  getCategoryListFail,
  getSearchListSuccess,
  getSearchListFail,
} from "./action";

import { GET_CATEGORY_LIST, GET_SEARCH_LIST } from "./constant";

import { fetchCategoryListApi, fetchSearchListApi } from "./api";

function* common(action = { params: {} }, success, otherParams) {
  if (typeof get(action, "params.successAction") === "function" && success) {
    yield action.params.successAction(otherParams);
  }
  if (typeof get(action, "params.errorAction") === "function" && !success) {
    yield action.params.errorAction(...otherParams);
  }
}

export function* fetchCategoryListSaga(action) {
  console.log(action, "action in fetch saga");
  try {
    const response = yield call(() =>
      fetchCategoryListApi(get(action, "payload"))
    );
    console.log(response);
    if (response && response.status === 200 && response.data) {
      yield put(getCategoryListSuccess(response, action));
      yield common(action, true, response);
    } else {
      yield put(getCategoryListFail(response, action));
      yield common(action, false, response);
    }
  } catch (e) {
    yield put(getCategoryListFail(e.message, action));
  }
}

export function* fetchSearchListSaga(action) {
  console.log(action, "action in saga");
  try {
    const response = yield call(() =>
      fetchSearchListApi(get(action, "payload"))
    );
    console.log(response, "res saga search");
    if (response && response.status === 200 && response.data) {
      yield put(getSearchListSuccess(response, action));
      yield common(action, true, response);
    } else {
      yield put(getSearchListFail(response, action));
      yield common(action, false, response);
    }
  } catch (e) {
    yield put(getSearchListFail(e.message, action));
  }
}

export default function* mySaga() {
  yield takeLatest(GET_CATEGORY_LIST, fetchCategoryListSaga);
  yield takeLatest(GET_SEARCH_LIST, fetchSearchListSaga);
}
