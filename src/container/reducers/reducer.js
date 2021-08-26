import { combineReducers } from "redux";
const INITIAL_STATE = {
  loading: false,
  okr_list: [],
  okr_filters: {},
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "START_LOADER":
      return { ...state, loading: true };
    case "STOP_LOADER":
      return { ...state, loading: false };
    case "SET_OKR_RESULTS":
      return {
        ...state,
        okr_list: action.payload.parent_list,
        okr_filters: action.payload.categories,
      };
    case "UPDATE_OKR_FILTER":
      let okr_filters = { ...state.okr_filters };
      okr_filters[action.payload] = !okr_filters[action.payload];
      return { ...state, okr_filters: okr_filters };
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer,
});
