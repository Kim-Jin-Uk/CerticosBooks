import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  GET_BOOKS_DATA_LIST_FOR_KEYWORD_FAILURE,
  GET_BOOKS_DATA_LIST_FOR_KEYWORD_REQUEST,
  GET_BOOKS_DATA_LIST_FOR_KEYWORD_SUCCESS,
} from "../reducers";
import { bookRequest } from "../types/bookData";

function getBooksDataListForKeywordAPI(data: bookRequest) {
  console.log("req api", data);
  return axios.get(`https://dapi.kakao.com/v3/search/book`, {
    params: {
      target: data.target ? data.target : "title",
      query: data.query,
      page: data.page,
      size: data.size,
      sort: data.sort ? data.sort : "accuracy",
    },
    headers: { Authorization: `KakaoAK c5b65eb42d62119a052daaa1389c3483` },
  });
}
function* getBooksDataListForKeyword(action: any) {
  try {
    const result: AxiosResponse<any> = yield call(
      getBooksDataListForKeywordAPI,
      action.data
    );
    yield put({
      type: GET_BOOKS_DATA_LIST_FOR_KEYWORD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_BOOKS_DATA_LIST_FOR_KEYWORD_FAILURE,
      error: err,
    });
  }
}

function* watchGetBooksDataListForKeyword() {
  yield takeLatest(
    GET_BOOKS_DATA_LIST_FOR_KEYWORD_REQUEST,
    getBooksDataListForKeyword
  );
}

export default function* projectSaga() {
  yield all([fork(watchGetBooksDataListForKeyword)]);
}
