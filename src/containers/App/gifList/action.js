import { createAction } from "redux-actions";

import {
  GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_FAIL,
  GET_SEARCH_LIST,
  GET_SEARCH_LIST_SUCCESS,
  GET_SEARCH_LIST_FAIL,
} from "./constant";
// export const getCategoryList = (params) => {
//     return { type: GET_CATEGORY_LIST, params }
// }

// export const getCategoryListSuccess = (response) => {
//     return { type: GET_CATEGORY_LIST_SUCCESS, response }
// }

// export const getCategoryListFail = (response) => {
//     return { type: GET_CATEGORY_LIST_FAIL, response }
// }

export const getCategoryList = createAction(GET_CATEGORY_LIST);
export const getCategoryListSuccess = createAction(GET_CATEGORY_LIST_SUCCESS);
export const getCategoryListFail = createAction(GET_CATEGORY_LIST_FAIL);

export const getSearchList = createAction(GET_SEARCH_LIST);
export const getSearchListSuccess = createAction(GET_SEARCH_LIST_SUCCESS);
export const getSearchListFail = createAction(GET_SEARCH_LIST_FAIL);
