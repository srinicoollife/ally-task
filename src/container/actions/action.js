export const startLoader = () => ({
  type: "START_LOADER",
});
export const stopLoader = () => ({
  type: "STOP_LOADER",
});
export const setOkrResults = (data) => ({
  type: "SET_OKR_RESULTS",
  payload: data,
});
export const updateOkrFilterStatus = (data) => ({
  type: "UPDATE_OKR_FILTER",
  payload: data,
});
