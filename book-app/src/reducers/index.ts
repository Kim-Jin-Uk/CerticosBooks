import { produce, Draft } from "immer";
import { AnyAction } from "redux";
import { likesHashMap, bookData } from "../utils/types";
import JsonLocalStorage from "../utils/jsonLocalStorage";

export const initialSate = {
  booksDataList: [],
  likesDataList: [],
  likesDataHashMap: {} as likesHashMap,
  booksPageableCount: 0,
  booksIsEnd: true,
  getBooksDataListForKeywordLoading: false,
  getBooksDataListForKeywordSuccess: false,
  getBooksDataListForKeywordError: null,
};

export const GET_BOOKS_DATA_LIST_FOR_KEYWORD_REQUEST =
  "GET_BOOKS_DATA_LIST_FOR_KEYWORD_REQUEST";
export const GET_BOOKS_DATA_LIST_FOR_KEYWORD_SUCCESS =
  "GET_BOOKS_DATA_LIST_FOR_KEYWORD_SUCCESS";
export const GET_BOOKS_DATA_LIST_FOR_KEYWORD_FAILURE =
  "GET_BOOKS_DATA_LIST_FOR_KEYWORD_FAILURE";
export const GET_LIKES_DATA = "GET_LIKES_DATA";
export const SET_LIKES_DATA = "SET_LIKES_DATA";
export const PUSH_LIKES_DATA = "PUSH_LIKES_DATA";
export const DEL_LIKES_DATA = "DEL_LIKES_DATA";

const rootReducer = (state = initialSate, action: AnyAction) =>
  produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case GET_BOOKS_DATA_LIST_FOR_KEYWORD_REQUEST:
        draft.getBooksDataListForKeywordLoading = true;
        draft.getBooksDataListForKeywordSuccess = false;
        draft.getBooksDataListForKeywordError = null;
        break;
      case GET_BOOKS_DATA_LIST_FOR_KEYWORD_SUCCESS:
        draft.getBooksDataListForKeywordLoading = false;
        draft.getBooksDataListForKeywordSuccess = true;
        draft.getBooksDataListForKeywordError = null;
        draft.booksDataList = action.data.documents;
        draft.booksPageableCount = action.data.meta.pageable_count;
        draft.booksIsEnd = action.data.meta.is_end;
        break;
      case GET_BOOKS_DATA_LIST_FOR_KEYWORD_FAILURE:
        draft.getBooksDataListForKeywordLoading = false;
        draft.getBooksDataListForKeywordSuccess = false;
        draft.getBooksDataListForKeywordError = action.error;
        draft.booksDataList = [];
        draft.booksPageableCount = 0;
        draft.booksIsEnd = true;
        break;
      case GET_LIKES_DATA:
        draft.likesDataList = action.data;
        break;
      case SET_LIKES_DATA:
        draft.likesDataList = JsonLocalStorage.getItem("likesDataList") || [];
        draft.likesDataHashMap =
          JsonLocalStorage.getItem("likesDataHashMap") || {};
        break;
      case PUSH_LIKES_DATA:
        if (!draft.likesDataHashMap[action.data.isbn]) {
          draft.likesDataList.push(action.data);
          draft.likesDataHashMap[action.data.isbn] = true;
          JsonLocalStorage.setItem("likesDataList", draft.likesDataList);
          JsonLocalStorage.setItem("likesDataHashMap", draft.likesDataHashMap);
        }
        break;
      case DEL_LIKES_DATA:
        draft.likesDataList = draft.likesDataList.filter(
          (v: bookData) => v.isbn !== action.data
        );
        delete draft.likesDataHashMap[action.data];
        JsonLocalStorage.setItem("likesDataList", draft.likesDataList);
        JsonLocalStorage.setItem("likesDataHashMap", draft.likesDataHashMap);
        break;
      default:
    }
  });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
