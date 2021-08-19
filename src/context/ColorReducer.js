import Values from "values.js";
const reducer = (state, action) => {
  if (action.type === "FORM_SUBMIT") {
    action.payload.preventDefault();

    try {
      let colors = new Values(state.color).all(10);
      return { ...state, list: colors, error: false };
    } catch (e) {
      return { ...state, error: true };
    }
  }

  if (action.type === "SET_COLOR") {
    return { ...state, color: action.payload };
  }

  if (action.type === "COPY_TO_CLIPBOARD") {
    navigator.clipboard.writeText(action.payload);
    return { ...state };
  }

  if (action.type === "CLOSE_ERROR_ALERT") {
    return { ...state, error: false };
  }
};

export default reducer;
