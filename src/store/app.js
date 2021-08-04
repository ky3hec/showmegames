//Action types
const ISLOADING_SET = "isLoadingSet";
const ISLOADING_UNSET = "isLoadingUnset";
const HEADING_SET = "headingSet";

const initialState = {
  isLoading: false,
  pageSize: 10,
  heading: "Top 10 games",
};
//Action creators
export function isLoadingSet() {
  return {
    type: ISLOADING_SET,
    payload: {
      isLoading: true,
    },
  };
}
export function isLoadingUnset() {
  return {
    type: ISLOADING_UNSET,
    payload: {
      isLoading: false,
    },
  };
}
export function headingSet(heading) {
  return {
    type: HEADING_SET,
    payload: {
      heading,
    },
  };
}
//Reducer
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ISLOADING_SET:
      return { ...state, isLoading: action.payload.isLoading };
    case ISLOADING_UNSET:
      return { ...state, isLoading: action.payload.isLoading };
    case HEADING_SET:
      return { ...state, heading: action.payload.heading };
    default:
      return state;
  }
}
