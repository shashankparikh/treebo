import qs from "qs";
import axios from "../../../utils/axios";

const URL_HELPER = {
  GET_SUB_TYPE_ENUM_LIST: `https://api.giphy.com/v1/gifs/trending`,
  GET_SEARCH_LIST: `https://api.giphy.com/v1/gifs/search`,
};

// Api Call to get the sub Type for the services enum list
async function postCategoryListApi(request) {
  try {
    const response = await axios.post(URL_HELPER.FETCH_CATALOG_PRICE, request);
    return response;
  } catch (error1) {
    // console.error('error:fetching:list', error1);
    return {};
    // throw error;
  }
}

async function fetchCategoryListApi(data) {
  try {
    const response = await axios.get(
      `${URL_HELPER.GET_SUB_TYPE_ENUM_LIST}?${qs.stringify(data)}`
    );
    console.log(response, "response");
    return response;
  } catch (error) {
    throw error;
  }
}

async function fetchSearchListApi(data) {
  console.log(data, "data in api search");
  try {
    const response = await axios.get(
      `${URL_HELPER.GET_SEARCH_LIST}?${qs.stringify(data)}`
    );
    console.log(response, "response");
    return response;
  } catch (error) {
    throw error;
  }
}

export { fetchCategoryListApi, postCategoryListApi, fetchSearchListApi };
