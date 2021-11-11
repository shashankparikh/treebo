import {
  GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_FAIL,
  GET_SEARCH_LIST,
  GET_SEARCH_LIST_SUCCESS,
  GET_SEARCH_LIST_FAIL,
} from "./constant";
import get from "lodash/get";
const initialState = {
  apiState: "", // loading, success, error
  list: null,
  visible: false,
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_LIST:
      return {
        ...state,
        apiState: "loading",
      };

    case GET_CATEGORY_LIST_SUCCESS:
      console.log(action, "action in reducer");
      // const listData = get(action,'payload.data')
      const listData = get(action, "payload.data.data");

      return {
        ...state,
        apiState: "success",
        loading: false,
        list: listData,
      };

    case GET_CATEGORY_LIST_FAIL:
      return {
        ...state,
        apiState: "error",
      };

    case GET_SEARCH_LIST:
      return {
        ...state,
        apiState: "loading",
      };

    case GET_SEARCH_LIST_SUCCESS:
      console.log(action, "action in reducer search");
      // const listData = get(action,'payload.data')
      const searchData = get(action, "payload.data.data");

      return {
        ...state,
        apiState: "success",
        loading: false,
        list: searchData,
      };

    case GET_SEARCH_LIST_FAIL:
      return {
        ...state,
        apiState: "error",
      };

    default:
      return state;
  }
}
